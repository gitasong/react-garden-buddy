import React from "react";

function NewPlantForm(props) {
  return (
    <div>
      <h2>Add A Plant</h2>
      <form>
        <input
          type="text"
          id="name"
          placeholder="e.g. Venus Fly Trap"/>
        <input
          type="text"
          id="image"
          placeholder="Image URL"/>
        <input
          type="text"
          id="species"
          placeholder="e.g. Paeonia Lactiflora"/>
        <input
          type="text"
          id="category"
          placeholder="e.g. flowering plant"/>
        <input
          type="number"
          id="frequency"
          placeholder="Days between watering—e.g. 1, 3, 7"/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
