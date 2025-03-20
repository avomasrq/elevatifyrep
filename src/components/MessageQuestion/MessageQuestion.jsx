import React from "react";

export const MessageQuestion = ({ className }) => {
  return (
    <svg
      className={`message-question ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.3333 12.2858H8.66659L5.69991 14.2592C5.25991 14.5525 4.66659 14.2392 4.66659 13.7059V12.2858C2.66659 12.2858 1.33325 10.9525 1.33325 8.95251V4.95247C1.33325 2.95247 2.66659 1.61914 4.66659 1.61914H11.3333C13.3333 1.61914 14.6666 2.95247 14.6666 4.95247V8.95251C14.6666 10.9525 13.3333 12.2858 11.3333 12.2858Z"
        stroke="#787486"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />

      <path
        className="path"
        d="M7.99996 7.57422V7.43424C7.99996 6.98091 8.27998 6.7409 8.55998 6.54757C8.83331 6.3609 9.10661 6.12091 9.10661 5.68091C9.10661 5.06757 8.61329 4.57422 7.99996 4.57422C7.38663 4.57422 6.89331 5.06757 6.89331 5.68091"
        stroke="#787486"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />

      <path
        className="path"
        d="M7.99708 9.16732H8.00308"
        stroke="#787486"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
