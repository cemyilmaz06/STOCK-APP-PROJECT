import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, getStockSuccess} from '../features/stockSlice'


const useStockRequests = () => {
  const dispatch=useDispatch()
    const {token}=useSelector(state=>state.auth)
    const getStock = async (path) => {
        dispatch(fetchStart())
        try {
          const { data } = await axios(
            `${process.env.REACT_APP_BASE_URL}/${path}`,
            {
              headers: { Authorization: `Token ${token}` },
            }
          )
        
          dispatch(getStockSuccess({ data: data.data, path }))
          console.log(data)
        } catch (error) {
          dispatch(fetchFail())
          console.log(error)
        }
      }
  
      return{getStock}
}

export default useStockRequests