import React from "react";

const DarkCube = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <svg
      style={style}
      width="153"
      height="165"
      viewBox="0 0 153 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.1269 58.0322L75.4461 82.3514L66.5447 115.572L57.8512 148.017L34.1001 124.266L9.78089 99.9464L18.6824 66.7257L27.3758 34.2811L51.1269 58.0322Z"
        stroke="#292929"
        stroke-width="1.39178"
      />
      <path
        d="M109.612 73.7026L142.056 65.0091L133.363 97.4537L124.461 130.674L91.2405 139.576L58.7959 148.269L67.4894 115.825L76.3909 82.6041L109.612 73.7026Z"
        stroke="#292929"
        stroke-width="1.39178"
      />
      <path
        d="M75.8201 82.0348L143.305 64.0955L94.323 15.6695L27.0184 32.9366L75.8201 82.0348Z"
        stroke="#292929"
        stroke-width="1.39178"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DarkCube;