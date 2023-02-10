const users = require("./userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (request, response) => {
  try {
    const newUser = await users.create(request.body);
    const token = jwt.sign({user_ID: newUser.user_ID}, process.env.SECRET_KEY);//creates the token using the secret key
    response.status(201).send({msg: "createUser has created the following token", token});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.listUsers = async (request,response) => {
  try {
    const users = await users.find({});
    response.status(218).send({Users: users});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message});
  };
};

exports.login = async (request,response) => {
  try {
    const token = jwt.sign({user_ID: request.users.user_ID},process.env.SECRET_KEY);
    response.send({users: request.users.username, token});
  } catch (error) {
    console.log(error);
    response.status(401).send({error: error.message})
  };
};

exports.updatedEmail = async (request,response) => {
  try {
    //code with update/replace user email goes here
    const updatedEmail = await users.updateOne(
      {username: request.body.username}, {email: request.body.email}
    );
  response.status(200).send({message:"Success",updatedEmail})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.deleteUser = async (request,response) => {
  try {
    const delUser = await users.deleteOne(
      {username: request.body.username}
    ); 
  response.status(200).send({message:"Deleted",delUser})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};