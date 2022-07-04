"use strict";
const forPlanImage = require("./forPlanImage.js");

class person {
  constructor(
    firstName,
    lastName,
    userName,
    password,
    email,
    adress,
    gender,
    savedInDataBase = false
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.adress = adress;
    this.gender = gender;
    this.forPlanArray = [];
    this.savedInDataBase = savedInDataBase;
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
  get ForPlanArray() {
    return this.forPlanArray;
  }
  get SavedInDataBase() {
    return this.savedInDataBase;
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
  changeForPlanArray(newArray) {
    this.forPlanArray = newArray;
  }
  changeSavedInDataBase(status) {
    this.savedInDataBase = status;
  }

  //Methods
  AddNewForPlan(forPlanBase64) {
    let newForPlanToAdd = new forPlanImage(
      forPlanBase64,
      this.forPlanArray.length
    );
    this.forPlanArray.push(newForPlanToAdd);
  }

  DeleteForPlan(forPlanToDeleteIndex) {
    if (
      forPlanToDeleteIndex <= this.forPlanArray.length - 1 &&
      forPlanToDeleteIndex >= 0
    ) {
      for (
        let currentIndex = forPlanToDeleteIndex + 1;
        currentIndex < this.forPlanArray.length;
        currentIndex++
      ) {
        this.forPlanArray[currentIndex - 1] = this.forPlanArray[currentIndex];
        this.forPlanArray[currentIndex - 1].changeforPlanIndex(
          currentIndex - 1
        );
      }
      //now delete last cell
      this.forPlanArray.splice(this.forPlanArray.length - 1, 1);
    }
  }

  addNewFurniture(forPlanIndex, typeName, ImageInBase64 = undefined) {
    this.forPlanArray[forPlanIndex].addNewFurniture(typeName, ImageInBase64);
  }
}

module.exports = person;
