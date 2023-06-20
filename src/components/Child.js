import React from "react";
import "./styles.css";

const Child = ({ show, children }) => {
  if (!show) return null;
  return (
    <div className="child">
      <div>{children}</div>
    </div>
  );
};

export default Child;
