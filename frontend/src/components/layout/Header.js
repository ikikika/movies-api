import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <div
          className="collapse navbar-collapse"
          style={{ justifyContent: "space-between" }}
        >
          <Link className="navbar-brand" to="/">
            Demo Streaming
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="button" className="btn text-white">
                Log In
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-secondary">
                Start your free trial
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

const style = {};
