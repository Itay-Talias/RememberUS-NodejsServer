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
let allSignedUserArray;

async function getAllsignedUserIntoArray() {
  let documentsArray = await MongoDBManager.getAllsignedUserIntoArray();
  //Move on the documentsArray and convert into people
  for (const currentDocument of documentsArray) {
    let newPersonToAdd = new person.person(
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

//-------------------------------------Help Function for allSignedUserArray-------------------------------------\\

function checkIfUserNameExistInallSignedUserArray(userName) {
  for (const currentUserDocument of allSignedUserArray) {
    if (currentUserDocument.userName === userName) {
      return true;
    }
  }
  return false;
}

function checkIfThereIsUserWithCertainuserNameAndpasswordInallSignedUserArray(
  userName,
  password
) {
  for (const currentUserDocument of allSignedUserArray) {
    if (
      currentUserDocument.userName === userName &&
      currentUserDocument.password === password
    ) {
      return true;
    }
  }
  return false;
}

function deleteExistuserNamePersonFromallSignedUserArray(userName) {
  let indexToDelete;
  for (let index = 0; index < allSignedUserArray.length; index++) {
    if (allSignedUserArray[index].userName === userName) {
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
  for (const currentUserDocument of allSignedUserArray) {
    if (currentUserDocument.userName === userName) {
      return currentUserDocument;
    }
  }
}

function changeExistuserNamePasswordInallSignedUserArray(
  userName,
  newPassword
) {
  for (let currentUserDocument of allSignedUserArray) {
    if (currentUserDocument.userName === userName) {
      currentUserDocument.password = newPassword;
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
//1.return Add succssed and newUser document if all input valid and there is no one in dta base using same userName
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

  //Add to user to data base
  const newUserDocument =
    await MongoDBManager.addNewValidUserToDataBaseAndReturnHisNewDocument(
      firstName,
      lastName,
      userName,
      password,
      email,
      adress,
      gender
    );
  //Add new user to allSignedUserArray as person
  allSignedUserArray.push(
    new person(
      firstName,
      lastName,
      userName,
      password,
      email,
      adress,
      gender,
      newUserDocument._id
    )
  );
  return {
    Status: "Sign Up succssed",
    userInfo: newUserDocument,
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
    const documentToReturn =
      getExistCertainDocumentFromallSignedUserArrayByuserName(userName);
    return { Status: "Login succssed", userInfo: documentToReturn };
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
async function DeleteDocumentByUserName(userName) {
  if (!userName) {
    return {
      Status: "Delete Failed",
      Reason: "Missing input, userName",
    };
  }
  if (checkIfUserNameExistInallSignedUserArray(userName) === true) {
    await MongoDBManager.deleteExistDocumentByUserName(userName);
    deleteExistuserNameDocumentFromallSignedUserArray(userName);
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

module.exports = {
  signUpToDataBase: signUpToDataBase,
  logInToDataBase: logInToDataBase,
  DeleteDocumentByUserName: DeleteDocumentByUserName,
  changePasswordForCertainuserName: changePasswordForCertainuserName,
  getAllsignedUserIntoArray: getAllsignedUserIntoArray,
};
