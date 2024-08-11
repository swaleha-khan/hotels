const mongoose = require("mongoose");

//Define url of mongo db

 //const mongoUrl = 'mongosb://localhost:27017/mydatabase'  replace database with your db name
//const mongoURL = 'mongodb://localhost:27017/hotels';
//  const mongoURL = "mongodb+srv://swaleha:swaleha@cluster0.eay9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

 const mongoURL =process.env.MONGODB_URL;
//Set up mongoDb connection
mongoose.connect(mongoURL , {
  useNewUrlParser : true,
  useUnifiedTopology : true
});
//Get the default connection object representing the mongoDB connection

const db = mongoose.connection;
 // isi db se node and mongo mei connection establish hoga

 //Define event listeners

 db.on('connected' , () =>{
console.log("Connected to the mongoDb server");
});

 db.on('error' , (err) =>{
  console.log("MongoDb connection error" , err);
  })
   db.on('disconnected' , () =>{
    console.log("Disconnected to the mongoDb server");
  })

  //Export the db connection

  module.exports = db;