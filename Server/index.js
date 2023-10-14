const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const bodyParser = require('body-parser');

const AuthRoute = require("./Routes/AuthRoute")
const UserRoute = require("./Routes/UserRoute")
const PostRoute = require("./Routes/PostRoute")
const UploadRoute = require("./Routes/UploadRoute")

// require('./DB/conn.js')

dotenv.config()
const app = express();

// to serve images for public
app.use(express.static('public'))
app.use('/images', express.static("images"))

app.use(express.json())
app.use(express.urlencoded())   /// use kora jabe naa
app.use(cors())


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    ()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`))
)
.catch((error)=> console.log(error.message));





app.get('/', (req, res)=> {
    res.send('Hello from Home Page');
})

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)
app.use('/upload', UploadRoute)

// app.listen(process.env.PORT, () => {
//     console.log("Server is Running >>>>", process.env.PORT)
// })


