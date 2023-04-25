import React from "react";
import { Container, Box, Chip, Button } from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./team1goalspage.module.css";
import { Add } from "@mui/icons-material";
import TeamGoalsPage from "./teamgoalspage";
import MemberGoalsPage from "./membergoalspage";
import AddMemberGoal from "./addmembergoal";
import AddTeamGoal from "./addteamgoal";

export default function Team1GoalsPage() {
  const [isTeamPageOpen, setIsTeamPageOpen] = React.useState(true);

  const [isAddGoalDialogOpen, setIsAddGoalDialogOpenDialogOpen] =
    React.useState(false);

  const handleAddGoalDialogOpen = () => {
    setIsAddGoalDialogOpenDialogOpen(true);
  };

  const handleAddGoalDialogClose = () => {
    setIsAddGoalDialogOpenDialogOpen(false);
  };

  const [isAddMemberGoalDialogOpen, setIsAddMemberGoalDialogOpenDialogOpen] =
    React.useState(false);

  const handleAddMemberGoalDialogOpen = () => {
    setIsAddMemberGoalDialogOpenDialogOpen(true);
  };

  const handleAddMemberGoalDialogClose = () => {
    setIsAddMemberGoalDialogOpenDialogOpen(false);
  };

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
        <PageTitle pagetitle="Team 1" />
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
              label="Team Goals"
              variant={isTeamPageOpen ? "contained" : "outlined"}
              color="primary"
              sx={{ marginRight: "10px" }}
              clickable
              onClick={() => {
                setIsTeamPageOpen(true);
              }}
            />
            <Chip
              label="Individual Goals"
              variant={isTeamPageOpen ? "outlined" : "contained"}
              color="primary"
              clickable
              onClick={() => {
                setIsTeamPageOpen(false);
              }}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<Add />}
              onClick={
                isTeamPageOpen
                  ? handleAddGoalDialogOpen
                  : handleAddMemberGoalDialogOpen
              }
            >
              Add Goal
            </Button>
            <AddTeamGoal
              isOpen={isAddGoalDialogOpen}
              handleClose={handleAddGoalDialogClose}
            />
            <AddMemberGoal
              isOpen={isAddMemberGoalDialogOpen}
              handleClose={handleAddMemberGoalDialogClose}
            />
          </Box>
        </Box>
        {isTeamPageOpen ? <TeamGoalsPage /> : <MemberGoalsPage />}
      </Box>
    </Container>
  );
}
