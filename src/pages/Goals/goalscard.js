import { MoreVert } from "@mui/icons-material";
import { Paper, Typography, Box, IconButton, Fab } from "@mui/material";

export default function GoalsCard(props) {
  return (
    <Paper
      elevation={2}
      sx={{ width: "33%", padding: "20px", backgroundColor: "#B4D5ED" }}
    >
      <Box sx={{ display: "flex", alignItems: "initial" }}>
        <Typography variant="p" color="text.primary">
          {props.goaldescription}
        </Typography>
        <Fab size="small" aria-label="See Options">
          <MoreVert color="secondary" />
        </Fab>
      </Box>
    </Paper>
  );
}
