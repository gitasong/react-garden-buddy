import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function Buddy(props) {
  return (
    <div>
      <NewPlantForm/>
      <PlantList/>
    </div>
  );
}

export default Buddy;
