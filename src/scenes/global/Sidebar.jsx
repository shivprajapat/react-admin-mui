import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from '../../theme';
import iconUser from '../../images/user.jpeg'
import { sideConfig } from "../../data/mockData";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem style={{
      color: colors.grey[100]
    }} active={selected === title} onClick={() => setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}
const SidebarLayout = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar-layout::-webkit-scrollbar": {
          width: 0
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },

        "& .pro-inner-item:hover": {
          color: `${colors.greenAccent[500]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isNonMobile ? isCollapsed : !isCollapsed}>
        <Menu iconShape="square">
          {/* Logo Part */}
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}>
            {
              !isCollapsed && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                  <Typography variant="h3" color={colors.grey[100]}>{isNonMobile ? "Admins" : "" } </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}><MenuOutlinedIcon /></IconButton>
                </Box>
              )
            }
          </MenuItem>

          {/* Profile Part */}
          {
            isNonMobile ? !isCollapsed && (
              <Box mb="25px" component='div'>
                <Box display="flex" justifyContent="center" alignItems="center" component='div'>
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={iconUser}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center" component='div'>
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Shiv
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Full Stack Developer
                  </Typography>
                </Box>
              </Box>
            ) : null
          }
          <Box paddingLeft={isCollapsed ? undefined : "10% !important"} component='ul'>
            {
              sideConfig?.map((item, i) => {
                const { title, path, icon, name } = item;
                return (
                  <Fragment>
                    <Item key={i}
                      title={title}
                      to={path}
                      icon={icon}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    {name && <Typography
                      variant="h6"
                      color={colors.grey[300]}
                      sx={{ m: "15px 0 5px 20px" }}
                    >
                      {name}
                    </Typography>}
                  </Fragment>
                )
              })
            }
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SidebarLayout