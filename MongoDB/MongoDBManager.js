`use strict`;

//MongoDB
const { MongoClient } = require("mongodb");
const uriForDatabase =
  "mongodb+srv://omeridan123:!!!!!!!!!1@cluster0.we1ph.mongodb.net/?retryWrites=true&w=majority"; //our uri for connection the cluster
const client = new MongoClient(uriForDatabase); //our Connection to data base object
const myMongoDBHelpFuncions = require(`${__dirname}/mongodbFunc`);

//Function for signUpToDataBase
//1.return Add succssed,id in data base and details of sign up user if signup seccssed(no one in the data base using same userName)
//2.return add failed if any input for sign up is missing or someone already using that userName
async function signUpToDataBase(userName, password, email, adress) {
  await myMongoDBHelpFuncions.ConnectToDataBase(client);
  const missingInput = myMongoDBHelpFuncions.checkForMissingInputForSignUp(
    userName,
    password,
    email,
    adress
  );
  if (missingInput.Status === "Not missing") {
    const newUser = await myMongoDBHelpFuncions.addNewUserToDataBase(
      client,
      userName,
      password,
      email,
      adress
    );
    if (newUser.Status === "Add Succssed") {
      await myMongoDBHelpFuncions.ClosingConnectionWithDataBase(client);
      return {
        Status: newUser.Status,
        id: newUser._id,
        userName: userName,
        password: password,
        Email: email,
        Adress: adress,
      };
    } else {
      await myMongoDBHelpFuncions.ClosingConnectionWithDataBase(client);
      return { Status: newUser.Status, Reason: newUser.Reason };
    }
  } else {
    await myMongoDBHelpFuncions.ClosingConnectionWithDataBase(client);
    return { Status: "Add Failed", Reason: missingInput.Reason };
  }
}

//Function for LogInToDataBase
//1.return LogIn succssed and userInfo if there is such a user with that userName and password
//2.return LogIn failed if any input for logIn is missing or there is no such a user that matching that userName and password
async function logInToDataBase(userName, password) {
  await myMongoDBHelpFuncions.ConnectToDataBase(client);
  const missingInput = myMongoDBHelpFuncions.checkForMissingInputForLogin(
    userName,
    password
  );
  if (missingInput.Status === "Not missing") {
    const user = await myMongoDBHelpFuncions.bringSignUpUserDocument(
      client,
      userName,
      password
    );
    if (user.Status === "Found") {
      await myMongoDBHelpFuncions.ClosingConnectionWithDataBase(client);
      return { Stauts: "LogIn succssed", userInfo: user.document };
    } else {
      await myMongoDBHelpFuncions.ClosingConnectionWithDataBase(client);
      return {
        Status: "LogIn Failed",
        Reason: "No user with that username and password",
      };
    }
  } else {
    await myMongoDBHelpFuncions.ClosingConnectionWithDataBase(client);
    return { Status: "LogIn Failed", Reason: missingInput.Reason };
  }
}

//return all signed users documents as array
async function getAllsignedUserIntoArray() {
  await myMongoDBHelpFuncions.ConnectToDataBase(client);

  const documents = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .find({});

  const documentsArray = await documents.toArray();
  await myMongoDBHelpFuncions.ClosingConnectionWithDataBase(client);
  return documentsArray;
}

module.exports = {
  signUpToDataBase: signUpToDataBase,
  logInToDataBase: logInToDataBase,
  getAllsignedUserIntoArray: getAllsignedUserIntoArray,
};
