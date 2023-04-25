import {
  Box,
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./commandspage.module.css";

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
        <PageTitle pagetitle="Commands" />
        <Paper elevation={2}>
          <Box p={4} mt={4}>
            <Typography variant="h6" color="text.primary" mb={2}>
              Send Extra Onipoints
            </Typography>
            <FormControl variant="outlined" fullWidth disabled>
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
            <FormControl variant="outlined" fullWidth disabled>
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
            <FormControl variant="outlined" fullWidth disabled>
              <Input
                id="send-leaderboard-team-command"
                defaultValue={"leaderboardtoeverybody for {team name}"}
              />
            </FormControl>
          </Box>
          <Box p={4}>
            <Typography variant="h6" color="text.primary" mb={2}>
              Send Leaderboard to Someone
            </Typography>
            <FormControl variant="outlined" fullWidth disabled>
              <Input
                id="send-leaderboard-someone-command"
                defaultValue={"@username leaderboard"}
              />
            </FormControl>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
