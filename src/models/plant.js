import Moment from "moment";

class Plant {
  constructor(name, image, species, category, frequency) {
    this.name = name;
    this.image = image;
    this.species = species;
    this.category = category;
    this.frequency = frequency;
    this.timeAdded = new Moment();
    this.timeAddedFormatted = new Moment().format("MMM Do YYYY hh mm ss A");
    this.lastWatering = new Moment();
    this.lastWateringFormatted = this.lastWatering.format("MMM Do YYYY hh mm ss A");
    this.timeSinceLastWatering = this.setTimeSinceLastWatering();
    this.setLastWatering = this.setLastWatering();
  }

  setLastWatering() {
    this.lastWatering = new Moment();
  }

  setTimeSinceLastWatering() {
    this.timeSinceLastWatering = this.lastWatering.fromNow(true);
  }

}

export default Plant;
