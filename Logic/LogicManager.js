`use strict`;
const path = require("path");
const person = require(path.join(__dirname, "../Classes/person"));

//-------------------------------------input check Functions------------------------------------\\
const validator = require("validator");

function emailIsValid(email) {
  if (validator.isEmail(email)) {
    return true;
  }
  return false;
}

//-------------------------------------Exports Functions for allSignedUserArray-------------------------------------\\
let allSignedUserArray = [];

async function getAllsignedUserIntoArray() {
  let documentsArray = await MongoDBManager.getAllsignedUserIntoArray();
  //Move on the documentsArray and convert into people
  for (const currentDocument of documentsArray) {
    let newPersonToAdd = new person(
      currentDocument.userName,
      currentDocument.lastName,
      currentDocument.userName,
      currentDocument.password,
      currentDocument.email,
      currentDocument.adress,
      currentDocument.gender,
      currentDocument._id
    );
    if (currentDocument.forPlanImageInBase64) {
      newPersonToAdd.UpdateForPlanImageBase64(
        currentDocument.forPlanImageInBase64
      );
    }
    if (currentDocument.furnitureArray) {
      for (const currentFurnitre of currentDocument.furnitureArray) {
        newPersonToAdd.addNewFurniture(
          currentFurnitre.TypeName,
          currentFurnitre.ImageInBase64
        );
      }
    }
    allSignedUserArray.push(newPersonToAdd);
  }
  printallSignedUserArrayToConsole();
}

//-------------------------------------Help Function for allSignedUserArray-------------------------------------\\

function checkIfUserNameExistInallSignedUserArray(userName) {
  for (const currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      return true;
    }
  }
  return false;
}

function checkIfThereIsUserWithCertainuserNameAndpasswordInallSignedUserArray(
  userName,
  password
) {
  for (const currentPerson of allSignedUserArray) {
    if (
      currentPerson.UserName === userName &&
      currentPerson.Password === password
    ) {
      return true;
    }
  }
  return false;
}

function deleteExistuserNamePersonFromallSignedUserArray(userName) {
  let indexToDelete;
  for (let index = 0; index < allSignedUserArray.length; index++) {
    if (allSignedUserArray[index].UserName === userName) {
      indexToDelete = index;
      break;
    }
  }
  allSignedUserArray.splice(indexToDelete, 1);
}

function printallSignedUserArrayToConsole() {
  for (const currentPerson of allSignedUserArray) {
    console.log(currentPerson);
  }
}

function getExistCertainPersonFromallSignedUserArrayByuserName(userName) {
  for (const currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      return currentPerson;
    }
  }
}

function changeExistuserNamePasswordInallSignedUserArray(
  userName,
  newPassword
) {
  for (let currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      currentPerson.changePassword(newPassword);
    }
  }
}

function updateExistuserNameForPlanImageBase64InallSignedUserArray(
  userName,
  forPlanImageBase64
) {
  for (let currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      currentPerson.UpdateForPlanImageBase64(forPlanImageBase64);
    }
  }
}

function addToExistUserNewFernitureWithoutPhoto(userName, furnitureType) {
  for (let currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      currentPerson.addNewFurniture(furnitureType);
    }
  }
}

function addToExistUserNewFernitureWithPhoto(
  userName,
  furnitureType,
  furnitureImageBase64
) {
  for (let currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      currentPerson.addNewFurniture(furnitureType);
      currentPerson.FurnitureArray[
        currentPerson.FurnitureArray.length - 1
      ].changeImageInBase64(furnitureImageBase64);
    }
  }
}

//-------------------------------------MongoDB Section-------------------------------------\\
const MongoDBManager = require(path.join(
  __dirname,
  "../MongoDB/MongoDBManager"
));

//-------------------------------------Exports Functions from MongoDB Section-------------------------------------\\

