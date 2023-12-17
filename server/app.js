import express from 'express';
import cors  from 'cors';
import dotenv from 'dotenv';
import connDB from './db/conn.js';
import authRoute from './routes/authRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import newletterRoute from './routes/newletterRoute.js';
dotenv.config();

connDB()

const app = express();
 
app.use(express.json());
app.use(cors())

// Routes
app.use('/api',authRoute);
app.use('/api',categoryRoute);
app.use('/api',newletterRoute)

app.get('/', (req,res) =>{
    res.send("This is home page");
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`This Server is Running on ${PORT}`.bgBlue.black)
})