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
    this.updateTimeSinceWatered = this.updateTimeSinceWatered.bind(this);
  }

  componentDidMount() {
    this.timeSinceWateredChecker = setInterval(() =>
      this.updateTimeSinceWatered(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceWateredChecker);
  }

  updateTimeSinceWatered() {
    console.log("check");
    let newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.forEach((plant) => plant.setTimeSinceWatered()
    );
    this.setState({masterPlantList: newMasterPlantList})
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
        <PlantList masterPlantList={this.state.masterPlantList}/>
      </div>
    );
  }
}

Buddy.propTypes = {
  addPlant: PropTypes.func
};

export default Buddy;
