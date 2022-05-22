"use strict";
const allFurnitureClass = require("./AllFurnitureTypes.js");

function BuildCertainFurniture(typeName) {
  let newFurniture;
  switch (typeName) {
    case "sofa": {
      newFurniture = new allFurnitureClass.sofa(typeName);
      break;
    }
    case "bath": {
      newFurniture = new allFurnitureClass.bath(typeName);
      break;
    }
    case "toilet": {
      newFurniture = new allFurnitureClass.toilet(typeName);
      break;
    }
    case "television": {
      newFurniture = new allFurnitureClass.television(typeName);
      break;
    }
    case "fridge": {
      newFurniture = new allFurnitureClass.fridge(typeName);
      break;
    }
    case "door": {
      newFurniture = new allFurnitureClass.door(typeName);
      break;
    }
    case "chair": {
      newFurniture = new allFurnitureClass.chair(typeName);
      break;
    }
    case "table": {
      newFurniture = new allFurnitureClass.table(typeName);
      break;
    }
    case "carpet": {
      newFurniture = new allFurnitureClass.carpet(typeName);
      break;
    }
  }

  return newFurniture;
}

class person {
  constructor(firstName, lastName, userName, password, email, adress, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.adress = adress;
    this.gender = gender;
    this.furnitureArray = [];
  }

  //Getters
  get FirstName() {
    return this.firstName;
  }
  get LastName() {
    return this.lastName;
  }
  get UserName() {
    return this.userName;
  }
  get Password() {
    return this.password;
  }
  get Email() {
    return this.email;
  }
  get Adress() {
    return this.adress;
  }
  get Gender() {
    return this.gender;
  }
  get ForPlanImage() {
    return this.forPlanImage;
  }
  get FurnitureArray() {
    return this.furnitureArray;
  }

  //Setters
  changeUserName(newUserName) {
    this.userName = newUserName;
  }
  changePassword(newPassword) {
    this.password = newPassword;
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
  changeAdress(newAdress) {
    this.adress = newAdress;
  }
  changeAdress(newAdress) {
    this.adress = newAdress;
  }
  changeFurnitureArray(newArray) {
    this.furnitureArray = newArray;
  }

  //Methods
  UpdateForPlanImageBase64(ImageInBase64) {
    this.forPlanImageBase64 = ImageInBase64;
  }

  addNewFurniture(typeName, ImageInBase64 = undefined) {
    let newFurnitureToAdd = BuildCertainFurniture(typeName);
    newFurnitureToAdd.addDescriptionPhoto(ImageInBase64);
    this.furnitureArray.push(newFurnitureToAdd);
  }
}

module.exports = person;
