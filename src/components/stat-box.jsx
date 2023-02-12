import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box component="div" width="100%" m="0 30px">
            <Box component="div" display="flex" justifyContent="space-between">
                <Box component="div">
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box component="div">
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontStyle="italic" fontWeight={600} sx={{ color: colors.greenAccent[600] }}>
                    {increase}
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox