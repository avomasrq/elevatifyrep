import PropTypes from "prop-types";
import React from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import "./account-option.css";

export const AccountOption = ({ state, className }) => {
  return (
    <div className={`account-option ${className}`}>
      <div className="account-details">
        <ProfilePicture />
        <div className="account-info">
          <div className="text-wrapper-2">Account Name</div>

          <div className="text-wrapper-3">email@gmail.com</div>
        </div>
      </div>

      <div className="element-border-bottom">
        <div className="rectangle" />
      </div>
    </div>
  );
};

AccountOption.propTypes = {
  state: PropTypes.oneOf(["default"]),
};
