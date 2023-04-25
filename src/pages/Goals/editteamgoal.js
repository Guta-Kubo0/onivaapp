import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton, Tooltip, Checkbox, Typography } from "@mui/material";
import { EmojiEmotions } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const checkboxLabel = { inputProps: { "aria-label": "Checkbox send message" } };

export default function EditTeamGoal({ isOpen, handleClose }) {
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Edit Goal</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
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
              textField: { size: "medium" },
            }}
          />
        </LocalizationProvider>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "2%" }}>
          <Checkbox {...checkboxLabel} defaultChecked />
          <Typography variant="body2" color="text.secondary">
            Send a message informing the edition of this goal
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
