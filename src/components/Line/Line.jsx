import React from "react";

export const Line = ({ className }) => {
  return (
    <svg
      className={`line ${className}`}
      fill="none"
      height="2"
      viewBox="0 0 672 2"
      width="672"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1 1H671"
        stroke="#EBEAED"
        strokeLinecap="square"
        strokeWidth="2"
      />
    </svg>
  );
};
