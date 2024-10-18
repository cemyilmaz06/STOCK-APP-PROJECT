import React, { useEffect,useState } from "react";
import useStockRequests from "../services/useStockRequests";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStock } = useStockRequests();
  const initialState={ image:"",address:"",phone:"",name:""}
  const [data, setData] = useState({initialState});
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
setData(initialState);
  }


  useEffect(() => {
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h5" color={"error"} mb={2}>
        Firms
      </Typography>
      <Button variant="contained" sx={{mb:2}} onClick={handleOpen}>NEW FIRM</Button>
<FirmModal open={open}  handleClose={handleClose} data={data} setData={setData}/>
      <Grid container justifyContent={"center"} gap={2}>
        {firms.map((firm,index) => (
          <Grid item key={index}>
            <FirmCard firm={firm} handleOpen={handleOpen} data={data} setData={setData}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
