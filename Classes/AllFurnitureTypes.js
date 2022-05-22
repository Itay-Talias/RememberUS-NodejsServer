"use strict";
const furnitureClass = require("./furniture.js");

class sofa extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "sofa");
  }
}

class bath extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "bath");
  }
}

class toilet extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "toilet");
  }
}

class television extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "television");
  }
}

class fridge extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "fridge");
  }
}

class door extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "door");
  }
}

class chair extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "chair");
  }
}

class table extends furnitureClass.furnitureClass {
  constructor(Location, ImageInBase64) {
    super(Location, ImageInBase64, "table");
  }
}

module.exports = {
  sofa: sofa,
  bath: bath,
  toilet: toilet,
  television: television,
  fridge: fridge,
  door: door,
  chair: chair,
  table: table,
};
