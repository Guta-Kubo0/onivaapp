import { Groups } from "@mui/icons-material";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

export default function DefaultCard(props) {
  return (
    <Paper elevation={2} sx={{ width: "400px", height: "175px" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box mt={2}>
          <Paper
            elevation={2}
            sx={{
              backgroundColor: "#4744A6",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Groups color="secondary" />
          </Paper>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary">
            {props.teamtitle}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            {props.icon1}
            <Typography variant="body2" color="text.primary">
              {props.title1}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            {props.icon2}
            <Typography variant="body2" color="text.primary">
              {props.title2}
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
        mr={2}
        mt={2}
      >
        <Button variant="contained" color="primary" size="small">
          See Details
        </Button>
      </Box>
    </Paper>
  );
}
