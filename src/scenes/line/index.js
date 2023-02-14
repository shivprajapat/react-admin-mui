import React from 'react'
import { Box } from '@mui/system'
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line