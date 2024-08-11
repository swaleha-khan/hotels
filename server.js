

const express = require('express');
const app = express();
const db = require("./db")
require('dotenv').config();
const person = require("./models/Person")
const bodyParser = require("body-parser");

const MenuItem = require('./models/MenuItem')
app.use(bodyParser.json());

  const personRoutes = require("./routes/personRoutes");
  const menuRoutes = require("./routes/menuRoutes");
  app.use('/person' , personRoutes);
  app.use('/menu' , menuRoutes)
 const PORT = process.env.PORT || 3000;
app.listen(3000 , ()=>{
  console.log("Listening to the port");
})