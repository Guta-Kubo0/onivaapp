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

export default function CancelClaim({ isOpen, handleClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="cancel-claim"
      aria-describedby="cancel-claim"
    >
      <DialogTitle id="alert-dialog-title">{"Cancel Claim?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to cancel this claim? You can not undone this
          action.
        </DialogContentText>
        <Box display={"flex"} alignItems={"center"} mt={2}>
          <Checkbox {...checkboxLabel} defaultChecked />
          <Typography variant="body2" color="text.secondary">
            Send a message informing that this claim was cancelled
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Do not Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Cancel Claim
        </Button>
      </DialogActions>
    </Dialog>
  );
}
