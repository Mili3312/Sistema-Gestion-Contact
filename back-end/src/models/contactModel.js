const mongoose = require('mongoose');

//esquema de contacto

const contactSchema = new mongoose.
Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:String, require: true},
    address:{type:String, require: true},
    birthDate:{type:Date, require: true},

},
{timestamps: true}
);

module.exports=mongoose.model('Contact', contactSchema);