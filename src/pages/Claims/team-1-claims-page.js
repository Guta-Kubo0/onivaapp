import { Box, Container } from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import TeamClaimsTable from "./components/team-claims-table";
import MemberClaimsTable from "./components/member-claims-table";
import styles from "./index.module.css";

export default function Team1ClaimsPage() {
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
        className={styles.boxstyles}
      >
        <PageTitle pagetitle="Team 1" />
        <Box mt={4}>
          <TeamClaimsTable />
          <MemberClaimsTable />
        </Box>
      </Box>
    </Container>
  );
}
