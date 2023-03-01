import React from "react";

const Spinner = ({ size = 200 }) => {
  return (
    <React.Fragment>
      <img
        src="https://media.tenor.com/eMdbqG7NAdkAAAAd/rasen-shuriken-anime.gif"
        alt="load spinner animation fi"
        style={{
          display: "block",
          margin: "auto",
          width: `300px`,
          marginTop: `50px`,
        }}
      />
    </React.Fragment>
  );
};

export default Spinner;
