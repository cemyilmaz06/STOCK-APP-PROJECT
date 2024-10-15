import React, { useEffect } from "react";
import useStockRequests from "../services/useStockRequests";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  const { getStock } = useStockRequests();
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h5" color={"error"} mb={2}>
        Firms
      </Typography>
      <Button variant="contained" sx={{mb:2}}>NEW FIRM</Button>

      <Grid container justifyContent={"center"} gap={2}>
        {firms && firms.map((firm,index) => (
          <Grid item key={index}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
