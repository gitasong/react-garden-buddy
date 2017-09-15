class Plant {
  constructor(name, image, species, category, frequency) {
    this.name = name;
    this.image = image;
    this.species = species;
    this.category = category;
    this.frequency = frequency;
    this.timeAdded = new Moment();
    this.timeSinceWatered = "a few seconds";
  }
}

export default Plant;
