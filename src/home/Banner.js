import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import Navbar from "./Navbar";
class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Navbar />
        <div className="banner__content">
          <h2>Lets Go Travel</h2>
          <h4>
            Discover new places to explore, work, have fun
            or relax.
          </h4>
          <Link to="/result">
            <button>Explore Nearby Stays</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Banner;
