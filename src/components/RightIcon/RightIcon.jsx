import React from "react";

export const RightIcon = ({ className }) => {
  return (
    <svg
      className={`right-icon ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M17.2703 5.25877C17.5876 5.59212 17.5746 6.1196 17.2412 6.43692L7.61162 15.6036C7.44717 15.7601 7.22597 15.8428 6.99916 15.8325C6.77236 15.8222 6.55958 15.7197 6.41003 15.5489L2.70633 11.3181C2.40318 10.9718 2.43815 10.4454 2.78444 10.1422C3.13073 9.83907 3.65721 9.87404 3.96036 10.2203L7.09178 13.7974L16.0921 5.22975C16.4255 4.91242 16.9529 4.92542 17.2703 5.25877Z"
        fill="#047857"
        fillRule="evenodd"
      />
    </svg>
  );
};
