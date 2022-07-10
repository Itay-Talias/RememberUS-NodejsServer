"use strict";
const furnitureClass = require("./furniture.js");

class sofa extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("sofa", furnitureIndex);
  }
}

class bath extends furnitureClass.furnitureClass {
  constructor() {
    super("bath");
  }
}

class toilet extends furnitureClass.furnitureClass {
  constructor() {
    super("toilet");
  }
}

class television extends furnitureClass.furnitureClass {
  constructor() {
    super("television");
  }
}

class fridge extends furnitureClass.furnitureClass {
  constructor() {
    super("fridge");
  }
}

class door extends furnitureClass.furnitureClass {
  constructor() {
    super("door");
  }
}

class chair extends furnitureClass.furnitureClass {
  constructor() {
    super("chair");
  }
}

class table extends furnitureClass.furnitureClass {
  constructor() {
    super("table");
  }
}

class carpet extends furnitureClass.furnitureClass {
  constructor() {
    super("carpet");
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
  carpet: carpet,
};
