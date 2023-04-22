const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '/public')));

const registerRouter = require("./routes/register-router")
const reserveDogRouter = require("./routes/reserve-dog-router")
const reservationDateRouter = require("./routes/reservation-date-router")
app.use('/register', registerRouter)
app.use('/reserveDog', reserveDogRouter)
app.use('/reservationDate', reservationDateRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

module.exports = app;