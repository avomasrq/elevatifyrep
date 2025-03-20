import React from "react";

export const Filter = ({ className }) => {
  return (
    <svg
      className={`filter ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_7_1582)">
        <path
          className="path"
          d="M1 11.1445L11 1.14453M11 1.14453H1M11 1.14453V11.1445"
          stroke="#5030E5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_7_1582">
          <rect className="rect" fill="white" height="11.9927" width="12" />
        </clipPath>
      </defs>
    </svg>
  );
};
