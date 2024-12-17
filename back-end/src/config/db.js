const mongoose = require('mongoose')

//conexión base de datos
const connectDB = async()=>{
    try{
<<<<<<< HEAD
        const connect = await mongoose.connect(process.env.MONGO_URI);
        //si la conexión es exitosa
=======
        const connect = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            } );
             //si la conexión es exitosa
>>>>>>> dev
            console.log(`MongoDB Connected: ${connect.connection.host}`)
    }catch (err){
        //si la conexión falla
           console.error(`Error: ${err.message}`)
           process.exit(1)
    }
}
module.exports=connectDB