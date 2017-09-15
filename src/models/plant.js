import Moment from "moment";

class Plant {
  constructor(name, image, species, category, frequency) {
    this.name = name;
    this.image = image;
    this.species = species;
    this.category = category;
    this.frequency = frequency;
    this.timeAdded = new Moment();
    this.timeAddedFormatted = new Moment().format("MMM Do YYYY");
    this.timeSinceWatered = this.setTimeSinceWatered();
  }

  setTimeSinceWatered() {
    this.timeSinceWatered = this.timeAdded.fromNow(true);
  }
}

export default Plant;
