import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./dashboardpage.module.css";
import Leaderboard from "./leaderboard";
import FirstPlace from "./assets/firstplace.png";
import RewardsClaimsTable from "./rewardclaims";
import PointsDistributedTable from "./pointsdistribution";
import PointsDistributionChart from "./pointsdistributionchart";
import { ClaimsIndividualRewardChart } from "./claimindividualrewardchart";
import CustomDateRangePicker from "./daterangepicker";

export default function DashboardPage(props) {
  const leaderGridRows: GridRowsProp = [
    { id: 1, name: "John Doe", onipoints: "5000" },
    { id: 2, name: "Guta", onipoints: "5000" },
    { id: 3, name: "John Doe", onipoints: "4000" },
    { id: 4, name: "Tomio", onipoints: "8000" },
    { id: 5, name: "John Doe", onipoints: "8000" },
  ];
  leaderGridRows.sort((a, b) => {
    if (a.onipoints < b.onipoints) {
      return 1;
    } else if (a.onipoints === b.onipoints) {
      return 0;
    } else {
      return -1;
    }
  });

  let firstPlace = "";

  leaderGridRows.map((item, index) => {
    if (item.onipoints === leaderGridRows[0].onipoints) {
      item.position = 1;
      firstPlace = firstPlace + `${index === 0 ? item.name : ", " + item.name}`;
    } else {
      item.position = index + 1;
    }
    return null;
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Navbar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
        className={classes.boxstyles}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <PageTitle pagetitle="Dashboard" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "2%",
          }}
        >
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Chip
              label="Team 1"
              variant="contained"
              color="primary"
              sx={{ marginRight: "10px" }}
              clickable
            />
            <Chip label="Team 2" variant="outlined" color="primary" clickable />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Paper elevation={2} width={"100%"}>
              <CustomDateRangePicker />
            </Paper>
          </Box>
        </Box>
        <Box mt={4}>
          <Paper elevation={2} sx={{ width: "100%", padding: "2%" }}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                marginLeft: "1%",
                marginTop: "1%",
                marginBottom: "2%",
              }}
            >
              Onipoints Distribution
            </Typography>
            <PointsDistributionChart />
          </Paper>
        </Box>
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ padding: "2%", width: "fit-content" }}>
              <Typography
                variant="h4"
                color="text.primary"
                sx={{ marginLeft: "1%", marginTop: "1%" }}
              >
                Leaderboard
              </Typography>
              <Box display={"flex"} alignItems={"center"} mt={4}>
                <Leaderboard data={leaderGridRows} />
                <Paper
                  elevation={2}
                  sx={{
                    backgroundColor: "#EAD8F2",
                    marginLeft: "2%",
                    height: "fit-content",
                    width: "100%",
                  }}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                  >
                    <img
                      src={FirstPlace}
                      alt="firstplaceimage"
                      style={{ width: "100%", height: "30vh" }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: "#E46646", textAlign: "center" }}
                    >
                      1st
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#E46646", textAlign: "center" }}
                    >
                      {firstPlace}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              sx={{ padding: "2%", width: "100%", height: "456px" }}
            >
              <Box mt={2}>
                <Typography
                  variant="h4"
                  color="text.primary"
                  textAlign="center"
                  sx={{ marginBottom: "5%" }}
                >
                  The most claimed individual reward
                </Typography>
              </Box>

              <ClaimsIndividualRewardChart />
            </Paper>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Paper elevation={2} sx={{ width: "fit-content", padding: "2%" }}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ marginLeft: "1%", marginTop: "1%" }}
            >
              Reward Claims
            </Typography>
            <RewardsClaimsTable />
          </Paper>
        </Box>
        <Box mt={4} mb={4}>
          <Paper elevation={2} sx={{ width: "fit-content", padding: "2%" }}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ marginLeft: "1%", marginTop: "1%" }}
            >
              Onipoints Report
            </Typography>
            <PointsDistributedTable />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
