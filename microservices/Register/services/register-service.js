const { saveUserToDatabase, emailExists, findAllUsers } = require("../dao/user-dao");
const jwt = require("jsonwebtoken");
const winston = require('winston');

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

const register = async (req, res) => {  

  const checkEmail = await emailExists(req.body.email)

  if(checkEmail != null) {
    //res.redirect('./?e=' + encodeURIComponent('Ta e-pošta je že v uporabi'));
    console.log("Ta e-pošta je že v uporabi")
    res.status(500).json({'error': 'Ta e-pošta je že v uporabi'})
    logger.info(`500 || Ta e-pošta je že v uporabi`);
  } else {
    if(req.body.password != req.body.repPassword) {
      //res.redirect('./?e=' + encodeURIComponent('Gesli se ne ujemata'));
      console.log("Gesli se ne ujemata")
      res.json({'error': 'Gesli se ne ujemata'})
      logger.info(`500 || Gesli se ne ujemata`);

    } else {
      try {
        const user = await saveUserToDatabase(req.body.username, req.body.email, req.body.password)
        const token = jwt.sign(
          { user_id: req.body.username},
          "test",
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;
        res.status(200).json({"success": user, 'token': token})
        logger.info(`200 || Uspešna registracija`);
        //res.redirect('../login');
      } catch (e) {
        res.status(500)
        console.log(e)
        res.send("Prišlo je do napake med registracijo");
        //res.render('register', { napaka : "Pri registraciji je prislo do napake" });
      }

    }
  }
}

const getAll = async (req, res) => {
  try {
    const allUsers = await findAllUsers();
  
    let json = [];
    for (const users of allUsers) {
  
        json.push({
            id : users.id,
            username : users.username,
            email: users.email,
            password : users.password,
        });
    }
  
    res.json(json);
  } catch (e) {
    res.status(500)
        .json({
        "error" : `Prišlo je do napake pri pridobivanju vseh uporabnikov - error: ${e}`
    });
  }
}

module.exports = {register, getAll};