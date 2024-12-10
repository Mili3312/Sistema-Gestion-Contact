const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:Number, require: true},
    addres:{type:String, require: true},
    birthDate:{type:Number, require: true},
});

module.exports=mongoose.model('Contact', contactSchema);