import React from "react";
import { Box, Button, Container } from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import TeamClaimsTable from "./components/team-claims-table";
import MemberClaimsTable from "./components/member-claims-table";
import AddTeamClaim from "./components/add-team-claim-dialog";
import { Add } from "@mui/icons-material";
import styles from "./index.module.css";

export default function Team1ClaimsPage() {
  const [isAddTeamClaimDialogOpen, setIsAddTeamClaimDialogOpen] =
    React.useState(false);

  const handleAddTeamClaimDialogOpen = () => {
    setIsAddTeamClaimDialogOpen(true);
  };

  const handleAddTeamClaimDialogClose = () => {
    setIsAddTeamClaimDialogOpen(false);
  };
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "2%",
          }}
        >
          <PageTitle pagetitle="Team 1" />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<Add />}
            onClick={handleAddTeamClaimDialogOpen}
          >
            Add Team Claim
          </Button>
          <AddTeamClaim
            isOpen={isAddTeamClaimDialogOpen}
            handleClose={handleAddTeamClaimDialogClose}
          />
        </Box>

        <Box mt={4}>
          <TeamClaimsTable />
          <MemberClaimsTable />
        </Box>
      </Box>
    </Container>
  );
}
