import React from "react";

export const Chevron = ({ className }) => {
  return (
    <svg
      className={`chevron ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M8 10.5L12 14.5L16 10.5" stroke="white" />
    </svg>
  );
};
