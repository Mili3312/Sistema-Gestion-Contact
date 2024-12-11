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
const getContactById = async (req, res) => {
    try {
        const {id} = req.params;

        const contact = await Contact.findById(id)

        if (!contact) {
            return res.status(404).json({message:"contact not found"})
        }
        res.status(200).json(contact)
    } catch (err) {
        res.status(500).json({message: "Error fetching contact", error: err.message})
    }
}

const updateContact = async (req,res) => {
    try {
        const {id} = req.params
        const datos = req.body

        const contact = await Contact.findByIdAndUpdate(id, datos, {
            new: true,
            runValidators:true
        });

        if (!contact) {
            return res.status(404).json({message:"contact not found"})
        }
        res.status(200).json(contact)
    } catch (err) {
        res.status(500).json({message:"Error update contact", error:err.message})
    }
}
const deleteContact = async (req,res)=>{
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndDelete(id);

        if (!contact) {
            return res.status(404).json({message:"Contact not found"})
        }
        res.status(200).json({message:"Contact delete successfully"})
    } catch (err) {
        res.status(500).json({message:"Error delete contact", error:err.message})
    }
}
module.exports={
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
}

