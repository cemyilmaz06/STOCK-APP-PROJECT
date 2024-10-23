import React, { useEffect } from 'react'
import KPICard from '../components/KPICard'
import Charts from '../components/Charts'
import useStockRequests from "../services/useStockRequests"
const Home = () => {
  const{getStock}=useStockRequests()
  useEffect(()=>{
getStock("purchases")
getStock("sales")
  },[])
  return (
    <div>
      <KPICard/>
      <Charts/>
    </div>
  )
}

export default Home
