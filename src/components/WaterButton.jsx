import React from "react";
import PropTypes from "prop-types";

function WaterButton(props) {

  // function sayHello() {
  //   console.log("hello");
  // }

  return (
    <div>
      <button onClick={() => {props.sayHello()}}>Water Plant</button>
    </div>
  );
}

WaterButton.propTypes = {
  sayHello: PropTypes.func,
};

export default WaterButton;
