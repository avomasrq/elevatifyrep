import PropTypes from "prop-types";
import React from "react";
import "./footer-button.css";

export const FooterButton = ({ state, className, text = "Help" }) => {
  return (
    <button className={`footer-button ${className}`}>
      <button className="button-text">{text}</button>
    </button>
  );
};

FooterButton.propTypes = {
  state: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};
