import React from "react";
import PropTypes from "prop-types";
import WaterButton from "./WaterButton";

function Plant(props){
  return (
    <div>
      <img src={props.image} alt={props.name}></img>
      <h3>Common Name: {props.name}</h3>
      <p>Species: <em>{props.species}</em></p>
      <p>Category: {props.category}</p>
      <p>Watering Frequency: Every {props.frequency} days</p>
      <p>Date Added: {props.timeAddedFormatted}</p>
      <p><strong>Last Watered: {props.lastWateringFormatted}</strong></p>
      <p><strong>Time Since Last Watering: {props.timeSinceLastWatering}</strong></p>
    <WaterButton sayHello={props.sayHello}/>
    </div>
  );
}


Plant.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  species: PropTypes.string.isRequired,
  category: PropTypes.string,
  frequency: PropTypes.number.isRequired,
  timeAddedFormatted: PropTypes.string,
  lastWateringFormatted: PropTypes.string,
  timeSinceLastWatering: PropTypes.string,
  sayHello: PropTypes.func,
};

export default Plant;
