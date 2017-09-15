import React from "react";
import Plant from "./Plant";
import PropTypes from "prop-types";

function PlantList(props){
  return (
    <div>
      <hr/>
      {props.plantList.map((plant, index) =>
        <Plant name={plant.name}
        image={plant.image}
        species={plant.species}
        category={plant.category}
        frequency={plant.frequency}
        timeSinceWatered={plant.timeSinceWatered}
        key={index}/>
      )}
    </div>
  );
}

PlantList.propTypes = {
  plantList: PropTypes.array
};

export default PlantList;
