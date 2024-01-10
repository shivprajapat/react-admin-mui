import React from "react";
import { Box } from "@mui/system";
import { tokens } from "theme";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px" component="div">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[500]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
