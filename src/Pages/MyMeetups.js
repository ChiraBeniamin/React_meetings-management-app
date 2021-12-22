import "./MyMeetups.css";
import Meetup from "../Meetup";
import React from "react";

import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";

export default function MyMeetups(props) {
  return (
    <div className="myMeetups-body">
      <h1 className="myMeetups-h1">My Meetups</h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="flex-start"
        // alignItems="center"
        alignItems="flex-start"
      >
        {props.state.meetings.map((meeting) => (
          <Grid item xs={12} sm={10} md={6} lg={3} key={meeting.id}>
            <Meetup
              meeting={meeting}
              removeMeetup={props.deleteMeetup}
              addToFavoritesHandler={props.addToFavoritesHandler}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
