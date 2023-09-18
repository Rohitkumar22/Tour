import React from "react";

function Title({ title, subtitle }) {
  return (
    <h2>
      {title} &nbsp;
      <span>{subtitle}</span>
    </h2>
  );
}

export default Title;
