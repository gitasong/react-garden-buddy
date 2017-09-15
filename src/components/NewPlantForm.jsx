import React from "react";

class NewPlantForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Add A Plant</h2>
        <form>
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

export default NewPlantForm;
