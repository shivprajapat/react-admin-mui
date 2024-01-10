import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { tokens } from "../../theme";
import { Header, StatBox, LineChart, ProgressCircle, GeographyChart, BarChart } from "components";
import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box component="div" sx={{
      "& .MuiBox-root::-webkit-scrollbar": {
        width: 0
      }
    }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" component='div'>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box component="div">
          <Button
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid & Charts */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px" component='div'>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" component='div'>
          <StatBox
            title="12,361" subtitle="Emails Sent" progress="0.75" increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" component='div'>
          <StatBox title="431,225" subtitle="Sales Obtained" progress="0.50" increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" component='div'>
          <StatBox title="32,441" subtitle="New Clients" progress="0.30" increase="+5%" icon={
            <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" component='div'>
          <StatBox title="1,325,134" subtitle="Traffic Received" progress="0.80" increase="+43%" icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]} component="div">
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center" component="div">
            <Box component="div">
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Revenue Generated</Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>$59,342.32
              </Typography>
            </Box>
            <Box component="div">
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} /></IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px" component="ul">
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">Recent Transactions</Typography>
          </Box>
          {
            mockTransactions?.map((item, i) => {
              const { txId, user, date, cost } = item;
              return (
                <Box key={`${txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px" component="li">
                  <Box>
                    <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">{txId}</Typography>
                    <Typography color={colors.grey[100]}>{user}</Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{date}</Box>
                  <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">${cost}
                  </Box>
                </Box>
              )
            })
          }
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px" component="div">
          <Typography variant="h5" fontWeight="600">Campaign</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}> $48,352 revenue generated</Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>Sales Quantity</Typography>
          <Box height="250px" >
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} padding="30px">
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard