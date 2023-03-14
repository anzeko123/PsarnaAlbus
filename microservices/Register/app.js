const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
require('./initDB');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))

const loginRouter = require("./routes/login-router")
const registerRouter = require("./routes/register-router")
app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.get('/', (req, res) => {
    res.render('./index');
});
app.get('/register', (req, res) => {
        res.render('./register');
});
app.get('/login', (req, res) => {
    res.render('./login');
});


//definiramo swagger - ime operacije in kje se nahaja ta operacija oz. operacije
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'New News API',
            version: '1.0.0',
        }
    },
    apis: ['app.js', './services/login-router.js', './services/register-router.js']
}

//definiramo swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions)
//zdaj je potrebno še providati ta route v swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

//prvo damo operacijo, potem kateri url naslov je, definiramo metodo
/**
 * @swagger
 * /register/getAll:
 *  get:
 *      description: Get all users
 *      responses: 
 *          200:
 *              description: Success
 *      
 */
/**
 * @swagger
 * /register/post:
 *  post:
 *      description: Register user
 *      parameters:
 *      - name: username
 *        description: User username
 *        in: formData
 *        required: true
 *        type: string
 *      - name: content
 *        description: email of User
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: password of user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: repPassword
 *        description: repeat password of user
 *        in: formData
 *        required: true
 *        type: string
 *      responses: 
 *          201:
 *              description: Created
 *      
 */
/**
 * @swagger
 * /login/deleteUser/{id}:
 *  delete:
 *      description: delete user from database
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: The user ID
 *      responses: 
 *          200:
 *              description: User deleted
 *      
 */
/**
 * @swagger
 * /login/post:
 *  post:
 *      description: Login User
 *      parameters:
 *      - name: username
 *        description: User username
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: password of user
 *        in: formData
 *        required: true
 *        type: string
 *      responses: 
 *          201:
 *              description: Logged in
 *      
 */



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

module.exports = app;


/*
//const fetch = require('node-fetch');
const session = require('express-session')
//const cookieParser = require("cookie-parser");

//app.set('views', path.join(__dirname, '../../frontend/register/views'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
require('./initDB');

app.use(cors());
//app.use(cookieParser())
//app.use(session({
//    secret: 'secret',
//      resave: false,
//      saveUninitialized: true,
//    maxAge: 3000,
//  }))


app.use(express.json());
app.use(express.urlencoded());
//app.use(express.static(path.join(__dirname, '../../frontend/register/public')));
*/
