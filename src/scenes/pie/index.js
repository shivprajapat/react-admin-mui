import React from 'react'
import { Box } from '@mui/system'
import { Header,PieChart } from "../../components";

const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie