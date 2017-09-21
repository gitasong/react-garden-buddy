import React from "react";
import PropTypes from "prop-types";

function WaterButton(props) {

  function waterPlant() {
    console.log("hello");
  }

  return (
    <div>
      <button onClick={() => {props.waterPlant(props.timeAdded)}}>Water Plant</button>
    </div>
  );
}

WaterButton.propTypes = {
  waterPlant: PropTypes.func,
  timeAdded: PropTypes.object,
};

export default WaterButton;
