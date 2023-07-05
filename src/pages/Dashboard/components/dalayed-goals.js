import DelayedGoalCard from "./delayed-goal-card";
import { Box, Grid, Pagination } from "@mui/material";
export default function DelayedGoals() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3} md={4}>
          <DelayedGoalCard
            goalTitle="Sell 30k"
            goalOnipoints="6000"
            assignedTo="John Doe"
            deadline="04/07/2023"
            dalayDays="1"
          />
        </Grid>
        <Grid item xs={6} sm={3} md={4}>
          <DelayedGoalCard
            goalTitle="Sell 30k"
            goalOnipoints="6000"
            assignedTo="John Doe"
            deadline="04/07/2023"
            dalayDays="1"
          />
        </Grid>
        <Grid item xs={6} sm={3} md={4}>
          <DelayedGoalCard
            goalTitle="Sell 30k"
            goalOnipoints="6000"
            assignedTo="John Doe"
            deadline="04/07/2023"
            dalayDays="1"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginTop: "2%",
        }}
      >
        <Pagination count={2} color="primary" />
      </Box>
    </Box>
  );
}
