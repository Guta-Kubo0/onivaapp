import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AddTeamClaim({ isOpen, handleClose }) {
  const [teamReward, setTeamReward] = React.useState("");

  const handleChange = (event) => {
    setTeamReward(event.target.value);
  };
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Request Team Claim</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", marginTop: "2%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Team Reward</InputLabel>
            <Select
              required
              labelId="team-reward"
              id="team-reward"
              value={teamReward}
              label="team-reward"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={10}>Day Off</MenuItem>
              <MenuItem value={20}>500$ for everybody</MenuItem>
              <MenuItem value={30}>Amazon Gift Card</MenuItem>
            </Select>
            <FormHelperText>Required Field</FormHelperText>
          </FormControl>
        </Box>
        <TextField
          id="remain-onipoints"
          label="Remaining Onipoints"
          defaultValue="500 Onipoints"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          sx={{ marginTop: "4%" }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Add Claim
        </Button>
      </DialogActions>
    </Dialog>
  );
}