//Function for signUpToDataBase
//1.return Add succssed if all input valid and there is no one in dta base using same userName
//2.return add failed if any input for sign up is missing or wrong or someone in data base using same userName
async function signUpToDataBase(
  firstName,
  lastName,
  userName,
  password,
  email,
  adress,
  gender
) {
  if (!firstName) {
    return {
      Status: "Sign Up Failed",
      Reason: "Missing input, firstName",
    };
  }
  if (!lastName) {
    return {
      Status: "Sign Up Failed",
      Reason: "Missing input, lastName",
    };
  }
  if (!userName) {
    return {
      Status: "Sign Up Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!password) {
    return {
      Status: "Sign Up Failed",
      Reason: "Missing input, password",
    };
  }
  if (!email) {
    return {
      Status: "Sign Up Failed",
      Reason: "Missing input, email",
    };
  } else if (!emailIsValid(email)) {
    return {
      Status: "Sign Up Failed",
      Reason: "email is not valid",
    };
  }
  if (!adress) {
    return {
      Status: "Sign Up Failed",
      Reason: "Missing input, adress",
    };
  }
  if (!gender) {
    return {
      Status: "Sign Up Failed",
      Reason: "Missing input, gender",
    };
  }

  //All inputs is valid
  if (checkIfUserNameExistInallSignedUserArray(userName) === true) {
    return {
      Status: "Sign Up Failed",
      Reason: "There is user with that userName already",
    };
  }
  //Add new user to allSignedUserArray as person
  let newPersonToPush = new person(
    firstName,
    lastName,
    userName,
    password,
    email,
    adress,
    gender
  );
  allSignedUserArray.push(newPersonToPush);
  //Add new person to Data Base
  MongoDBManager.addNewPersonToDataBase(newPersonToPush);
  return {
    Status: "Sign Up succssed",
  };
}

//Function for LogInToDataBase
//1.return LogIn succssed and userInfo if there is such a user with that userName and password
//2.return LogIn failed if any input for logIn is missing or there is no such a user that matching that userName and password
async function logInToDataBase(userName, password) {
  if (!userName) {
    return {
      Status: "Login Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!password) {
    return {
      Status: "Login Failed",
      Reason: "Missing input, password",
    };
  }

  if (
    checkIfThereIsUserWithCertainuserNameAndpasswordInallSignedUserArray(
      userName,
      password
    ) === true
  ) {
    const personToReturn =
      getExistCertainPersonFromallSignedUserArrayByuserName(userName);
    return { Status: "Login succssed", userInfo: personToReturn };
  } else {
    return {
      Status: "Login failed",
      Reason: "No user with that userName and password",
    };
  }
}

//Function who delete certain document in signed userName by userName
//delet from data base and delete from array
//1.return delete succeed if userName Found
//2.return delete failed if userName not found or missing input
async function DeletePersonFromDataBase(userName) {
  if (!userName) {
    return {
      Status: "Delete Failed",
      Reason: "Missing input, userName",
    };
  }
  if (checkIfUserNameExistInallSignedUserArray(userName) === true) {
    await MongoDBManager.deleteExistDocumentByUserName(userName);
    deleteExistuserNamePersonFromallSignedUserArray(userName);
    return { Status: "Delete Succeed" };
  } else {
    return {
      Status: "Delete Failed",
      Reason: "There is no user with that userName in dataBase",
    };
  }
}

//Function who change certain userName password
async function changePasswordForCertainuserName(
  userName,
  oldPassword,
  newPassword
) {
  if (!userName) {
    return {
      Status: "Change password Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!oldPassword) {
    return {
      Status: "Change password Failed",
      Reason: "Missing input, old password",
    };
  }
  if (!newPassword) {
    return {
      Status: "Change password Failed",
      Reason: "Missing input, new password",
    };
  }
  if (
    checkIfThereIsUserWithCertainuserNameAndpasswordInallSignedUserArray(
      userName,
      oldPassword
    ) === true
  ) {
    //change password in array
    changeExistuserNamePasswordInallSignedUserArray(userName, newPassword);
    //change password in dataBase
    await MongoDBManager.changePasswordForExistinguser(userName, newPassword);
    return { Status: "Change succssed", info: `new password :${newPassword}` };
  } else {
    return {
      Status: "Change password Failed",
      Reason: "no user in data base with matching userName and oldPassword",
    };
  }
}

//function who update certainUser forPlanImage
async function updateCertainPersonForPlanImage(userName, forPlanImageBase64) {
  if (!userName) {
    return {
      Status: "Update forPlanImageBase64 Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!forPlanImageBase64) {
    return {
      Status: "Update forPlanImageBase64 Failed",
      Reason: "Missing input, forPlanImageBase64",
    };
  }

  if (checkIfUserNameExistInallSignedUserArray(userName)) {
    //update the array
    updateExistuserNameForPlanImageBase64InallSignedUserArray(
      userName,
      forPlanImageBase64
    );
    //update the dataBase
    await MongoDBManager.updateForPlanImageInBase64ForExistingUser(
      userName,
      forPlanImageBase64
    );
    return { Status: "Update succssed" };
  } else {
    return {
      Status: "Update Failed",
      Reason: "no user in data base with matching userName",
    };
  }
}

//function who add amount of furniture to Person data Base
async function AddOneFurnitureByuserNameWithPhoto(
  userName,
  furnitureImageBase64
) {
  if (!userName) {
    return {
      Status: "Add Furniture Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!furnitureImageBase64) {
    return {
      Status: "Add Furniture Failed",
      Reason: "Missing input, furnitureImageBase64",
    };
  }
  if (checkIfUserNameExistInallSignedUserArray(userName)) {
    //decode the photo
    const furtinureType = "sofa";
    //add to person Array
    addToExistUserNewFernitureWithPhoto(
      userName,
      furtinureType,
      furnitureImageBase64
    );

    //add to data Base
    await MongoDBManager.updateCertainFernitureArrayOfPerson(
      userName,
      getExistCertainPersonFromallSignedUserArrayByuserName(userName)
        .FurnitureArray
    );
    return {
      Status: "Add Furniture succssed",
    };
  } else {
    return {
      Status: "Add Furniture Failed",
      Reason: "No userName matching in data base",
    };
  }
}

//function who add amount of furniture to Person data Base
async function AddOneFurnitureByuserNameManually(userName, furnitureType) {
  if (!userName) {
    return {
      Status: "Add Furniture Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!furnitureType) {
    return {
      Status: "Add Furniture Failed",
      Reason: "Missing input, furnitureType",
    };
  }
  if (checkIfUserNameExistInallSignedUserArray(userName)) {
    //add to person Array
    addToExistUserNewFernitureWithoutPhoto(userName, furnitureType);
    //add to data Base
    await MongoDBManager.updateCertainFernitureArrayOfPerson(
      userName,
      getExistCertainPersonFromallSignedUserArrayByuserName(userName)
        .FurnitureArray
    );
    return {
      Status: "Add Furniture succssed",
    };
  } else {
    return {
      Status: "Add Furniture Failed",
      Reason: "No userName matching in data base",
    };
  }
}

//function who return certain person info
function getPersonInfoByUserName(userName) {
  if (!userName) {
    return {
      Status: "Update forPlanImageBase64 Failed",
      Reason: "Missing input, userName",
    };
  }
  if (checkIfUserNameExistInallSignedUserArray(userName)) {
    for (const currentPerson of allSignedUserArray) {
      if (currentPerson.UserName === userName) {
        return {
          Status: "User Found",
          userInfo: currentPerson,
        };
      }
    }
  } else {
    return {
      Status: "Cant get user info",
      Reason: "No userName matching in data base",
    };
  }
}

module.exports = {
  signUpToDataBase: signUpToDataBase,
  logInToDataBase: logInToDataBase,
  DeletePersonFromDataBase: DeletePersonFromDataBase,
  changePasswordForCertainuserName: changePasswordForCertainuserName,
  getAllsignedUserIntoArray: getAllsignedUserIntoArray,
  updateCertainPersonForPlanImage: updateCertainPersonForPlanImage,
  getPersonInfoByUserName: getPersonInfoByUserName,
  AddOneFurnitureByuserNameManually: AddOneFurnitureByuserNameManually,
  AddOneFurnitureByuserNameWithPhoto: AddOneFurnitureByuserNameWithPhoto,
};
