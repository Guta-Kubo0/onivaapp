import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import { Container, Box, Chip, Paper, Button, Typography } from "@mui/material";
import classes from "./teamgoal.module.css";
import { Add } from "@mui/icons-material";
import GoalsCard from "./goalscard";

export default function TeamGoal(props) {
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
            >
              Add Goal
            </Button>
          </Container>

          <Box>
            <Paper elevation={2}>
              <Box sx={{ display: "flex", alignItems: "center" }} ml={2} mt={2}>
                {props.icon}
                <Typography variant="h6" color="text.primary" ml={2}>
                  {props.goalstitle}
                </Typography>
              </Box>
              <Container>
                <GoalsCard goaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
              </Container>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
}
