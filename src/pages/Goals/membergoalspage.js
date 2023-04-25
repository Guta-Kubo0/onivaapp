import * as React from "react";
import { Box, Paper, Typography, Grid, Stack } from "@mui/material";
import { Person } from "@mui/icons-material";
import MemberGoalsCard from "./membergoalscard";

export default function MemberGoalsPage({ handleClose }) {
  return (
    <Paper elevation={2}>
      <Stack>
        <Box sx={{ display: "flex", alignItems: "center" }} ml={2} mt={2}>
          <Person color="primary" />
          <Typography variant="h6" color="text.primary" ml={2}>
            Individual Goals
          </Typography>
        </Box>
        <Grid container mt={2} alignItems="center" sx={{ width: `100%` }}>
          <Grid item xs={12} md={4} p={2}>
            <Box>
              <Typography variant="h6" color="text.primary">
                To Accomplish
              </Typography>
              <MemberGoalsCard
                goaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                deadline="Apr. 19 2023"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} p={2}>
            <Box>
              <Typography variant="h6" color="text.primary">
                Accomplishing
              </Typography>
              <MemberGoalsCard
                goaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                deadline="Apr. 19 2023"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} p={2}>
            <Box>
              <Typography variant="h6" color="text.primary">
                Accomplished
              </Typography>
              <MemberGoalsCard
                goaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                deadline="Apr. 19 2023"
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}
