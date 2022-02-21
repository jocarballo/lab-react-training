import React from 'react'

function BoxColor(props) {
  const { r, g, b } = props
  const hex = rgbToHex(r, g, b);
  const divStyle = {
    "background-color": `rgb(${r}, ${g}, ${b})`,
  };


return <div style={divStyle}>rgb({r}, {g}, {b}) {hex}</div>;


}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }



export default BoxColor;