import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./profilepage.module.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AddPhotoAlternate,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import BackgroundLetterAvatars from "../../components/layout/backgroundletteravatars";
import ConfirmDialog from "./confirmationdialog";

export default function ProfilePage() {
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        className={classes.boxstyles}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <PageTitle pagetitle="Profile Settings" />
        </Box>
        <Box mt={4}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                General settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                See and edit personal informations
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "5%",
                  }}
                >
                  <BackgroundLetterAvatars />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{
                      position: "absolute",
                      bottom: "-10px",
                      right: "-23px",
                    }}
                  >
                    <input hidden accept="image/*" type="file" />
                    <AddPhotoAlternate fontSize="small" />
                  </IconButton>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <TextField
                    label="Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: "5%" }}
                  />
                  <TextField
                    label="E-mail"
                    type="email"
                    variant="outlined"
                    fullWidth
                    sx={{
                      marginBottom: "5%",
                      marginLeft: "5%",
                    }}
                  />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                mt={2}
              >
                <ConfirmDialog
                  open={openConfirmDialog}
                  handleClose={handleCloseConfirmDialog}
                />
                <Button color="primary" sx={{ marginRight: "2%" }}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpenConfirmDialog}
                >
                  Save
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Security
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Edit your password
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Current Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Current Password"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    New Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Current Password"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm New Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Current Password"
                  />
                </FormControl>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                mt={2}
              >
                <Button color="primary" sx={{ marginRight: "2%" }}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpenConfirmDialog}
                >
                  Save
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
  );
}
