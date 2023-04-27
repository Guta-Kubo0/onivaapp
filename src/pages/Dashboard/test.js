import React, { useState } from "react";
import { Box, Divider, Grid } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Box display={"flex"} alignItems={"center"} m={1}>
      <Box mr={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="us">
          <DatePicker
            disableToolbar
            variant="inline"
            format="MM/DD/YYYY"
            margin="normal"
            label="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
            slotProps={{
              textField: { size: "small" },
            }}
          />
        </LocalizationProvider>
      </Box>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="us">
          <DatePicker
            disableToolbar
            variant="inline"
            format="MM/DD/YYYY"
            margin="normal"
            label="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            inputFormat="MM/DD/YYYY"
            slotProps={{
              textField: { size: "small" },
            }}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}

export default DateRangePicker;
