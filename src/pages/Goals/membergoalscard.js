import * as React from "react";
import { MoreVert } from "@mui/icons-material";
import {
  Paper,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import BackgroundLetterAvatars from "../../components/layout/backgroundletteravatars";
import CancelGoal from "./cancelgoal";
import EditMemberGoal from "./editmembergoal";
import SeeDetailsMemberGoal from "./seedetailsmembergoal";

export default function MemberGoalsCard(props) {
  const [isCancelGoalDialogOpen, setIsCancelGoalDialogOpenDialogOpen] =
    React.useState(false);

  const handleCancelGoalDialogOpen = () => {
    setIsCancelGoalDialogOpenDialogOpen(true);
  };

  const handleCancelGoalDialogClose = () => {
    setIsCancelGoalDialogOpenDialogOpen(false);
  };

  const [isEditGoalDialogOpen, setIsEditGoalDialogOpenDialogOpen] =
    React.useState(false);

  const handleEditlGoalDialogOpen = () => {
    setIsEditGoalDialogOpenDialogOpen(true);
  };

  const handleEditGoalDialogClose = () => {
    setIsEditGoalDialogOpenDialogOpen(false);
  };

  const [isSeeDetailsGoalDialogOpen, setIsSeeDetailsGoalDialogOpenDialogOpen] =
    React.useState(false);

  const handleSeeDetailsGoalDialogOpen = () => {
    setIsSeeDetailsGoalDialogOpenDialogOpen(true);
  };

  const handleSeeDetailsGoalDialogClose = () => {
    setIsSeeDetailsGoalDialogOpenDialogOpen(false);
  };

  const seeMoreOptions = [
    { label: "See Goal Details", onClick: handleSeeDetailsGoalDialogOpen },
    { label: "Edit Goal", onClick: handleEditlGoalDialogOpen },
    { label: "Cancel Goal", onClick: handleCancelGoalDialogOpen },
  ];

  const [goalOptions, setGoalOptions] = React.useState(null);

  const handleOpenGoalMenu = (event) => {
    setGoalOptions(event.currentTarget);
  };
  const handleCloseGoalMenu = () => {
    setGoalOptions(null);
  };
  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: "#B4D5ED",
      }}
    >
      <CancelGoal
        isOpen={isCancelGoalDialogOpen}
        handleClose={handleCancelGoalDialogClose}
      />
      <EditMemberGoal
        isOpen={isEditGoalDialogOpen}
        handleClose={handleEditGoalDialogClose}
      />
      <SeeDetailsMemberGoal
        isOpen={isSeeDetailsGoalDialogOpen}
        handleClose={handleSeeDetailsGoalDialogClose}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "initial",
          }}
        >
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontSize: "12px" }}
            ml={2}
            mt={2}
          >
            {props.goaldescription}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="See More Options">
              <IconButton
                size="large"
                aria-label="See Options"
                color="primary"
                variant="extended"
                onClick={handleOpenGoalMenu}
                sx={{ marginRight: "0" }}
              >
                <MoreVert color="text.primary" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-goals"
              anchorEl={goalOptions}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(goalOptions)}
              onClose={handleCloseGoalMenu}
            >
              {seeMoreOptions.map((seemoreoptions) => (
                <MenuItem
                  key={seemoreoptions.label}
                  onClick={seemoreoptions.onClick}
                >
                  <Typography textAlign="center">
                    {seemoreoptions.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          ml={2}
          mb={2}
          mt={2}
        >
          <BackgroundLetterAvatars />
          <Typography variant="subtitle1" color="text.primary" ml={2}>
            {props.deadline}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
