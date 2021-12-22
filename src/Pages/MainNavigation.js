import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
// import logo from "../Assets/where.when.logo.jpeg";
export default function MainNavigation() {
  return (
    <header>
      <div className="logo-header"></div>
      <nav>
        <ul>
          <li className="add-new-meetup-li">
            <Link to="/add-new-meetup">Add New Meetup</Link>
          </li>
          <li className="my-meetup-li">
            <Link to="/">My Meetups</Link>
          </li>
          <li className="favorites-li">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
