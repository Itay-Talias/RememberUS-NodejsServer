"use strict";
const furnitureClass = require("./furniture.js");

class sofa extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("sofa", furnitureIndex);
  }
}

class bath extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("bath", furnitureIndex);
  }
}

class toilet extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("toilet", furnitureIndex);
  }
}

class television extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("television", furnitureIndex);
  }
}

class fridge extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("fridge", furnitureIndex);
  }
}

class door extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("door", furnitureIndex);
  }
}

class chair extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("chair", furnitureIndex);
  }
}

class table extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("table", furnitureIndex);
  }
}

class carpet extends furnitureClass.furnitureClass {
  constructor(furnitureIndex) {
    super("carpet", furnitureIndex);
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
