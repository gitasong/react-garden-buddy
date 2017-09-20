import React from "react";
import Plant from "./Plant";
import PropTypes from "prop-types";

var seedPlantList = [
    {
      name: "English Ivy",
      image: "http://www.guide-to-houseplants.com/images/xenglish-ivy-indoors.jpg.pagespeed.ic.wzOZdzWgZ1.jpg",
      species: "Hedera helix",
      category: "vine",
      frequency: "1"
    },
    {
      name: "Mother-In-Law's Tongue/Snake Plant",
      image: "http://www.guide-to-houseplants.com/images/xsnake-plant.jpg.pagespeed.ic.2rLHSiwnxf.jpg",
      species: "Sansevieria trifasciata",
      category: "succulent",
      frequency: "7"
    },
    {
      name: "Spider Plant",
      image: "http://www.guide-to-houseplants.com/images/xspider-plant-table.jpg.pagespeed.ic.BFy65MnY4p.jpg",
      species: "Chlorophytum comosum",
      category: "hanging",
      frequency: "1"
    },
    {
      name: "Weeping Fig (ficus)",
      image: "http://www.guide-to-houseplants.com/images/xweeping-fig.jpg.pagespeed.ic.lqiATUUmqn.jpg",
      species: "Ficus benjamina",
      category: "indoor tree",
      frequency: "3"
    }
  ];

function PlantList(props){
  return (
    <div>
      <hr/>
      {props.masterPlantList.map((plant, index) =>
        <Plant name={plant.name}
        image={plant.image}
        species={plant.species}
        category={plant.category}
        frequency={plant.frequency}
        timeAddedFormatted={plant.timeAddedFormatted}
        lastWateringFormatted={plant.lastWateringFormatted}
        timeSinceLastWatering={plant.timeSinceLastWatering}
        waterPlant={props.waterPlant}
        key={index}/>
      )}
    </div>
  );
}

PlantList.propTypes = {
  masterPlantList: PropTypes.array,
  waterPlant: PropTypes.func,
};

export default PlantList;
