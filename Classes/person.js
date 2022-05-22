"use strict";
const allFurnitureClass = require("./AllFurniture.js");

class person {
  constructor(
    firstName,
    lastName,
    userName,
    password,
    email,
    adress,
    gender,
    idInDataBase,
    forPlanImage = "none"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.adress = adress;
    this.gender = gender;
    this.forPlanImage = forPlanImage;
    this.dataBaseID = idInDataBase;
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
  get IdInDataBase() {
    return this.idInDataBase;
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

  //Methods
  addNewFurniture(Location, ImageInBase64, typeName) {
    let newFurnitureToAdd = bringCertainFerniture(
      Location,
      ImageInBase64,
      typeName
    );
    this.addNewFurniture.push(newFurnitureToAdd);
  }
}

function bringCertainFerniture(Location, ImageInBase64, typeName) {
  let newFurniture;
  switch (typeName) {
    case "sofa": {
      newFurniture = new allFurnitureClass.sofa(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
    case "bath": {
      newFurniture = new allFurnitureClass.bath(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
    case "toilet": {
      newFurniture = new allFurnitureClass.toilet(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
    case "television": {
      newFurniture = new allFurnitureClass.television(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
    case "fridge": {
      newFurniture = new allFurnitureClass.fridge(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
    case "door": {
      newFurniture = new allFurnitureClass.door(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
    case "chair": {
      newFurniture = new allFurnitureClass.chair(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
    case "table": {
      newFurniture = new allFurnitureClass.table(
        Location,
        ImageInBase64,
        typeName
      );
      break;
    }
  }

  return newFurniture;
}

module.exports = person;
