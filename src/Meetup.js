import React from "react";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import  from '@mui/material/colors';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "rgb(9, 3, 24)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Meetup(props) {
  const [modalIsOpen, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  return (
    <div>
      <Accordion key={props.meeting.id}>
        <AccordionSummary
          sx={{ color: "white", bgcolor: "#37474f" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {" "}
          <Typography>{props.meeting.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "white", bgcolor: "#546e7a" }}>
          <h3>Location</h3>
          <p>{props.meeting.location}</p>
          <h3>Date</h3>
          <p>{props.meeting.meetupDate}</p>
          <h3>Time</h3>
          <p>{props.meeting.meetupTime}</p>
          <h3>With </h3>
          <p>{props.meeting.person}</p>
          <h3>Description</h3>
          <p>{props.meeting.description}</p>
          <div className="btn-container">
            <button className="delete-btn" onClick={handleOpen}>
              ✘
            </button>

            <button
              onClick={() => props.addToFavoritesHandler(props.meeting)}
              className="add-favorites"
            >
              ♥
            </button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Modal
        open={modalIsOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="modal-text"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Are you sure you want to delete this meetup?
          </Typography>

          <div className="modal-btn-container">
            <button
              onClick={() => {
                props.removeMeetup(props.meeting.id);
              }}
              className="yes-btn"
            >
              Yes
            </button>
            <button className="cancel-btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
