import React from "react";
import PropTypes from "prop-types";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

class Buddy extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterPlantList: []
    };
    this.addPlant = this.addPlant.bind(this);
    this.updateTimeSinceLastWatering = this.updateTimeSinceLastWatering.bind(this);
    this.waterPlant = this.waterPlant.bind(this);
  }

  componentDidMount() {
    this.timeSinceLastWateringChecker = setInterval(() =>
      this.updateTimeSinceLastWatering(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceLastWateringChecker);
  }

  updateTimeSinceLastWatering() {
    console.log("check");
    let newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.forEach((plant) => plant.setTimeSinceLastWatering()
    );
    this.setState({masterPlantList: newMasterPlantList})
  }

  waterPlant(plantKey) {
    console.log("water plant");
    // console.log(plantKey);
    let newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.forEach(function(plant) {
      console.log(plant);
      // debugger;
      // console.log(plant.timeAdded === plantKey);
      if (plant.timeAdded === plantKey) {
        plant.setLastWatering();
      }
    });
    this.setState({masterPlantList: newMasterPlantList});
  }

  addPlant(newPlant) {
    var newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList: newMasterPlantList});
  }

  render() {
    return (
      <div>
        <NewPlantForm addPlant={this.addPlant}/>
      <PlantList masterPlantList={this.state.masterPlantList} waterPlant={this.waterPlant}/>
      </div>
    );
  }
}

Buddy.propTypes = {
  addPlant: PropTypes.func,
  waterPlant: PropTypes.func,
};

export default Buddy;
