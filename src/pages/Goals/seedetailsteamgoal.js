import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Edit, EmojiEmotions } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function SeeDetailsTeamGoal({ isOpen, handleClose }) {
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true}>
      <Box display={"flex"} alignItems={"center"}>
        <DialogTitle>See Goal Details</DialogTitle>
        <Tooltip title="Edit Goal">
          <IconButton>
            <Edit color="primary" />
          </IconButton>
        </Tooltip>
      </Box>
      <DialogContent>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Goal Title"
            type="text"
            variant="outlined"
            helperText="Required Field"
            size="medium"
            fullWidth
          />
          <Tooltip title="Emoji">
            <IconButton
              aria-label="Select a emoji"
              size="large"
              sx={{ padding: "0", marginLeft: "2%" }}
            >
              <EmojiEmotions />
            </IconButton>
          </Tooltip>
        </Box>
        <TextField
          autoFocus
          multiline
          margin="dense"
          id="title"
          label="Goal Description"
          type="text"
          fullWidth
          variant="outlined"
          size="medium"
        />
        <TextField
          autoFocus
          multiline
          margin="dense"
          id="title"
          label="Reward in Onipoints"
          type="text"
          fullWidth
          variant="outlined"
          size="medium"
          helperText="Required Field"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <DatePicker
            label="Deadline"
            slotProps={{
              textField: { size: "small" },
            }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
