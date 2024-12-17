const mongoose = require('mongoose');

//esquema de contacto
<<<<<<< HEAD
const contactSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:String, required: true},
    address:{type:String, required: true},
    birthDate:{type:Date, required: true},
=======
const contactSchema = new mongoose.
Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:String, require: true},
    address:{type:String, require: true},
    birthDate:{type:Date, require: true},
>>>>>>> dev
},
{timestamps: true}
);

module.exports=mongoose.model('Contact', contactSchema);