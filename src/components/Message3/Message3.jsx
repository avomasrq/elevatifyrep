import React from "react";

export const Message3 = ({ className }) => {
  return (
    <svg
      className={`message-3 ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 31 30"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#E9EAEB" height="30" rx="15" width="31" />

      <path
        className="path"
        clipRule="evenodd"
        d="M19.25 15C19.25 16.1 20.0937 17 21.125 17C22.1562 17 23 16.1 23 15C23 13.9 22.1562 13 21.125 13C20.0937 13 19.25 13.9 19.25 15ZM17.375 15C17.375 13.9 16.5312 13 15.5 13C14.4688 13 13.625 13.9 13.625 15C13.625 16.1 14.4688 17 15.5 17C16.5312 17 17.375 16.1 17.375 15ZM11.75 15C11.75 13.9 10.9062 13 9.875 13C8.84375 13 8 13.9 8 15C8 16.1 8.84375 17 9.875 17C10.9062 17 11.75 16.1 11.75 15Z"
        fill="#605F5F"
        fillRule="evenodd"
      />
    </svg>
  );
};
