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

//Function that delete exist person from DataBase
async function DeletePersonFromsignedUsersCollection(userName) {
  await ConnectToDataBase();
  const result = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .deleteOne({ userName: userName });
  await ClosingConnectionWithDataBase();
}

//Function that return all documents from signedUser DataBase
async function GetAllDocumentsFromsignedUsersCollection() {
  await ConnectToDataBase();

  const documents = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .find({});

  const documentsArray = await documents.toArray();
  await ClosingConnectionWithDataBase();
  return documentsArray;
}

//Function that get person that exist in data base and update to new one
async function UpdatePersonInDataBase(UpdatedPerson) {
  await ConnectToDataBase();

  //First delete him from data base
  const result = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .deleteOne({ userName: UpdatedPerson.userName });

  //Add the updatedPerson
  const newAddedUser = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .insertOne(UpdatedPerson);

  await ClosingConnectionWithDataBase();
}

//Function that get Newperson that not exist in data base and create new document for him
async function CreateNewPersonInDataBase(NewPerson) {
  await ConnectToDataBase();

  //Add the NewPerson
  const newAddedUser = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .insertOne(NewPerson);

  await ClosingConnectionWithDataBase();
}

//Function that get person that not exist in data base and add him to data base

/////////////////////////////////////////////////

//function that add new valid user to data base
async function addValidPersonToDataBase(personToAdd) {
  await ConnectToDataBase();

  const newAddedUser = await client
    .db("RememberUs-DataBase")
    .collection("signedUsers")
    .insertOne(personToAdd);

  await ClosingConnectionWithDataBase();
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
  DeletePersonFromsignedUsersCollection: DeletePersonFromsignedUsersCollection,
  GetAllDocumentsFromsignedUsersCollection:
    GetAllDocumentsFromsignedUsersCollection,
  UpdatePersonInDataBase: UpdatePersonInDataBase,
  CreateNewPersonInDataBase: CreateNewPersonInDataBase,
};
