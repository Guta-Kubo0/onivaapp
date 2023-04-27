import {
  Box,
  Container,
  FormControl,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./commandspage.module.css";
import React from "react";

export default function CommandsPage() {
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
          <PageTitle pagetitle="Commands" />
        </Box>
        <Box mb={4}>
          <Paper elevation={2}>
            <Box p={4} mt={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Send Extra Onipoints
              </Typography>
              <FormControl variant="filled" fullWidth disabled>
                <Input
                  id="send-extra-onipoints-command"
                  defaultValue={
                    "@username won {number of onipoints} extra onipoints because {reason he/she won the onipoints}"
                  }
                />
              </FormControl>
            </Box>
            <Box p={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Claim Team Rewards
              </Typography>
              <FormControl variant="filled" fullWidth disabled>
                <Input
                  id="claim-team-reward-command"
                  defaultValue={"claimteamreward for @teamname"}
                />
              </FormControl>
            </Box>
            <Box p={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Send Leaderboard to the Team
              </Typography>
              <FormControl variant="filled" fullWidth disabled>
                <Input
                  id="send-leaderboard-team-command"
                  defaultValue={"sendleaderboardtoeverybody for @team name"}
                />
              </FormControl>
            </Box>
            <Box p={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Send Leaderboard to Someone
              </Typography>
              <FormControl variant="filled" fullWidth disabled>
                <Input
                  id="send-leaderboard-someone-command"
                  defaultValue={"sendleaderboard to @username @teamname"}
                />
              </FormControl>
            </Box>
            <Box p={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Change the status of an individual goal to accomplished
              </Typography>
              <FormControl variant="filled" fullWidth disabled>
                <Input
                  id="change-individual-goal-status-command"
                  defaultValue={
                    "@username @teamname accomplishedgoal {goaltitle}"
                  }
                />
              </FormControl>
            </Box>
            <Box p={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Change the status of a team goal to accomplished
              </Typography>
              <FormControl variant="filled" fullWidth disabled>
                <Input
                  id="change-individual-goal-status-command"
                  defaultValue={"@teamname accomplishedgoal {goaltitle}"}
                />
              </FormControl>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
