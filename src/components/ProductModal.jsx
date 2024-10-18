import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";


import useStockRequests from "../services/useStockRequests";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ handleClose, open,data,setData }) {
  const {postStock,putStock}=useStockRequests()


  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (data._id) {
      //? put
      putStock("firms", data)
    } else {
      //? post
      postStock("firms", data)
    }
    //? Reset form
    setData({ image: "", address: "", phone: "", name: "" })
    //? close modal
    handleClose()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={data.name}
              onChange={handleChange}
              required
            />
           
            <Button variant="contained" type="submit" >
             {data._id ? "UPDATE FIRM" : "ADD FIRM"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
