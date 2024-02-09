const mongoose = require("mongoose");
const initData = require("./data.js");
const Listening = require("../models/listing.js");
const MONGO_KEY = "mongodb://127.0.0.1:27017/wanderlust";


main().then((res)=>{
    console.log("Connected to DataBase");
}).catch(err => console.log(err));

async function main(){
    mongoose.connect(MONGO_KEY);
}

const initDB = async () =>{
    await Listening.deleteMany({});
    await Listening.insertMany(initData.data);
    console.log("Data Was Initialized");
}
initDB();