const mongoose = require('mongoose');
const cors = require('cors')
const express = require('express')

const userRoutes = require('./routes/userRoute');
const adRoute = require("./routes/adRoute");

const app = express();
require("dotenv").config();



app.use(cors())
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/ad", adRoute);
app.use("/api/profile", userRoutes);

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log("Database Connected Succsesfully");
}).catch((error) =>{console.log(error);})


const server = app.listen(process.env.PORT, ()=> {
    console.log("Server started on port " + process.env.PORT);
})



