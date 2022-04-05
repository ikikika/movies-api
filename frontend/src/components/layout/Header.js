import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-primary navbar-dark"
      style={style}
    >
      <div className="container">
        <a class="navbar-brand" href="#">
          Demo Streaming
        </a>
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
