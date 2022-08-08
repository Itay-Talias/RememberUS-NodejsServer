"use strict";
const allFurnitureClass = require("./allFurnitureTypes.js");

class forPlanImage {
  constructor(forPlanImangeBase64 = undefined, forPlanIndex) {
    this.forPlanIndex = forPlanIndex;
    this.forPlanImangeBase64 = forPlanImangeBase64;
    this.furnitureArray = [];
  }

  //Getters
  get ForPlanImangeBase64() {
    return this.forPlanImangeBase64;
  }
  get ForPlanIndex() {
    return this.forPlanIndex;
  }
  get FurnitureArray() {
    return this.furnitureArray;
  }

  //Setters
  changeforPlanImangeBase64(newforPlanImangeBase64) {
    this.forPlanImangeBase64 = newforPlanImangeBase64;
  }
  changeforPlanIndex(newIndex) {
    this.forPlanIndex = newIndex;
  }
  changeFurnitureArray(newArray) {
    this.furnitureArray = newArray;
  }

  //Methods
  addNewFurniture(typeName, ImageInBase64 = undefined) {
    let newFurnitureToAdd = BuildCertainFurniture(
      typeName,
      this.furnitureArray.length
    );
    newFurnitureToAdd.addDescriptionPhoto(ImageInBase64);
    this.furnitureArray.push(newFurnitureToAdd);
  }

  DeleteFurnitureByIndex(furnitureIndex) {
    if (
      furnitureIndex <= this.furnitureArray.length - 1 &&
      furnitureIndex >= 0
    ) {
      this.furnitureArray.splice(furnitureIndex, 1);
      for (let i = furnitureIndex; i <= this.furnitureArray.length - 1; i++) {
        this.furnitureArray[i].changeFurnitureIndex(
          this.furnitureArray[i].FurnitureIndex - 1
        );
      }
      return true;
    } else {
      return false;
    }
  }

  ChangeFurnitureTypeByIndex(furnitureIndex, newTypeName) {
    if (
      furnitureIndex <= this.furnitureArray.length - 1 &&
      furnitureIndex >= 0
    ) {
      this.furnitureArray[furnitureIndex].changeTypeName(newTypeName);
      return true;
    } else {
      return false;
    }
  }
}

function BuildCertainFurniture(typeName, furnitureIndex) {
  let newFurniture;
  switch (typeName) {
    case "sofa": {
      newFurniture = new allFurnitureClass.sofa(furnitureIndex);
      break;
    }
    case "bath": {
      newFurniture = new allFurnitureClass.bath(furnitureIndex);
      break;
    }
    case "toilet": {
      newFurniture = new allFurnitureClass.toilet(furnitureIndex);
      break;
    }
    case "television": {
      newFurniture = new allFurnitureClass.television(furnitureIndex);
      break;
    }
    case "fridge": {
      newFurniture = new allFurnitureClass.fridge(furnitureIndex);
      break;
    }
    case "door": {
      newFurniture = new allFurnitureClass.door(furnitureIndex);
      break;
    }
    case "chair": {
      newFurniture = new allFurnitureClass.chair(furnitureIndex);
      break;
    }
    case "table": {
      newFurniture = new allFurnitureClass.table(furnitureIndex);
      break;
    }
    case "carpet": {
      newFurniture = new allFurnitureClass.carpet(furnitureIndex);
      break;
    }
  }

  return newFurniture;
}

module.exports = forPlanImage;
