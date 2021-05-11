const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//MongoSetup
const dbName = "userlist"
const mongoConfig =  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`, mongoConfig);

//Express setup
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});