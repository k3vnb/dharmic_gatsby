import React from 'react';

export default ({ location }) => {
  const fillColor = location.pathname === '/' ? '#fcbe4a' : '#ffffff';
  console.log(fillColor)
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="22"
    height="20"
    viewBox="0 0 172 172"
    fill="#000000"
  >
    <g
      fill="none"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeDasharray=""
      strokeDashoffset="0"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
    >
      <path d="M0,172v-172h172v172z" fill="none"></path>
      <g fill={fillColor}>
        <path d="M86,15.0472l-78.83333,70.9528h21.5v64.5h50.16667v-43h14.33333v43h50.16667v-64.5h21.5zM86,34.33561l43,38.7028v5.79492v57.33333h-21.5v-43h-43v43h-21.5v-63.12826z"></path>
      </g>
    </g>
  </svg>
)};
