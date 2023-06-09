import * as React from "react";
import { Box, Paper, Typography, Grid, Stack } from "@mui/material";
import { Groups } from "@mui/icons-material";
import TeamGoalsCard from "./teamgoalscard";

export default function TeamGoalsPage() {
  return (
    <Paper elevation={2}>
      <Stack>
        <Box sx={{ display: "flex", alignItems: "center" }} ml={2} mt={2}>
          <Groups color="primary" />
          <Typography variant="h6" color="text.primary" ml={2}>
            Teams Goals
          </Typography>
        </Box>
        <Grid container mt={2} alignItems="center" sx={{ width: `100%` }}>
          <Grid item xs={12} md={4} p={2}>
            <Box>
              <Typography variant="h6" color="text.primary">
                To Accomplish
              </Typography>
              <TeamGoalsCard
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
              <TeamGoalsCard
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
              <TeamGoalsCard
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
