import React from "react";

const Spinner = ({ size = 200 }) => {
  return (
    <React.Fragment>
      <img
        src="https://orig00.deviantart.net/eb20/f/2005/283/c/1/throwing_star_ani.gif"
        alt="load spinner animation fi"
        style={{
          display: "block",
          margin: "auto",
          width: `${size}px`,
        }}
      />
    </React.Fragment>
  );
};

export default Spinner;
