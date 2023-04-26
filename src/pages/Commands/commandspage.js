import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./commandspage.module.css";
import { Edit } from "@mui/icons-material";
import React, { useState } from "react";

export default function CommandsPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);

  const handleButtonClick = () => {
    setIsDisabled(false);
    setShowSaveButton(true);
    setShowCancelButton(true);
  };

  const handleSaveButtonClick = () => {
    setIsDisabled(true);
    setShowSaveButton(false);
    setShowCancelButton(false);
  };

  const handleCancelButtonClick = () => {
    setIsDisabled(true);
    setShowSaveButton(false);
    setShowCancelButton(false);
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
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <PageTitle pagetitle="Commands" />
          <Button
            variant="contained"
            color="primary"
            startIcon={<Edit />}
            onClick={handleButtonClick}
          >
            Edit Commands
          </Button>
        </Box>
        <Box mb={4}>
          <Paper elevation={2}>
            <Box p={4} mt={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Send Extra Onipoints
              </Typography>
              <FormControl variant="outlined" fullWidth disabled={isDisabled}>
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
              <FormControl variant="outlined" fullWidth disabled={isDisabled}>
                <Input
                  id="claim-team-reward-command"
                  defaultValue={"claimteamreward for {team name}"}
                />
              </FormControl>
            </Box>
            <Box p={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Send Leaderboard to the Team
              </Typography>
              <FormControl variant="outlined" fullWidth disabled={isDisabled}>
                <Input
                  id="send-leaderboard-team-command"
                  defaultValue={"sendleaderboardtoeverybody for {team name}"}
                />
              </FormControl>
            </Box>
            <Box p={4}>
              <Typography variant="h6" color="text.primary" mb={2}>
                Send Leaderboard to Someone
              </Typography>
              <FormControl variant="outlined" fullWidth disabled={isDisabled}>
                <Input
                  id="send-leaderboard-someone-command"
                  defaultValue={"sendleaderboard to @username"}
                />
              </FormControl>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                mt={4}
              >
                {showCancelButton && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCancelButtonClick}
                    sx={{ marginRight: "2%" }}
                  >
                    Cancelar
                  </Button>
                )}
                {showSaveButton && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveButtonClick}
                  >
                    Save Changes
                  </Button>
                )}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
