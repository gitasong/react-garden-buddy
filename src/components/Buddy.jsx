import React from "react";
import PropTypes from "prop-types";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function Buddy(props) {
  return (
    <div>
      <NewPlantForm createPlant={this.props.addPlant}/>
      <PlantList/>
    </div>
  );
}

Buddy.propTypes = {
  createPlant: PropTypes.func
};

export default Buddy;
