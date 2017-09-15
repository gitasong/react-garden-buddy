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
  }

  addPlant(newPlant) {
    var newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList: newMasterPlantList});
  }

  render() {
    return (
      <div>
        <NewPlantForm createPlant={this.props.addPlant}/>
        <PlantList/>
      </div>
    );
  }
}

Buddy.propTypes = {
  createPlant: PropTypes.func
};

export default Buddy;
