const mongoose = require('mongoose');

//esquema de contacto
const contactSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:String, required: true},
    address:{type:String, required: true},
    birthDate:{type:Date, required: true},
});

module.exports=mongoose.model('Contact', contactSchema);