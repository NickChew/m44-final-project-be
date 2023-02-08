const User = require("./userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (request, response) => {
  try {
    const newUser = await User.create(request.body);
    const token = jwt.sign({_id: newUser._id}, process.env.SECRET_KEY);//creates the token using the secret key
    response.status(201).send({msg: "createUser has created the following token", token});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.listUsers = async (request,response) => {
  try {
    const users = await User.find({});
    response.status(218).send({user: users});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message});
  };
};

exports.login = async (request,response) => {
  try {
    const token = jwt.sign({_id: request.user._id},process.env.SECRET_KEY);
    response.send({user: request.user.username, token});
  } catch (error) {
    console.log(error);
    response.status(401).send({error: error.message})
  };
};

exports.updatedEmail = async (request,response) => {
  try {
    //code with update/replace user email goes here
    const updatedUser = await User.updateOne(
      {username: request.body.username}, {email: request.body.email}
    );
  response.status(200).send({message:"Success",updatedUser})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.deleteUser = async (request,response) => {
  try {
    const delUser = await User.deleteOne(
      {username: request.body.username}
    ); 
  response.status(200).send({message:"Deleted",delUser})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};