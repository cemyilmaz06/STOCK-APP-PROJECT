
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, getStockSuccess} from '../features/stockSlice'
import useAxios from './useAxios'


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
  
      return{getStock}
}

export default useStockRequests