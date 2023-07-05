import { MonetizationOn } from "@mui/icons-material";
import { Paper, Typography, Box } from "@mui/material";

export default function DelayedGoalCard(props) {
  return (
    <Paper
      sx={{
        backgroundColor: "#F3F3F3",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: "4%",
      }}
    >
      <Typography variant="h6">{props.goalTitle}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "5%",
        }}
      >
        <MonetizationOn color="primary" />
        <Typography variant="h5" sx={{ marginLeft: "3%" }}>
          {props.goalOnipoints}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "5%",
          width: "100%",
        }}
      >
        <Typography variant="subtitle2">Assigned to:</Typography>
        <Typography variant="body2" sx={{ marginLeft: "3%" }}>
          {props.assignedTo}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "5%",
        }}
      >
        <Typography variant="subtitle2">Deadline:</Typography>
        <Typography variant="body2" sx={{ marginLeft: "3%" }}>
          {props.deadline}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "5%",
        }}
      >
        <Typography variant="subtitle2">Delay:</Typography>
        <Typography variant="body2" sx={{ marginLeft: "1%" }}>
          {props.dalayDays}
        </Typography>
      </Box>
    </Paper>
  );
}
