import React from "react";

export const Vector = ({ className }) => {
  return (
    <svg
      className={`vector ${className}`}
      fill="none"
      height="6"
      viewBox="0 0 23 6"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M17.25 3C17.25 4.65 18.5437 6 20.125 6C21.7062 6 23 4.65 23 3C23 1.35 21.7062 0 20.125 0C18.5437 0 17.25 1.35 17.25 3ZM14.375 3C14.375 1.35 13.0812 0 11.5 0C9.91875 0 8.625 1.35 8.625 3C8.625 4.65 9.91875 6 11.5 6C13.0812 6 14.375 4.65 14.375 3ZM5.75 3C5.75 1.35 4.45625 0 2.875 0C1.29375 0 0 1.35 0 3C0 4.65 1.29375 6 2.875 6C4.45625 6 5.75 4.65 5.75 3Z"
        fill="#605F5F"
        fillRule="evenodd"
      />
    </svg>
  );
};
