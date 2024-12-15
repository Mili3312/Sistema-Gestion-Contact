const express = require('express')
require('dotenv').config()
const cors =require('cors')
const connectDB=require('./src/config/db')
const contactRoutes = require('./src/routes/contactRoutes')


connectDB();


const app=express();
app.use(express.json());
app.use(cors()),

app.use('/contacts', contactRoutes);

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})