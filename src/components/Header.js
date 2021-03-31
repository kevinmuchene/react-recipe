import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Recipe App</h1>
      <p>
        <b>
          {" "}
          <i>This site uses Edamam's Recipe Search API</i>
        </b>
      </p>
    </div>
  );
}; //end carousel component

export default Header;
