const { loginUser, deleteUser, logoutUser } = require("../dao/user-dao");
//const logger = require('../middleware/logger');
//const {format, createLogger, transports} = require('winston')
//const {timestamp, combine, json, printf} = format
const winston = require('winston');
const jwt = require("jsonwebtoken");


const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const searchUser = await loginUser(username, password)
    if(searchUser != null) {
        try {
            const token = jwt.sign(
                { user_id: username },
                "test",
                {
                  expiresIn: "2h",
                }
              );
              // save user token
              searchUser.token = token;
            res.status(200).json({'user': searchUser, 'token': token});
                logger.info(`200 || Uspešna prijava`);

        } catch (e) {
            res.status(500)
            console.log(e)
            res.json({"error": "Prišlo je do napake med prijavo"})
            logger.info(`500 || Prišlo je do napake med prijavo`);
        }
    } else {
        res.json({"error": "Prijava ni uspela"})
        logger.info(`500 || Prijava ni uspela`);
    }

}

const deleteLoggedUser = async (req, res) => {
    try {
        const deletion = await deleteUser(req.params.id)
        res.json({"success": "deleted"})
        logger.info(`200 || user deleted`);
    } catch (e) {
        res.status(500)
        console.log(e)
        res.json({"error": "Prišlo je do napake med izbrisom"})
        logger.info(`500 || Prišlo je do napake med izbrisom`);
    }
}

const logout = async (req, res) => {
    try {
        const loggedOut = await logoutUser(req.params.id)
        res.json({"success": "logged out"})
        logger.info(`200 || logged Out`);
    } catch (e) {
        res.status(500)
        console.log(e)
        res.json({"error": "Prišlo je do napake med odjavo"})
        logger.info(`500 || Prišlo je do napake med odjavo`);
    }
}

module.exports = {login, deleteLoggedUser, logout};