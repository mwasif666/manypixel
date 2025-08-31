import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "../style/Demo.module.css";

// Function to generate custom time slots (12h with AM/PM)
function generateTimeSlots(startTime = "5:30 PM", endTime = "10:15 PM") {
  const slots = [];
  let current = dayjs(startTime, "hh:mm A");
  const end = dayjs(endTime, "hh:mm A");

  while (current.isBefore(end) || current.isSame(end)) {
    slots.push(current.format("h:mm A")); // short format: 5:30 PM
    current = current.add(15, "minute");
  }

  return slots;
}

export default function DateTime() {
  const [date, setDate] = React.useState(dayjs());
  const timeSlots = generateTimeSlots("5:30 PM", "10:15 PM");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className=""
      style={{
        position: "relative",
        zIndex: "2",
        marginTop: "40px",
      }}
    >
      <div className={styles.scopeDec5}></div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 4,
            padding: "40px 0px",
            paddingRight: "60px",
            bgcolor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Calendar Left Side */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="center"
              mb={2}
            >
              ManyPixels Demo
            </Typography>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="day"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
          </Box>

          {/* Time Slots Right Side */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                p: 1,
                display: "inline-block",
                width: "100%",
                fontSize: "1rem",
                fontWeight: "800",
                color: "#33475b",
              }}
            >
              Meeting duration
            </Typography>
            <Typography
              sx={{
                bgcolor: "#cbd6e2",
                p: 1,
                borderRadius: "6px",
                display: "inline-block",
                mb: 2,
                width: "100%",
                fontSize: "12px",
                textAlign: "center",
                color: "#33475b",
              }}
            >
              30 mins
            </Typography>

            <Typography
              fontWeight="bold"
              mb={1}
              sx={{
                display: "inline-block",
                width: "100%",
                fontSize: "1rem",
                color: "#33475b",
              }}
            >
              What time works best?
            </Typography>
            <Typography
              variant="body2"
              mb={2}
              sx={{
                display: "inline-block",
                width: "100%",
                fontSize: "1rem",
                color: "#33475b",
              }}
            >
              Showing times for <b>{date.format("MMMM DD, YYYY")}</b>
            </Typography>

            {/* Scrollable Time Slot List */}
            <Box
              sx={{
                maxHeight: "298px",
                overflowY: "auto",
                pr: 1,
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              {timeSlots.map((slot, index) => (
                <Button
                  key={slot}
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 1,
                    justifyContent: "center",
                    textTransform: "none",
                    borderRadius: "5px",
                    border: "1px solid #dfe3eb",
                    padding: "8px 0px",
                    color: "#33475b", 
                  }}
                >
                  {slot}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
    </div>
  );
}
