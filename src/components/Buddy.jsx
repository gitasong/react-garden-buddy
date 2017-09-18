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
    // this.waterPlant = this.waterPlant.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  componentDidMount() {
    this.timeSinceLastWateringChecker = setInterval(() =>
      this.updateTimeSinceLastWatering(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceLastWateringChecker);
  }

  sayHello() {
    console.log("hello");
  }

  updateTimeSinceLastWatering() {
    console.log("check");
    let newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.forEach((plant) => plant.setTimeSinceLastWatering()
    );
    this.setState({masterPlantList: newMasterPlantList})
  }

  // waterPlant(plantKey) {
  //   console.log("water plant");
  //   let newMasterPlantList = this.state.masterPlantList.slice();
  //   newMasterPlantList[plantKey].setTimeSinceLastWatering;
  //   console.log(newMasterPlantList[plantKey]);
  //   console.log(newMasterPlantList.timeSinceLastWatering);
  //   this.setState({masterPlantList: newMasterPlantList});
  // }

  addPlant(newPlant) {
    var newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList: newMasterPlantList});
  }

  render() {
    return (
      <div>
        <NewPlantForm addPlant={this.addPlant}/>
        <PlantList masterPlantList={this.state.masterPlantList}/>
      </div>
    );
  }
}

Buddy.propTypes = {
  addPlant: PropTypes.func,
  waterPlant: PropTypes.func,
  sayHello: PropTypes.func,
};

export default Buddy;
