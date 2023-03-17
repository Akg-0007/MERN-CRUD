import express from 'express';
import dotenv from 'dotenv'
import connection from './database/db.js'; 
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/route.js'
const app=express();
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
 app.use('/', Routes);
const PORT=8000;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
connection(username,password);
app.listen(PORT,()=>console.log("s is run"))