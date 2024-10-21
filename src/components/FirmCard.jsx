import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { butonStyle } from '../style/globalStyles';
import useStockRequests from '../services/useStockRequests';
import { Container } from '@mui/material';
export default function FirmCard({firm,handleOpen,setData}) {
   const {deleteStock}=useStockRequests()
  return (
    <Container>
    <Card elevation={10}
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: 300,
      height: 400,
      p: 2,
    }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          {firm?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',textAlign:"center" }}>
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={firm?.name}
        height="140"
        image={firm?.image}
        sx={{objectFit:"contain"}}
      />
       <Typography variant="body2" sx={{ color: 'text.secondary',mt:"2" }}>
          {firm?.phone}
        </Typography>
      <CardActions>
       <DeleteOutlineIcon sx={butonStyle} onClick={()=>deleteStock("firms",firm._id)} />
       <EditIcon sx={butonStyle} onClick={()=>{
        setData(firm)
        handleOpen()} }/>
      </CardActions>
    </Card>
    </Container>
  );
}
