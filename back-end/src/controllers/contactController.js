const Contact = require('../models/contactModel')


const  getAllContacts = async (req, res)=>{
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}
const  createContact = async (req, res) => {
     try {
        const {name, email, phone, addres, birthDate} = req.body
        const newContact = Contact({name, email, phone, addres, birthDate})
        await newContact.save()
        res.status(201).json(newContact)
     } catch (err) {
        res.status(400).json({error: err.message});
     }
}

module.exports={
    getAllContacts,
    createContact
}