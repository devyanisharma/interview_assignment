const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRouter = require('./router')
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const mongoose = require('mongoose')
const username = encodeURIComponent("user");
const password = encodeURIComponent("password");
const mongo_server = "localhost:27017";
const authMechanism = "DEFAULT";
const dbName = "usersInfo_db"
const uri = `mongodb://${username}:${password}@${mongo_server}/?authMechanism=${authMechanism}`;
mongoose.connect(uri,{authMechanism:authMechanism,dbName:dbName}).then(()=>{
    console.log('mongodb connected')

}).catch((error)=>{
    console.log(error)
})


app.use('/api',userRouter)
app.listen(3001,()=>{
    console.log("listening to server")
})