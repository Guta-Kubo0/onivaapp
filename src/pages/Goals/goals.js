import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import { Box, Container } from "@mui/material";
import classes from "./goals.module.css";
import DefaultCard from "../../components/layout/defaultcard";
import { PeopleAlt, Person } from "@mui/icons-material";

export default function GoalsPage() {
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
          <PageTitle pagetitle="Goals Board" />
          <DefaultCard
            teamtitle="Team 1"
            icon1={<PeopleAlt color="primary" />}
            title1="Active Team Goals"
            icon2={<Person color="primary" />}
            title2="Active Individual Goals"
          />
        </Box>
      </Container>
    </>
  );
}
