import { createSlice } from '@reduxjs/toolkit'


const initialState = {
firms:[],
products:[],
sales:[],
purchases:[],
brands:[],
categories:[],
loading:false,
error:false,
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true
        state.error = false
      },
      getFirmsSuccess:(state,{payload})=>{
        state.loading=false
        state.firms=payload
      },
      getSalesSuccess:(state,{payload})=>{
        state.loading=false
        state.sales=payload
      },
      getStockSuccess: (state, { payload }) => {
        state.loading = false
        state[payload.path] = payload.data
      },
      getProSaleBraSuccess: (state, { payload }) => {
        state.loading = false
        state.products = payload.products
        state.sales = payload.sales
        state.brands = payload.brands
      },
      fetchFail: (state) => {
        state.loading = false
        state.error = true
      },
  }
});

export const {fetchStart,fetchFail,getFirmsSuccess,getSalesSuccess,getStockSuccess, getProSaleBraSuccess} = stockSlice.actions

export default stockSlice.reducer