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

let allSignedUserArray = [];



function printallSignedUserArrayToConsole() {
  for (const currentPerson of allSignedUserArray) {
    console.log(currentPerson);
  }
}
    
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
      currentDocument.forPlanImage,
      currentDocument._id
    );
    if (currentDocument.allFurnitures) {
      for (const currentFurnitre of currentDocument.allFurnitures) {
        newPersonToAdd.addNewFurniture(
          currentFurnitre.Location,
          currentFurnitre.ImageInBase64,
          currentFurnitre.typeName
        );
      }
    }
  }
}

function IsuserNameExist(userName) {
  for (const currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      return true;
    }
  }
  return false;
}

function IsuserNameAndpasswordExist(userName, password) {
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

function GetExistPersonFromSignedArray(userName) {
  for (const currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      return currentPerson;
    }
  }
}

function DeleteExistPersonFromSignedArray(userName) {
  let indexToDelete;
  for (let index = 0; index < allSignedUserArray.length; index++) {
    if (allSignedUserArray[index].UserName === userName) {
      indexToDelete = index;
      break;
    }
  }
  allSignedUserArray.splice(indexToDelete, 1);
}

function UpdateExistPersonPassword(userName, newPassword) {
  for (let currentPerson of allSignedUserArray) {
    if (currentPerson.UserName === userName) {
      currentPerson.changePassword(newPassword);
    }
  }
}

function AddNewForPlanForCertainPerson(userName, forPlanImageBase64) {
  let personToAddForPlanToo = GetExistPersonFromSignedArray(userName);
  personToAddForPlanToo.AddNewForPlan(forPlanImageBase64);
}

function DeleteForPlanByIndexForCertainPerson(userName, forPlanIndex) {
  let personToDeleteForPlanToo = GetExistPersonFromSignedArray(userName);
  personToDeleteForPlanToo.DeleteForPlan(forPlanIndex);
}

function AddFurnitureForCertainPersonForCertainForPlan(
  userName,
  forPlanIndex,
  typeName
) {
  let personToAddFernitureToo = GetExistPersonFromSignedArray(userName);
  personToAddFernitureToo.addNewFurniture(forPlanIndex, typeName);
}

//-------------------------------------Exports Functions-------------------------------------\\

