"use strict";

class furniture {
  constructor(Location) {
    this.location = Location;
  }

  // Getter
  get Location() {
    return this.location;
  }

  // Method
  changeLocation(newLocation) {
    this.location = newLocation;
  }
}

module.exports.furnitureClass = furniture;
