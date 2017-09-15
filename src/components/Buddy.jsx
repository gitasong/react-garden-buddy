import React from "react";
import PropTypes from "prop-types";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

class Buddy extends React.Component {

  constructor(props){
    super(props);
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