//Function for Getting Person information----(doesnt use Data Base)
//1.return "User Found" and person info as JSON if there is matching userName in dataBase
//2.return "Cant get user info" if not sending userName or if there is no userName in data base same as send
function GetPersonInfo(userName) {
  if (!userName) {
    return {
      Status: "Cant get user info",
      Reason: "Missing input, userName",
    };
  }
  if (IsuserNameExist(userName)) {
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

//Function for SigningUp----(doesnt use Data Base)
//1.return "Sign Up succssed" if all input valid and there is no one in data base using same userName
//2.return "Sign Up Failed" if any input for sign up is missing,Email is invalid or someone in data base using same userName
function SignUp(
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
  if (IsuserNameExist(userName) === true) {
    return {
      Status: "Sign Up Failed",
      Reason: "There is user with that userName already",
    };
  }
  let newPersonToPush = new person(
    firstName,
    lastName,
    userName,
    password,
    email,
    adress,
    gender,
    false
  );
  //add new person to allSignedUserArray
  allSignedUserArray.push(newPersonToPush);
  return {
    Status: "Sign Up succssed",
  };
}

//Function for Login----(doesnt use Data Base)
//1.return "Login succssed" and and userInfo as JSON if there is such a user with that userName and password
//2.return "Login Failed" if any input for logIn is missing or there is no such a user that matching that userName and password
function Login(userName, password) {
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

  if (IsuserNameAndpasswordExist(userName, password) === true) {
    const user = GetExistPersonFromSignedArray(userName);
    return { Status: "Login succssed", userInfo: user };
  } else {
    return {
      Status: "Login failed",
      Reason: "No user with that userName and password",
    };
  }
}

//Function for Changing password----(doesnt use Data Base)
//1.return "Delete Succeed" if userName Found
//2.return "Delete Failed" if not sending userName or if there is no userName in data base same as send
function ChangePassword(userName, oldPassword, newPassword) {
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
  if (IsuserNameAndpasswordExist(userName, oldPassword) === true) {
    //change password in array
    UpdateExistPersonPassword(userName, newPassword);
    printallSignedUserArrayToConsole();
    return { Status: "Change succssed", info: `new password :${newPassword}` };
  } else {
    return {
      Status: "Change password Failed",
      Reason: "no user in data base with matching userName and oldPassword",
    };
  }
}

//Function for Adding new forPlanImage----(doesnt use Data Base)
//1.return "Add Succeed" if userName Found
//2.return "Add forPlanImage Failed" if  missing input or if there is no userName in data base same as send
function addNewForPlan(userName, forPlanImageInBase64) {
  if (!userName) {
    return {
      Status: "Add forPlanImage Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!forPlanImageInBase64) {
    return {
      Status: "Add forPlanImageBase64 Failed",
      Reason: "Missing input, forPlanImageInBase64",
    };
  }

  if (IsuserNameExist(userName)) {
    //update the array
    AddNewForPlanForCertainPerson(userName, forPlanImageInBase64);
    return { Status: "Add succssed" };
  } else {
    return {
      Status: "Add forPlanImage Failed",
      Reason: "no user in data base with matching userName",
    };
  }
}

//Function for Delete forPlanImage by index----(doesnt use Data Base)
//1.return "Delete Succeed" if userName Found and there is ForPlan with that index
//2.return "Delete forPlanImage Failed" if  missing input, there is no userName in data base same as send or Index is not in range of that userName
function DeleteForPlanByIndex(userName, forPlanIndex) {
  if (!userName) {
    return {
      Status: "Delete forPlanImage Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!forPlanIndex) {
    return {
      Status: "Delete forPlanImageBase64 Failed",
      Reason: "Missing input, forPlanIndex",
    };
  }

  if (IsuserNameExist(userName)) {
    //update the array
    const personToDeleteForPlanToo = GetExistPersonFromSignedArray(userName);
    if (
      Number(forPlanIndex) < 0 ||
      Number(forPlanIndex) > personToDeleteForPlanToo.ForPlanArray.length - 1
    ) {
      return {
        Status: "Delete forPlanImageBase64 Failed",
        Reason: `forPlanIndex for userName: ${userName} must be 0 <= forPlanIndex <= ${
          personToDeleteForPlanToo.ForPlanArray.length - 1
        } `,
      };
    } else {
      DeleteForPlanByIndexForCertainPerson(userName, Number(forPlanIndex));
      return { Status: "Delete succssed" };
    }
  } else {
    return {
      Status: "Delete forPlanImage Failed",
      Reason: "no user in data base with matching userName",
    };
  }
}

//Function for Adding new forPlanImage----(doesnt use Data Base)
//1.return "Add new Furtinure"
//2.return "Add new Furtinure Failed" if  missing input, there is no userName in data base same as send or Index is not in range of that userName
function AddNewFurnitureManuallyToCertainIndexForPlanForCertainPerson(
  userName,
  forPlanIndex,
  typeName
) {
  if (!userName) {
    return {
      Status: "Add new Furtinure Failed",
      Reason: "Missing input, userName",
    };
  }
  if (!forPlanIndex) {
    return {
      Status: "Add new Furtinure Failed",
      Reason: "Missing input, forPlanIndex",
    };
  }
  if (!typeName) {
    return {
      Status: "Add new Furtinure Failed",
      Reason: "Missing input, typeName",
    };
  }

  if (IsuserNameExist(userName) === true) {
    const personToAddFurnitureToo = GetExistPersonFromSignedArray(userName);
    if (
      Number(forPlanIndex) < 0 ||
      Number(forPlanIndex) > personToDeleteForPlanToo.ForPlanArray.length - 1
    ) {
      return {
        Status: "Add new Furtinure Failed",
        Reason: `forPlanIndex for userName: ${userName} must be 0 <= forPlanIndex <= ${
          personToDeleteForPlanToo.ForPlanArray.length - 1
        } `,
      };
    } else {
    }
  } else {
    return {
      Status: "Add new Furtinure Failed",
      Reason: "no user in data base with matching userName",
    };
  }
}

//-------------------------------------MongoDB Section-------------------------------------\\
const MongoDBManager = require(path.join(
  __dirname,
  "../MongoDB/MongoDBManager"
));

//Function that building new Person from MongoDB Document
function BuildingNewPersonFromMongoDBDocument(Documet) {
  let newPersonToAdd = new person(
    Documet.firstName,
    Documet.lastName,
    Documet.userName,
    Documet.password,
    Documet.email,
    Documet.adress,
    Documet.gender,
    Documet.savedInDataBase
  );
  for (const currentForPlan of Documet.forPlanArray) {
    newPersonToAdd.AddNewForPlan(currentForPlan.forPlanImangeBase64);
    for (const currentFurniture of currentForPlan.furnitureArray) {
      newPersonToAdd.addNewFurniture(
        currentForPlan.forPlanIndex,
        currentFurniture.typeName,
        currentFurniture.imageInBase64
      );
    }
  }

  return newPersonToAdd;
}

//Function for Loading all person from dataBase to array----(doesnt use Data Base)
//1.return "User Found" and person info as JSON if there is matching userName in dataBase
//2.return "Cant get user info" if not sending userName or if there is no userName in data base same as send
async function LoadingsignedUsersArray() {
  let documentsArray =
    await MongoDBManager.GetAllDocumentsFromsignedUsersCollection();

  //Converts each document to Person
  for (const currentDocument of documentsArray) {
    let newPersonToAdd = BuildingNewPersonFromMongoDBDocument(currentDocument);
    allSignedUserArray.push(newPersonToAdd);
  }
  printallSignedUserArrayToConsole();
}

//Function for Deleting Account----(Using Data Base)
//1.return "Delete Succeed" if userName Found
//2.return "Delete Failed" if not sending userName or if there is no userName in data base same as send
async function DeletingAccount(userName) {
  if (!userName) {
    return {
      Status: "Delete Failed",
      Reason: "Missing input, userName",
    };
  }
  if (IsuserNameExist(userName) === true) {
    const personToDelete = GetExistPersonFromSignedArray(userName);
    //delete from array
    DeleteExistPersonFromSignedArray(userName);

    if (personToDelete.SavedInDataBase === true) {
      //delete from data base
      await MongoDBManager.DeletePersonFromsignedUsersCollection(userName);
    }

    return { Status: "Delete Succeed" };
  } else {
    return {
      Status: "Delete Failed",
      Reason: "There is no user with that userName in dataBase",
    };
  }
}

//Function for Logout----(Using Data Base)
//alway get signed userName so always return Logout Succssed
async function Logout(userName) {
  let logOutPerson = GetExistPersonFromSignedArray(userName);
  if (logOutPerson.SavedInDataBase === true) {
    await MongoDBManager.UpdatePersonInDataBase(logOutPerson);
  } else {
    logOutPerson.changeSavedInDataBase(true);
    await MongoDBManager.CreateNewPersonInDataBase(logOutPerson);
  }
  console.log(logOutPerson);
  return { Status: "Logout sucssed" };
}

///////////////////////////////// Exports //////////////////////////

module.exports = {
  GetPersonInfo: GetPersonInfo,
  SignUp: SignUp,
  Login: Login,
  DeletingAccount: DeletingAccount,
  ChangePassword: ChangePassword,
  LoadingsignedUsersArray: LoadingsignedUsersArray,
  Logout: Logout,
  addNewForPlan: addNewForPlan,
  DeleteForPlanByIndex: DeleteForPlanByIndex,
};

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