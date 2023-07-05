import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox } from "@mui/material";
import { Typography, Box } from "@mui/material";

const checkboxLabel = { inputProps: { "aria-label": "Checkbox send message" } };

export default function SolveClaim({ isOpen, handleClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="solve-claim"
      aria-describedby="solve-claim"
    >
      <DialogTitle id="alert-dialog-title">{"Solve Claim?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to change the status of this claim? By doing
          this, you indicate that you have already purchased the reward and have
          everything organized to deliver it to the winner. This action cannot
          be undone.
        </DialogContentText>
        <Box display={"flex"} alignItems={"center"} mt={2}>
          <Checkbox {...checkboxLabel} defaultChecked />
          <Typography variant="body2" color="text.secondary">
            Send a message informing that this claim was solved
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
