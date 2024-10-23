"use client"

import { Stack } from "@mui/material";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";



const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
]
const dataFormatter=(number)=>
  `${Intl.NumberFormat("us").format(number).toString()}`
const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock)

  console.log(sales)

  const salesData = sales.map((sale) => ({
    salesAmount: sale.amount,
    date: new Date(sale.createdAt).toLocaleDateString("tr-TR"),
  }))

  const purchasesData = purchases.map((pur) => ({
    purAmount: pur.amount,
    date: new Date(pur.createdAt).toLocaleDateString("tr-TR"),
  }))

  return (
    <Stack
    display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="row"
      flexWrap={"wrap"}
    
   gap={2}
  
      
    >
      
      <AreaChart
        className="h-80"
        data={salesData}
        index="date"
        categories={["salesAmount"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
        yAxisWidth={80}

      
      />
      <AreaChart
        className="h-80"
        data={purchasesData}
        index="date"
        categories={["purAmount"]}
        colors={["red"]}
        valueFormatter={dataFormatter}
        yAxisWidth={80}
      
      />
    </Stack>
  )
}
export default Charts
