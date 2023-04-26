import { ArrowBack } from "@mui/icons-material";
import { Box, Fab, Typography } from "@mui/material";

export default function PageTitle(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Fab size="small" color="primary" aria-label="back" sx={{ zIndex: "0" }}>
        <ArrowBack color="#FFF" />
      </Fab>
      <Typography
        variant="h5"
        ml={2}
        color="text.secondary"
        sx={{ fontWeight: "bold" }}
      >
        {props.pagetitle}
      </Typography>
    </Box>
  );
}
