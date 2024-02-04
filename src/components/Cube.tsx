import React from "react";

const Cube = ({
  style,
  light,
}: {
  light?: boolean;
  style?: React.CSSProperties;
}) => {
  return light ? (
    <svg
      width="153"
      height="166"
      viewBox="0 0 153 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M109.653 73.237L76.4326 82.1384L52.1134 57.8192L28.3623 34.0681L60.8069 25.3746L94.0276 16.4732L118.347 40.7924L142.098 64.5435L109.653 73.237Z"
        fill="#FCFCFC"
        stroke="#EBEBEB"
        strokeWidth="1.39178"
      />
      <path
        d="M51.1269 58.8035L75.4461 83.1228L66.5447 116.343L57.8512 148.788L34.1001 125.037L9.78089 100.718L18.6824 67.497L27.3758 35.0525L51.1269 58.8035Z"
        fill="#FCFCFC"
        stroke="#EBEBEB"
        strokeWidth="1.39178"
      />
      <path
        d="M27.0156 33.7081L9.00473 100.926L57.8064 150.024"
        stroke="#EBEBEB"
        strokeWidth="1.39178"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M109.612 74.474L142.056 65.7805L133.363 98.2251L124.461 131.446L91.2405 140.347L58.7959 149.041L67.4894 116.596L76.3909 83.3755L109.612 74.474Z"
        fill="#FAFAFA"
        stroke="#EBEBEB"
        strokeWidth="1.39178"
      />
      <path
        d="M75.8227 82.8073L57.8118 150.025L124.624 131.905L142.635 64.6879"
        stroke="#EBEBEB"
        strokeWidth="1.39178"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M75.8201 82.8063L143.305 64.8669L94.323 16.441L27.0184 33.7081L75.8201 82.8063Z"
        fill="#FCFCFC"
        stroke="#EBEBEB"
        strokeWidth="1.39178"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
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
        stroke="#999999"
        strokeWidth="1.39178"
      />
      <path
        d="M109.612 73.7026L142.056 65.0091L133.363 97.4537L124.461 130.674L91.2405 139.576L58.7959 148.269L67.4894 115.825L76.3909 82.6041L109.612 73.7026Z"
        stroke="#999999"
        strokeWidth="1.39178"
      />
      <path
        d="M75.8201 82.0348L143.305 64.0955L94.323 15.6695L27.0184 32.9366L75.8201 82.0348Z"
        stroke="#999999"
        strokeWidth="1.39178"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cube;
