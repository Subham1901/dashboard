import React from "react";

const BackSvg = () => {
  return (
    <svg
      width="100%"
      height="90%"
      id="svg"
      viewBox="0 0 1440 590"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="5%" y1="72%" x2="95%" y2="28%">
          <stop offset="5%" stopColor="#1e5acd"></stop>
          <stop offset="95%" stopColor="#9b08d0"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,700 C 0,700 0,350 0,350 C 171.06666666666666,314.26666666666665 342.1333333333333,278.53333333333336 496,304 C 649.8666666666667,329.46666666666664 786.5333333333333,416.1333333333333 941,434 C 1095.4666666666667,451.8666666666667 1267.7333333333333,400.93333333333334 1440,350 C 1440,350 1440,700 1440,700 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
        transform="rotate(-180 720 350)"
      ></path>
    </svg>
  );
};

export default BackSvg;
