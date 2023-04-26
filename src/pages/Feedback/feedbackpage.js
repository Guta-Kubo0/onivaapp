import {
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../components/layout/navbar";
import PageTitle from "../../components/layout/pagetitle";
import classes from "./feedbackpage.module.css";
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
      sx={{ marginTop: "1%" }}
    />
  );
}

const StyledRatingFavorite = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#4744A6",
  },
});

function CustomizedRating() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <StyledRatingFavorite
        name="customized-color"
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{ marginTop: "1%" }}
      />
    </Box>
  );
}

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function HoverRating() {
  const [value, setValue] = React.useState();
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{ marginTop: "2%" }}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

const label = { inputProps: { "aria-label": "Publishing authorization" } };

export default function FeedbackPage() {
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
        <PageTitle pagetitle="Feedback" />
        <Box mt={4}>
          <Paper elevation={2}>
            <Box p={2}>
              <Typography variant="body1" color="text.primary">
                We want to hear from you! Your feedback is extremely valuable to
                us. Thank you for taking the time to share your opinion! 😉
              </Typography>
            </Box>
            <Box
              p={2}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
            >
              <Typography
                variant="p"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                So far, how do you feel about using Onivá?
              </Typography>
              <RadioGroupRating />
            </Box>
            <Box
              p={2}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
            >
              <Typography
                variant="p"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                How likely are you to recommend Onivá to someone?
              </Typography>
              <CustomizedRating />
            </Box>
            <Box
              p={2}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
            >
              <Typography
                variant="p"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                How many stars we deserve?
              </Typography>
              <HoverRating />
            </Box>
            <Box
              p={2}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
            >
              <Typography
                variant="p"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                Do you have something more to say? So type in here!
              </Typography>
              <TextField
                variant="outlined"
                multiline
                placeholder="Tell us more..."
                size="small"
                id="text-feedback"
                sx={{ marginTop: "2%", width: "50%" }}
              />
            </Box>
            <Box display={"flex"} alignItems={"center"} mt={4}>
              <Checkbox {...label} />
              <Typography variant="body2" color="text.secondary" ml={2}>
                I authorize Onivá to publish my feedback on their landing page.
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              p={4}
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginRight: "2%" }}
              >
                {" "}
                Cancel{" "}
              </Button>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
