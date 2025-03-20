import React from "react";

export const Arrow = ({ className }) => {
  return (
    <svg
      className={`arrow ${className}`}
      fill="none"
      height="4"
      viewBox="0 0 8 4"
      width="8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M4 4L0 0H8L4 4Z" fill="#444444" />
    </svg>
  );
};
