import React from "react";
import PropTypes from "prop-types";

function Plant(props){
  return (
    <div>
      <img src={props.image} alt={props.name}></img>
      <h3>Common Name: {props.name}</h3>
      <p>Species: <em>{props.species}</em></p>
      <p>Category: {props.category}</p>
      <p>Watering Frequency: Every {props.frequency} days</p>
      <p><strong>Time Since Last Watered: {props.timeSinceWatered}</strong></p>
    </div>
  );
}


Plant.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  species: PropTypes.string.isRequired,
  category: PropTypes.string,
  frequency: PropTypes.number.isRequired,
  timeSinceWatered: PropTypes.number,
};

export default Plant;
