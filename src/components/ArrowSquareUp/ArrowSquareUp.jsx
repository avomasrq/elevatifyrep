import React from "react";

export const ArrowSquareUp = ({ className }) => {
  return (
    <svg
      className={`arrow-square-up ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
        fill="#5030E5"
        fillOpacity="0.2"
      />

      <path
        className="path"
        d="M16.1375 9.7997L9.64998 16.2872C9.39998 16.5372 9.16249 17.0247 9.11249 17.3747L8.76249 19.8497C8.63749 20.7497 9.26249 21.3747 10.1625 21.2497L12.6375 20.8997C12.9875 20.8497 13.475 20.6122 13.725 20.3622L20.2125 13.8747C21.325 12.7622 21.8625 11.4622 20.2125 9.8122C18.5625 8.1497 17.2625 8.6747 16.1375 9.7997Z"
        stroke="#5030E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />

      <path
        className="path"
        d="M15.2124 10.7246C15.7624 12.6871 17.2999 14.2371 19.2749 14.7871"
        stroke="#5030E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
};
