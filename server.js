//DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");


//DATABASE CONFIGURATION
mongoose.connect(process.env.DATABASE_URL)

// MIDDLEWARE  & BODY PARSER
app.use(express.urlencoded({ extended: true }));


//ROUTES

app.get('/',(req,res)=>{
    res.send('Hello')
})



// LISTENERS
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
const PORT = process.env.PORT;
app.listen(PORT, () => {
console.log(`The server is listening on port: ${PORT}`)
})