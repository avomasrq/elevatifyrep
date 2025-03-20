import PropTypes from "prop-types";
import React from "react";
import "./language-option.css";

export const LanguageOption = ({ state, className }) => {
  return (
    <div className={`language-option ${state} ${className}`}>
      <div className="text-wrapper-10">English (United States)</div>

      <img className="arrow-2" alt="Arrow" />
    </div>
  );
};

LanguageOption.propTypes = {
  state: PropTypes.oneOf(["focus", "default"]),
};
