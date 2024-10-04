import React from "react";
import "./button.css";

const Button = ({ text, bgColor, textColor, marginLeft,border,fontSize }) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: bgColor || "#DA8F4D", 
        color: textColor || "#FFFFFF", 
        marginLeft:marginLeft || 0,
        border:border|| "1px solid #FFFFFF",
        fontSize: fontSize || "21.6px"
      }}
    >
      {text || "Sign In"} 
    </button>
  );
};

export default Button;
