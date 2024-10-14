import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Firms = () => {
  const {token}=useSelector(state=>state.auth)
const getFirm=async()=>{

  try {
    const {data}= await axios(`${process.env.REACT_APP_BASE_URL}/firms`,{
      headers: {Authorization:  `Token ${token}`},
    })
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
getFirm()
},[])

  return (
    <div>Firms</div>
  )
}

export default Firms