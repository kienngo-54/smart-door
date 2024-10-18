import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import users from "./routers/users.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors())

app.use('/api', users);

mongoose.connect(process.env.URI_MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
.then (() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log(err);
})

http: app.listen(PORT, () => {
    console.log(`Sever is running in port ${PORT}`)
})