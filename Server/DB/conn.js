const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(express.urlencoded())   /// use kora jabe naa
app.use(cors())

dotenv.config()




// mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(
//     ()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`))
// )
// .catch((error)=> console.log(error.message));


   