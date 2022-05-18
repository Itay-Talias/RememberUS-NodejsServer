`use strict`;

////////////////////-------------------Help Functions for MongoDB----------------------//////////////////////////

////////////////////-------------------Function for connect and siconnect from Data base----------------------//////////////////////////
//in order to using await we must do in in async function
async function ConnectToDataBase(client) {
  try {
    console.log("-------------------------------");
    console.log("Connecting To database...");
    await client.connect(); //using await in order to block the code until connect beacuse we cant do nothing if we not conneecting
    console.log("Connecting To database succssed");
    console.log("-------------------------------");
  } catch (e) {
    console.log("Error connecting to Data base");
  }
}
//function that closing the connection with the data base
async function ClosingConnectionWithDataBase(client) {
  console.log("-------------------------------");
  console.log("Closing connection to Data base...");
  await client.close();
  console.log("Connection with Data base closed");
  console.log("-------------------------------");
}

////////////////////-------------------Functions for Login request----------------------//////////////////////////
//function that check if there is missing input for Login
function checkForMissingInputForLogin(userName, password) {
  if (!userName) {
    return { Status: "Missing", Reason: "userName is missing" };
  } else if (!password) {
    return { Status: "Missing", Reason: "password is missing" };
  }
  return { Status: "Not missing" };
}
//function that bring userDocument by userName(unique) and password if exist return found and the document
async function bringSignUpUserDocument(client, userName, password) {
  const result = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .findOne({ userName: userName, password: password });
  if (result) {
    return { Status: "Found", document: result };
  } else {
    return { Status: "notFound" };
  }
}

////////////////////-------------------Functions for SignUp request----------------------//////////////////////////
//if user exist return Found and if not return notFound
async function checkIfuserNameExist(client, userName) {
  const document = await client
    .db("RememberUs-DataBase") //Name of data base
    .collection("signedUsers") //name of collection
    .findOne({ userName: userName });
  if (document) {
    return { Status: "Found" };
  } else {
    return { Status: "notFound" };
  }
}
//add new User to data base if succssed(no other user with that userName) add to data base and return add succssed and the id in database
//if failed(there is another user in the data base with that userName) not add to data base and return add failed
async function addNewUserToDataBase(client, userName, password, email, adress) {
  const documentToAdd = {
    userName: userName,
    password: password,
    email: email,
    adress: adress,
  };
  const userExist = await checkIfuserNameExist(client, userName);
  if (userExist.Status === "notFound") {
    //the user is not exist
    const result = await client
      .db("RememberUs-DataBase")
      .collection("signedUsers")
      .insertOne(documentToAdd);
    return { Status: "Add Succssed", _id: result };
  } else {
    return {
      Status: "Add Failed",
      Reason: "User already exist with that userName",
    };
  }
}
//function that check if there is missing input for signUp parameters
function checkForMissingInputForSignUp(userName, password, Email, Adress) {
  if (!userName) {
    return { Status: "Missing ", Reason: "userName is missing" };
  } else if (!password) {
    return { Status: "Missing", Reason: "password is missing" };
  } else if (!Email) {
    return { Status: "Missing", Reason: "Email is missing" };
  } else if (!Adress) {
    return { Status: "Missing", Reason: "Adress is missing" };
  }
  return { Status: "Not missing" };
}



module.exports = {
  ConnectToDataBase: ConnectToDataBase,
  ClosingConnectionWithDataBase: ClosingConnectionWithDataBase,
  checkIfuserNameExist: checkIfuserNameExist,
  addNewUserToDataBase: addNewUserToDataBase,
  bringSignUpUserDocument: bringSignUpUserDocument,
  checkForMissingInputForSignUp: checkForMissingInputForSignUp,
  checkForMissingInputForLogin: checkForMissingInputForLogin,
};
