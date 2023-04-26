import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Link, Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

export default function SupportDialog() {
  return (
    <Dialog
      open={true}
      //onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Support Service"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you have any questions on how to use the system, you can access our
          documentation by clicking on this {""}
          <Link href="#" color="primary">
            link
          </Link>
          {""} or you can text us on WhatsApp by clicking the WhatsApp support
          button below.
        </DialogContentText>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: "2%" }}
        >
          PS: As we do not use a chatbot to assist you in your questions and we
          are located in Brazil, we may take a while to respond due to the time
          zone differences. But don't worry, we will get back to you as soon as
          possible! 😊
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button startIcon={<WhatsApp />} autoFocus>
          Go to WhatsApp
        </Button>
      </DialogActions>
    </Dialog>
  );
}
