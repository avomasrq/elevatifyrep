import React from "react";
import "./company-logo.css";

export const CompanyLogo = ({ className }) => {
  return (
    <div className={`company-logo ${className}`}>
      <div className="text-wrapper">✌</div>
    </div>
  );
};
