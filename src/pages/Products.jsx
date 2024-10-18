import React, { useEffect,useState } from "react";
import useStockRequests from "../services/useStockRequests";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";


import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const { getStock } = useStockRequests();
  const initialState={ image:"",address:"",phone:"",name:""}
  const [data, setData] = useState({initialState});
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
setData(initialState);
  }


  useEffect(() => {
    getStock("products")
  }, [])

  return (
    <div>
      <Typography variant="h5" color={"error"} mb={2}>
      Products
      </Typography>
      <Button variant="contained" sx={{mb:2}} onClick={handleOpen}>NEW PRODUCT</Button>
      <ProductTable/>
<ProductModal open={open}  handleClose={handleClose} data={data} setData={setData}/>
      
    </div>
  );
};

export default Products;
