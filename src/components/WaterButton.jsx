import React from "react";
import PropTypes from "prop-types";

function WaterButton(props) {
  return (
    <div>
      <button onClick={() => {sayHello()}}>Water Plant</button>
    </div>
  );
}

WaterButton.propTypes = {
  sayHello: PropTypes.func,
};

export default WaterButton;
