import { Route, Switch } from "react-router-dom";
import MyMeetups from "./Pages/MyMeetups";
import Favorites from "./Pages/Favorites";
import AddNewMeetup from "./Pages/AddNewMeetup";
import MainNavigation from "./Pages/MainNavigation";
import CustomSnackbar from "./Pages/CustomSnackbar";
import React, { Component } from "react";
import Grow from "@mui/material/Grow";
// import Slide from "@mui/material/Slide";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [],
      titleText: "",
      locationText: "",
      personText: "",
      descriptionText: "",
      date: "",
      time: "",
      favorites: [],
      showSnackbar: false,
      snackbarMessage: "",
      snackbarSeverity: "", //info,error,success,warning,
      openTransition: false,
      transitionType: Grow,
    };

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handlePersonInput = this.handlePersonInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.addMeetingHandler = this.addMeetingHandler.bind(this);
    this.addToFavoritesHandler = this.addToFavoritesHandler.bind(this);
    this.handleDatePicker = this.handleDatePicker.bind(this);
    this.deleteMeetup = this.deleteMeetup.bind(this);
    this.showSnackbar = this.showSnackbar.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.handleTimePicker = this.handleTimePicker.bind(this);
    this.checkFavorites = this.checkFavorites.bind(this);
    this.deleteFavoritedMeetup = this.deleteFavoritedMeetup.bind(this);
    // this.checkFavorites = this.checkFavorites.bind(this);
    // this.checkFavorites = this.checkFavorites.bind(this);
  }

  handleTitleInput(e) {
    this.setState({ titleText: e.target.value });
    e.preventDefault();
  }

  handleLocationInput(e) {
    this.setState({ locationText: e.target.value });
    e.preventDefault();
  }

  handlePersonInput(e) {
    this.setState({ personText: e.target.value });
    e.preventDefault();
  }

  handleDescriptionInput(e) {
    this.setState({ descriptionText: e.target.value });
    e.preventDefault();
  }

  handleDatePicker(e) {
    // console.dir(e);
    // this.setState({ date: dateValue });
    this.setState({ date: e.target.value });
    e.preventDefault();
  }

  handleTimePicker(e) {
    // this.setState({ time: timeValue });
    // console.log(timeValue);
    this.setState({ time: e.target.value });
    e.preventDefault();
  }

  addMeetingHandler() {
    const newMeeting = {
      title: this.state.titleText,
      location: this.state.locationText,
      person: this.state.personText,
      description: this.state.descriptionText,
      meetupDate: this.state.date,
      meetupTime: this.state.time,
      id: Date.now(),
      addedToFavorites: false,
    };
    if (newMeeting.title === "") {
      this.showSnackbar("warning", '"Title" field must be completed');
    } else if (newMeeting.location === "") {
      this.showSnackbar("warning", '"Location" field must be completed');
    } else if (newMeeting.person === "") {
      this.showSnackbar("warning", '"With" field must be completed');
    } else if (newMeeting.meetupDate === "") {
      this.showSnackbar("warning", "Must select a date");
    } else if (newMeeting.meetupTime === "") {
      this.showSnackbar("warning", "Must select a time");
    } else {
      this.setState(
        (state) => ({
          meetings: state.meetings.concat(newMeeting),
          titleText: "",
          locationText: "",
          personText: "",
          descriptionText: "",
        }),
        this.showSnackbar("success", "Meetup successfully added to My Meetups")
      );
    }
  }

  deleteMeetup(meetupId) {
    this.setState({
      meetings: this.state.meetings.filter((meetup) => meetup.id !== meetupId),
    });
    this.showSnackbar("success", "This meetup was deleted succesfully");
  }

  addToFavoritesHandler(meetup) {
    this.checkFavorites(meetup.addedToFavorites);
    if (this.state.favorites.some((item) => meetup.id === item.id)) {
      this.showSnackbar(
        "info",
        "This meetup has already been added to Favorites"
      );
    } else {
      this.setState(
        (state) => ({
          favorites: state.favorites.concat(meetup),
        }),
        () => {
          this.showSnackbar(
            "success",
            "Meetup successfully added to Favorites"
          );
          console.log(this.state.favorites);
          console.log(this.state);
        }
      );
    }
  }

  deleteFavoritedMeetup(meetupId) {
    this.setState({
      favorites: this.state.favorites.filter(
        (favoritedMeetup) => favoritedMeetup.id !== meetupId
      ),
    });
    this.showSnackbar("success", "This meetup was deleted succesfully");
  }

  checkFavorites(meeting) {
    this.state.favorites.map(() => meeting.addedToFavorites === true);
  }

  showSnackbar(severity, message) {
    this.setState({
      showSnackbar: true,
      snackbarSeverity: severity,
      snackbarMessage: message,
      openTransition: true,
    });
  }

  closeSnackbar() {
    this.setState({
      showSnackbar: false,
    });
  }

  render() {
    return (
      <div>
        <MainNavigation />
        <Switch>
          <Route path="/add-new-meetup">
            <AddNewMeetup
              handleTitleInput={this.handleTitleInput}
              handleLocationInput={this.handleLocationInput}
              handlePersonInput={this.handlePersonInput}
              handleDescriptionInput={this.handleDescriptionInput}
              addMeetingHandler={this.addMeetingHandler}
              handleDatePicker={this.handleDatePicker}
              handleTimePicker={this.handleTimePicker}
              state={this.state}
            />
          </Route>
          <Route path="/" exact>
            <MyMeetups
              state={this.state}
              addToFavoritesHandler={this.addToFavoritesHandler}
              deleteMeetup={this.deleteMeetup}
            />
          </Route>
          <Route path="/favorites">
            <Favorites
              state={this.state}
              deleteFavoritedMeetup={this.deleteFavoritedMeetup}
            />
          </Route>
        </Switch>
        <CustomSnackbar
          showSnackbar={this.state.showSnackbar}
          message={this.state.snackbarMessage}
          severity={this.state.snackbarSeverity}
          closeSnackbar={this.closeSnackbar}
        />
      </div>
    );
  }
}
