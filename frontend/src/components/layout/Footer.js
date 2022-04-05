import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <div className="bg-dark text-white">
      <div className="container" style={style}>
        Copyright © {today.getFullYear()}
      </div>
    </div>
  );
};

export default Footer;

const style = {
  height: "38px",
  display: "flex",
  alignItems: "center",
};
