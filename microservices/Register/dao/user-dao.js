const {user} = require("../models/user.model");

const saveUserToDatabase = async (username, email, password) => {
    const userinstance = new user({
        username : username,
        email : email,
        password : password,
    });

    const insertUser = await userinstance.save();

    return insertUser;
}
const emailExists = async (email) => {

    const findEmail = await user.findOne({ email: email }).exec();

    return findEmail;
}
const findAllUsers = async () => {
    return user.find();
}
const loginUser = async (username, password) => {
    const findUser = await user.findOne({
        username: username,
        password: password
         }).exec();

    return findUser;
}
const deleteUser = async (id) => {
    const deletion = await user.deleteOne({_id: id}).exec();

    return deletion;
}
const logoutUser = async (id) => {
    const logout = await user.findOne({_id: id}).exec();

    return logout;
}
module.exports = {saveUserToDatabase, emailExists, findAllUsers, loginUser, deleteUser, logoutUser}