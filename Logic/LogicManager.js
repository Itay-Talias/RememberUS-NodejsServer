`use strict`;
const path = require("path");

let allSignedUserArray;

//SaveMongoDB Manager
const MongoDBManager = require(path.join(
  __dirname,
  "../MongoDB/MongoDBManager"
));

async function signUpToDataBase(userName, password, email, adress) {
  const answer = await MongoDBManager.signUpToDataBase(
    userName,
    password,
    email,
    adress
  );
  //if added to database we need to add to all signedUserArray

  return answer;
}

async function logInToDataBase(userName, password) {
  return await MongoDBManager.logInToDataBase(userName, password);
}

async function getAllsignedUserIntoArray() {
  allSignedUserArray = await MongoDBManager.getAllsignedUserIntoArray();
}

module.exports = {
  signUpToDataBase: signUpToDataBase,
  logInToDataBase: logInToDataBase,
  getAllsignedUserIntoArray: getAllsignedUserIntoArray,
};
