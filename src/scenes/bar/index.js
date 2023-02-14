import React from 'react'
import { Box } from '@mui/system'
import { BarChart, Header } from "../../components";

const Bar = () => {
  return (
    <Box>
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <Box height="75vh">
        <BarChart />
      </Box>
          </Box>
  )
}

export default Bar