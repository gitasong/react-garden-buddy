import React from "react";
import Plant from "../models/Plant.js";
import PropTypes from "prop-types";

class NewPlantForm extends React.Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const { _name, _image, _species, _category, _frequency } = this.refs;
    var newPlant = new Plant(_name.value, _image.value, _species.value, _category.value, _frequency.value);
    console.log(newPlant);
    this.props.addPlant(newPlant);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h2>Add A Plant</h2>
      <form onSubmit={this.submitForm}>
          <label>Common Name: </label>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Venus Fly Trap"/>
          <br/>
          <label>Image URL: </label>
          <input
            ref="_image"
            type="text"
            id="image"
            placeholder="Image URL"/>
          <br/>
          <label>Species/Botanical Name: </label>
          <input
            ref="_species"
            type="text"
            id="species"
            placeholder="Paeonia Lactiflora"/>
          <br/>
          <label>Category: </label>
          <input
            ref="_category"
            type="text"
            id="category"
            placeholder="flowering plant"/>
          <br/>
          <label>Frequency (Days Between Watering): </label>
          <input
            ref="_frequency"
            type="number"
            id="frequency"
            placeholder="1, 3, 7, etc."/>
          <br/>
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
  }
}

NewPlantForm.propTypes = {
  submitForm: PropTypes.func,
  addPlant: PropTypes.func
}

export default NewPlantForm;
