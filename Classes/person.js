"use strict";

class person {
  constructor(userName, password, Email, Adress, idInDataBase) {
    this.userName = userName;
    this.password = password;
    this.Email = Email;
    this.Adress = Adress;
    this.dataBaseID = idInDataBase;
  }

  // Getter
  get logInDetails() {
    return { userName: this.userName, password: this.password };
  }

  get foorPlanImgBase64() {
    return this.foorPlanImgBase64;
  }

  get furnituresArray() {
    return this.furnituresArray;
  }

  // Method
  savePersonInMongoDB() {}

  addNewFurniture(newFurnitureToAdd) {
    this.addNewFurniture.push(newFurnitureToAdd);
  }
}
