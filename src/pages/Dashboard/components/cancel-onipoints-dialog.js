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

export default function CancelOnipoints({ isOpen, handleClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="cancel-onipoints"
      aria-describedby="cancel-onipoints"
    >
      <DialogTitle id="alert-dialog-title">{"Cancel Onipoints?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to cancel this onipoints? This action cannot be
          undone.
        </DialogContentText>
        <Box display={"flex"} alignItems={"center"} mt={2}>
          <Checkbox {...checkboxLabel} defaultChecked />
          <Typography variant="body2" color="text.secondary">
            Send a message informing that this onipoints was cancelled
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}> Do not Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Cancel Onipoints
        </Button>
      </DialogActions>
    </Dialog>
  );
}
