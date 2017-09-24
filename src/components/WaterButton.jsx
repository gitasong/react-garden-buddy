import React from "react";
import PropTypes from "prop-types";

function WaterButton(props) {

  return (
    <div>
      <button onClick={() => {props.waterPlant(props.timeAdded)}}>Water Plant</button>
    </div>
  );
}

WaterButton.propTypes = {
  waterPlant: PropTypes.func,
  timeAdded: PropTypes.object.isRequired,
};

export default WaterButton;
