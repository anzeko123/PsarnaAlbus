const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://anzekozole:OZoe4OyfBD4sP6xb@cluster0.43yygni.mongodb.net/?retryWrites=true`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error: "));
conn.once("open", function () {
  console.log("Connected successfully");
});

module.exports = conn;
