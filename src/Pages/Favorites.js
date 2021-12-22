import React from "react";
import "./Favorite.css";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

export default function Favorites(props) {
  return (
    <div>
      <h1 className="favorites-h1">Favorites</h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        // justifyContent="center"
        justifyContent="flex-start"
        // alignItems="center"
        alignItems="flex-start"
      >
        {props.state.favorites.map((mappedFavorite) => (
          <Grid key={mappedFavorite.id} item xs={12} sm={10} md={6} lg={3}>
            <Accordion>
              <AccordionSummary
                sx={{ color: "white", bgcolor: "#283593" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {" "}
                {/* <h2>{props.meeting.title}</h2> */}
                <Typography>{mappedFavorite.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "white", bgcolor: "#546e7a" }}>
                {/* <h2>{props.meeting.title}</h2> */}
                <h3>Location</h3>
                <p>{mappedFavorite.location}</p>
                <h3>Date</h3>
                <p>{mappedFavorite.meetupDate}</p>
                <h3>Time</h3>
                <p>{mappedFavorite.meetupTime}</p>
                <h3>With </h3>
                <p>{mappedFavorite.person}</p>
                <h3>Description</h3>
                <p>{mappedFavorite.description}</p>
                <div className="btn-container-favorites">
                  <button
                    className="delete-btn"
                    onClick={() =>
                      props.deleteFavoritedMeetup(mappedFavorite.id)
                    }
                  >
                    ✘
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
