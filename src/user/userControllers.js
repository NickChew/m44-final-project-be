const users = require("./userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (request, response) => {
  try {
    const newUser = await users.create(request.body);
    const token = jwt.sign({user_ID: newUser.user_ID}, process.env.SECRET_KEY);//creates the token using the secret key
    response.status(201).send({token:token});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.listUsers = async (request,response) => {
  try {
    const tempusers = await users.findAll({});
    response.status(218).send({users: tempusers});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message});
  };
};

exports.login = async (request,response) => {
  try {
    const getuser = await users.findOne({where: {userName: request.body.userName}});
    const getuserID = getuser.user_ID
    const token = jwt.sign({user_ID: getuserID},process.env.SECRET_KEY);
    response.send({token: token, user: getuser});
  } catch (error) {
    console.log(error);
    response.status(401).send({error: error.message})
  };
};

exports.updatedEmail = async (request,response) => {
  try {
    const updatedEmail = await users.update(
      {email: request.body.email}, {where: {userName: request.body.userName}}
    );
  response.status(200).send({msg:"Success"})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.deleteUser = async (request,response) => {
  try {
    const delUser = await users.destroy({where: {userName: request.body.userName}}); 
  response.status(200).send({msg:"Deleted"})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};