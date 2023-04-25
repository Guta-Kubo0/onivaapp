import { Box, Container, Grid } from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./claimspage.module.css";
import DefaultCard from "../../components/layout/defaultcard";
import { PeopleAlt, Person } from "@mui/icons-material";

export default function ClaimsPage() {
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
        <PageTitle pagetitle="Rewards Claims Board" />
        <Grid container spacing={2} mt={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <DefaultCard
              teamtitle="Team 1"
              icon1={<PeopleAlt color="primary" />}
              title1="Team Claims"
              firstindicador="10"
              icon2={<Person color="primary" />}
              title2="Individual Claims"
              secondindicador="10"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DefaultCard
              teamtitle="Team 2"
              icon1={<PeopleAlt color="primary" />}
              title1="Team Claims"
              firstindicador="10"
              icon2={<Person color="primary" />}
              title2="Individual Claims"
              secondindicador="10"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
