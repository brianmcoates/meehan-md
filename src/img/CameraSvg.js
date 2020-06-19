import React, {useEffect, useState} from "react";

const CameraSvg = props => {
  const [svgSettings, setSvgSettings] = useState({
    color: "black",
    height: "48px",
    width: "48px",
    fill: "none"
  });
  useEffect(() => {
    setSvgSettings(state =>{
      return({
        ...state,
        ...props
      })
    });
  }, [props]);
  return (
    <svg
      width={svgSettings.width}
      height={svgSettings.height}
      fill={svgSettings.fill}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46 14L32 24L46 34V14Z"
        stroke={svgSettings.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28 10H6C3.79086 10 2 11.7909 2 14V34C2 36.2091 3.79086 38 6 38H28C30.2091 38 32 36.2091 32 34V14C32 11.7909 30.2091 10 28 10Z"
        stroke={svgSettings.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CameraSvg;
