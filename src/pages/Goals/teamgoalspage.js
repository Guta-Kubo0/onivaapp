import * as React from "react";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import {
  Container,
  Box,
  Chip,
  Paper,
  Button,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import classes from "./teamgoal.module.css";
import { Add } from "@mui/icons-material";
import TeamGoalsCard from "./teamgoalscard";
import AddTeamGoal from "./addteamgoal";
import AddMemberGoal from "./addmembergoal";

export default function TeamGoalsPage(props) {
  const [isAddGoalDialogOpen, setIsAddGoalDialogOpenDialogOpen] =
    React.useState(false);

  const handleAddGoalDialogOpen = () => {
    setIsAddGoalDialogOpenDialogOpen(true);
  };

  const handleAddGoalDialogClose = () => {
    setIsAddGoalDialogOpenDialogOpen(false);
  };
  return (
    <>
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
            zIndex: "10",
          }}
          className={classes.boxstyles}
        >
          <PageTitle pagetitle="Team 1" />
          <Container
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
                label="Team Goals"
                variant="contained"
                color="primary"
                sx={{ marginRight: "10px" }}
              />
              <Chip
                label="Individual Goals"
                variant="outlined"
                color="primary"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<Add />}
              onClick={handleAddGoalDialogOpen}
            >
              Add Goal
            </Button>
            <AddMemberGoal
              isOpen={isAddGoalDialogOpen}
              handleClose={handleAddGoalDialogClose}
            />
          </Container>
          <Paper elevation={2}>
            <Stack>
              <Box sx={{ display: "flex", alignItems: "center" }} ml={2} mt={2}>
                {props.icon}
                <Typography variant="h6" color="text.primary" ml={2}>
                  {props.goalstitle}
                </Typography>
              </Box>
              <Grid container mt={2} alignItems="center" sx={{ width: `100%` }}>
                <Grid item xs={12} md={4} p={2}>
                  <Box>
                    <Typography variant="h6" color="text.primary">
                      To Accomplish
                    </Typography>
                    <TeamGoalsCard
                      goaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      deadline="Apr. 19 2023"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} p={2}>
                  <Box>
                    <Typography variant="h6" color="text.primary">
                      Accomplishing
                    </Typography>
                    <TeamGoalsCard
                      goaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      deadline="Apr. 19 2023"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} p={2}>
                  <Box>
                    <Typography variant="h6" color="text.primary">
                      Accomplished
                    </Typography>
                    <TeamGoalsCard
                      goaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      deadline="Apr. 19 2023"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
