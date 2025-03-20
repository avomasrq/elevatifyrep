import React from "react";

export const Calendar = ({ className }) => {
  return (
    <svg
      className={`calendar ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 14 15"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.08118 0.666355V2.71545"
        stroke="#787486"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.3"
      />

      <path
        className="path"
        d="M9.54509 0.666355V2.71545"
        stroke="#787486"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.3"
      />

      <path
        className="path"
        d="M9.54526 1.6909C11.8198 1.81385 12.9604 2.6813 12.9604 5.89154V10.1127C12.9604 12.9268 12.2774 14.3338 8.86223 14.3338H4.76404C1.34889 14.3338 0.665855 12.9268 0.665855 10.1127V5.89154C0.665855 2.6813 1.80652 1.82068 4.08101 1.6909H9.54526Z"
        stroke="#787486"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.3"
      />

      <path
        className="path"
        d="M12.7895 11.322H0.836446"
        stroke="#787486"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.3"
      />

      <path
        className="path"
        d="M6.8133 4.93563C5.97317 4.93563 5.26282 5.39326 5.26282 6.2812C5.26282 6.70468 5.4609 7.02571 5.76143 7.23062C5.34478 7.47651 5.10572 7.87267 5.10572 8.33713C5.10572 9.18408 5.7546 9.71002 6.8133 9.71002C7.86517 9.71002 8.52088 9.18408 8.52088 8.33713C8.52088 7.87267 8.28182 7.46968 7.85834 7.23062C8.1657 7.01888 8.35695 6.70468 8.35695 6.2812C8.35695 5.39326 7.65343 4.93563 6.8133 4.93563ZM6.8133 6.87544C6.45812 6.87544 6.19857 6.6637 6.19857 6.32902C6.19857 5.9875 6.45812 5.78942 6.8133 5.78942C7.16848 5.78942 7.42803 5.9875 7.42803 6.32902C7.42803 6.6637 7.16848 6.87544 6.8133 6.87544ZM6.8133 8.86306C6.3625 8.86306 6.03464 8.63766 6.03464 8.22784C6.03464 7.81802 6.3625 7.59945 6.8133 7.59945C7.2641 7.59945 7.59196 7.82485 7.59196 8.22784C7.59196 8.63766 7.2641 8.86306 6.8133 8.86306Z"
        fill="#787486"
      />
    </svg>
  );
};
