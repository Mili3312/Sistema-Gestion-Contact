const mongoose = require('mongoose')

//conexión base de datos
const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        //si la conexión es exitosa
            console.log(`MongoDB Connected: ${connect.connection.host}`)
    }catch (err){
        //si la conexión falla
           console.error(`Error: ${err.message}`)
           process.exit(1)
    }
}
module.exports=connectDB