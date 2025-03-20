import React from "react";

export const Check = ({ className }) => {
  return (
    <svg
      className={`check ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.6668 5L7.50016 14.1667L3.3335 10"
        stroke="#7F56D9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};
