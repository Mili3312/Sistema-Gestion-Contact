const express = require('express')
const cors = require('cors')
require('dotenv').config()
const cors =require('cors')
const connectDB=require('./src/config/db')
const contactRoutes = require('./src/routes/contactRoutes')




//conecta a la base de datos
connectDB();


const app=express();
app.use(cors());

//definir rutas para manejar los contactos

app.use(express.json());
//definir rutas para manejar los contactos
app.use('/contacts', contactRoutes);

//puerto en el que el servidor escuchará
const PORT = process.env.PORT ?? 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})