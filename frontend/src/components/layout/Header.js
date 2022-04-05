import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-primary navbar-dark"
      style={style}
    >
      <div className="container">
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
    </nav>
  );
};

export default Header;

const style = {};
