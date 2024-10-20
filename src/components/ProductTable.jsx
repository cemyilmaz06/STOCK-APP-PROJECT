import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem  } from '@mui/x-data-grid';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { useSelector } from 'react-redux';
const columns = [
  { field: '_id', headerName: '#', flex:1.2,minWidth:140 },
  {
    field: 'categoryId',
    headerName: 'Categories',
    flex:1,minWidth:140,
    align:"center",
    headerAlign:"center",
    valueGetter: (value)=>value.name,

  },
  {
    field: 'brandId',
    headerName: 'Brands',
    valueGetter: (value)=>value.name,
    flex:1,minWidth:140,
    align:"center",
    headerAlign:"center",
  },
  {
    field: 'name',
    headerName: 'Name',
    type: 'number',
    flex:1,minWidth:140,
    align:"center",
    headerAlign:"center",
  },
  {
    field: 'quantity',
    headerName: 'Stock',
    type: 'number',
    flex:1,minWidth:90,
    align:"center",
    headerAlign:"center",
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Operation',
    getActions: () => [
      <GridActionsCellItem icon={<DeleteForeverIcon/>} label="Delete" />,
     
    ]
  }
  
];

const getRowId=(row)=>row._id

export default function ProductTable() {
  const {products}=useSelector((state)=>state.stock)
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
