import React from 'react'
import { Box } from '@mui/system'
import { GeographyChart, Header } from "../../components";
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography