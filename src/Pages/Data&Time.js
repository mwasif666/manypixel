import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "../style/Demo.module.css";
import { toast } from "react-toastify";
import axios from "axios";

function generateTimeSlots(startTime = "5:30 PM", endTime = "10:15 PM") {
  const slots = [];
  let current = dayjs(startTime, "hh:mm A");
  const end = dayjs(endTime, "hh:mm A");

  while (current.isBefore(end) || current.isSame(end)) {
    slots.push(current.format("h:mm A"));
    current = current.add(15, "minute");
  }

  return slots;
}

function formatTime12to24(timeStr) {
  const [time, modifier] = timeStr.split(" ");

  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
}

export default function DateTime() {
  const [date, setDate] = React.useState(dayjs());
  const [slot, setSlot] = React.useState("");
  const [timeSlots, setTimeSlots] = React.useState(
    generateTimeSlots("5:30 PM", "10:15 PM")
  );
  const [confirmMessage, setConfrimMessage] = React.useState(false);
  const [confirmedDate, setConfirmedDate] = React.useState(null);
  const [confirmedSlot, setConfirmedSlot] = React.useState("");
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
  });

  React.useEffect(() => {
    setTimeSlots(generateTimeSlots("5:30 PM", "10:15 PM"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDate = (d) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
      d.getDate()
    )} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, companyName, websiteUrl } = formValues;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast.error("First name, last name and email are mandatory!");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (websiteUrl && !/^https?:\/\/.+\..+/.test(websiteUrl)) {
      toast.error("Please enter a valid website URL (include http/https).");
      return;
    }

    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("company", companyName);
    formData.append("website", websiteUrl);
    formData.append("date", formatDate(date["$d"]));
    formData.append("time", formatTime12to24(slot));

    try {
      const response = await axios.post(
        `https://manypixel.innovationpixel.com/book_a_call`,
        formData
      );
      if (response) {
        setConfirmedDate(response?.data?.data?.date);
        setConfirmedSlot(response?.data?.data?.slot);
        setConfrimMessage(true);
        setDate(dayjs());
        setSlot("");
      }
    } catch (error) {
      toast.error("Book a call failed, Please try again later!");
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleSetSlot = (slot) => {
    setSlot(slot);
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: "2",
        marginTop: "40px",
      }}
    >
      <div className={styles.scopeDec5}></div>

      {!confirmMessage ? (
        <>
          {slot.length <= 0 && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Calendar & Slot Selection */}
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
                    slots={{
                      actionBar: () => null,
                    }}
                  />
                </Box>

                {/* Time Slots Right Side */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      p: 1,
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
                    {timeSlots.map((slot) => (
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
                        onClick={() => handleSetSlot(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Box>
            </LocalizationProvider>
          )}

          {slot.length > 0 && (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: 500,
                mx: "auto",
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" textAlign="center">
                Company Information
              </Typography>

              <TextField
                label="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                fullWidth
                required
                error={
                  formValues.email !== "" &&
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
                }
                helperText={
                  formValues.email !== "" &&
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
                    ? "Enter a valid email"
                    : ""
                }
              />

              <TextField
                label="Company Name"
                name="companyName"
                value={formValues.companyName}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Website URL"
                name="websiteUrl"
                type="url"
                value={formValues.websiteUrl}
                onChange={handleChange}
                fullWidth
              />

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Box
          sx={{
            maxWidth: 500,
            mx: "auto",
            p: 4,
            textAlign: "center",
            bgcolor: "#f0f9f0",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6" gutterBottom color="success.main">
            Booking Confirmed 🎉
          </Typography>
          <Typography>
            {confirmedDate ? dayjs(confirmedDate).format("MMMM D, YYYY") : ""}{" "}
            <br />
            {confirmedSlot}
          </Typography>
        </Box>
      )}
    </div>
  );
}
