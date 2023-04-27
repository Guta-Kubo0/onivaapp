import {
  Box,
  Chip,
  Container,
  FormControl,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./dashboardpage.module.css";
import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DateRangePicker from "./test";
import Leaderboard from "./leaderboard";

export default function DashboardPage() {
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
              <DateRangePicker />
            </Paper>
          </Box>
          <Leaderboard />
        </Box>
      </Box>
    </Container>
  );
}
