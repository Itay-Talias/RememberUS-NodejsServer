`use strict`;

//MongoDB
const { MongoClient } = require("mongodb");
const uriForDatabase =
  "mongodb+srv://omeridan123:!!!!!!!!!1@cluster0.we1ph.mongodb.net/?retryWrites=true&w=majority"; //our uri for connection the cluster
const client = new MongoClient(uriForDatabase); //our Connection to data base object

//function for connecting to data base
async function ConnectToDataBase() {
  try {
    console.log("-------------------------------");
    console.log("Connecting To database...");
    await client.connect();
    console.log("Connecting To database succssed");
    console.log("-------------------------------");
  } catch (e) {
    console.log("Error connecting to Data base");
  }
}

//function that closing the connection with the data base
async function ClosingConnectionWithDataBase() {
  console.log("-------------------------------");
  console.log("Closing connection to Data base...");
  await client.close();
  console.log("Connection with Data base closed");
  console.log("-------------------------------");
}

async function getExistUserDocumentByUserName(userName) {
  await ConnectToDataBase();

  const existUserDocument = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .findOne({ userName: userName });

  await ClosingConnectionWithDataBase();
  return existUserDocument;
}

//function that add new valid user to data base
async function addNewPersonToDataBase(personToAdd) {
  await ConnectToDataBase();

  const newAddedUser = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .insertOne(personToAdd);

  await ClosingConnectionWithDataBase();
}

//function who delete userName document(userName that 100% exist) from dataBase
async function deleteExistDocumentByUserName(userName) {
  await ConnectToDataBase();
  const result = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .deleteOne({ userName: userName });
  await ClosingConnectionWithDataBase();
}

//return all signed users documents as array
async function getAllsignedUserIntoArray() {
  await ConnectToDataBase();

  const documents = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .find({});

  const documentsArray = await documents.toArray();
  await ClosingConnectionWithDataBase();
  return documentsArray;
}

//function that update password for existing user in data base
async function changePasswordForExistinguser(userName, newPassword) {
  await ConnectToDataBase();

  const updateFields = { password: newPassword };

  const result = await client
    .db("RememberUs-DataBase") //Name of data base
    .collection("signedUsers") //name of collection
    .updateOne({ userName: userName }, { $set: updateFields }); //Document with name=name will update the field updatefields

  await ClosingConnectionWithDataBase();
}

//function that update forPlanImage for existing user in data base
async function updateForPlanImageInBase64ForExistingUser(
  userName,
  forPlanImageInBase64
) {
  await ConnectToDataBase();

  const updateFields = { forPlanImageInBase64: forPlanImageInBase64 };

  const result = await client
    .db("RememberUs-DataBase") //Name of data base
    .collection("signedUsers") //name of collection
    .updateOne({ userName: userName }, { $set: updateFields }); //Document with name=name will update the field updatefields

  await ClosingConnectionWithDataBase();
}

//function that add Furniture To exist certain User with defult photo
async function updateCertainFernitureArrayOfPerson(
  userName,
  newFurnitureArray
) {
  await ConnectToDataBase();

  const updateFields = { furnitureArray: newFurnitureArray };

  const result = await client
    .db("RememberUs-DataBase") //Name of data base
    .collection("signedUsers") //name of collection
    .updateOne({ userName: userName }, { $set: updateFields }); //Document with name=name will update the field updatefields

  await ClosingConnectionWithDataBase();
}

module.exports = {
  addNewPersonToDataBase: addNewPersonToDataBase,
  deleteExistDocumentByUserName: deleteExistDocumentByUserName,
  changePasswordForExistinguser: changePasswordForExistinguser,
  getAllsignedUserIntoArray: getAllsignedUserIntoArray,
  updateForPlanImageInBase64ForExistingUser:
    updateForPlanImageInBase64ForExistingUser,
  updateCertainFernitureArrayOfPerson: updateCertainFernitureArrayOfPerson,
};
