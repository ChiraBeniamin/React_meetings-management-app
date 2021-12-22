import "./AddNewMeetup.css";
import React from "react";
import TextField from "@mui/material/TextField";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
  },
});

export default function AddNewMeetup(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="add-new-meetup-container">
        <h1>Add new meetup</h1>

        <TextField
          id="standard-basic"
          label="Title"
          variant="outlined"
          value={props.state.titleText}
          onChange={props.handleTitleInput}
          margin="normal"
          focused
        />

        <TextField
          id="standard-basic"
          label="Location"
          variant="outlined"
          value={props.state.locationText}
          onChange={props.handleLocationInput}
          margin="normal"
          focused
          // color="primary"
        />

        <TextField
          id="standard-basic"
          label="With:"
          variant="outlined"
          value={props.state.personText}
          onChange={props.handlePersonInput}
          margin="normal"
          focused
        />

        <TextField
          id="standard-basic"
          label="Date"
          variant="outlined"
          type="date"
          value={props.state.date}
          onChange={props.handleDatePicker}
          margin="normal"
          focused
        />

        <TextField
          id="standard-basic"
          label="Time"
          variant="outlined"
          type="time"
          onChange={props.handleTimePicker}
          value={props.state.time}
          margin="normal"
          focused
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          variant="outlined"
          maxRows={5}
          onChange={props.handleDescriptionInput}
          value={props.state.descriptionText}
          margin="normal"
          focused
        />

        <button className="add-button" onClick={props.addMeetingHandler}>
          Add
        </button>
      </div>
    </ThemeProvider>
  );
}
