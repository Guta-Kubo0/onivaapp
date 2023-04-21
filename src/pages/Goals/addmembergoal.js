import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Box,
  IconButton,
  Tooltip,
  Checkbox,
  Typography,
  FormHelperText,
} from "@mui/material";
import { EmojiEmotions } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const checkboxLabel = { inputProps: { "aria-label": "Checkbox send message" } };

export default function AddTeamGoal({ isOpen, handleClose }) {
  const [teamMember, setTeamMember] = React.useState("");

  const handleChange = (event) => {
    setTeamMember(event.target.value);
  };
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Create Goal</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        <FormControl
          helperText="Required Field"
          variant="outlined"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Team Member
          </InputLabel>
          <Select
            labelId="select-team-member"
            id="select-team-member"
            value={teamMember}
            onChange={handleChange}
            label="Team Member"
            fullWidth
            sx={{ width: "250px" }}
          >
            <MenuItem value={"Fulano da Silva"}>Fulano da Silva</MenuItem>
            <MenuItem value={"John Doe"}>John Doe</MenuItem>
            <MenuItem value={"Ciclano da Silva"}>Ciclano da Silva</MenuItem>
          </Select>
          <FormHelperText>Required Field</FormHelperText>
        </FormControl>

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
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "2%" }}>
          <Checkbox {...checkboxLabel} defaultChecked />
          <Typography variant="body2" color="text.secondary">
            Send a message informing the addition of this goal
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
