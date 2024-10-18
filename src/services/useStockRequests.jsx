
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, getStockSuccess} from '../features/stockSlice'
import useAxios from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"


const useStockRequests = () => {
  const dispatch=useDispatch()
 const{axiosToken}=useAxios()
    const getStock = async (path) => {
        dispatch(fetchStart())
        try {
          const { data } = await axiosToken.get(path)
        
          dispatch(getStockSuccess({ data: data.data, path }))
          
        } catch (error) {
          dispatch(fetchFail())
          console.log(error)
        }
      }
  
    const deleteStock = async (path,id) => {
        dispatch(fetchStart())
        try {
          await axiosToken.delete(`${path}/${id}`)
        
     getStock(path)
     toastSuccessNotify("Silme işlmemi başarılı")
        } catch (error) {
          
          dispatch(fetchFail())
          toastErrorNotify("Silme işlemi başarısız")
         
        }
      }
  
    const postStock = async (path,data) => {
        dispatch(fetchStart())
        try {
          await axiosToken.post(path,data)
          toastSuccessNotify("Veri ekleme işlemi başarılı")
     getStock(path)
          
        } catch (error) {
          toastErrorNotify("Veri ekleme işlemi başarısız")
          dispatch(fetchFail())
         
        }
      }
      const putStock = async (path, data) => {
        dispatch(fetchStart())
        try {
          await axiosToken.put(`${path}/${data._id}`, data)
          toastSuccessNotify(`Güncelleme başarılı.`)
          getStock(path)
        } catch (error) {
          dispatch(fetchFail())
          toastErrorNotify("Güncelleme başarısız oldu.")
          console.log(error)
        }
      }
  
      return{getStock,deleteStock,postStock,putStock}
}

export default useStockRequests