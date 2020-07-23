import React from 'react';
import { connect } from 'react-redux';

const ShoppingCartIcon = ({ cart, location }) => {
  const fillColor =
    location && location.pathname === '/cart' ? '#fcbe4a' : '#ffffff';
  const qty =  cart.reduce(
    (accumulator, item) => item.qty + accumulator,
    0
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="22"
      height="22"
      viewBox="0 -33 200 200"
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
          <path d="M0,0v14.33333h23.06771l28.66667,114.66667h96.97396l1.56771,-5.15104l14.78125,-49.71875l5.15104,-16.79688h-121.60937l-14.33333,-57.33333zM52.18229,71.66667h98.76563l-12.98958,43h-75.02604zM75.25,136.16667c-9.88216,0 -17.91667,8.03451 -17.91667,17.91667c0,9.88216 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.03451 17.91667,-17.91667c0,-9.88216 -8.03451,-17.91667 -17.91667,-17.91667zM125.41667,136.16667c-9.88216,0 -17.91667,8.03451 -17.91667,17.91667c0,9.88216 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.03451 17.91667,-17.91667c0,-9.88216 -8.03451,-17.91667 -17.91667,-17.91667z"></path>
        </g>
        {qty && (
          <g>
            <ellipse
              stroke="#000000"
              ry="64"
              rx="64"
              id="svg_5"
              cy="35"
              cx="140"
              strokeWidth="1"
              fill="#00ffff"
            />
            <text
              stroke="#000000"
              xmlSpace="preserve"
              textAnchor="middle"
              fontFamily="sans"
              fontSize={qty < 10 ? "115" : "78"}
              id="svg_6"
              y={qty < 10 ? "72" : "55"}
              x={qty < 10 ? "144" : "140"}
              strokeLinecap="null"
              strokeLinejoin="null"
              strokeDasharray="null"
              strokeWidth="0"
              fill="#0000FF"
            >
              {qty}
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

const mapStateToProps = ({ app }) => ({
  cart: app.cart,
});

export default connect(mapStateToProps)(ShoppingCartIcon);
