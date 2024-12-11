const contact = require('../models/contactModel')


const  gateAllContacts = async (req, res)=>{
    try {
        const contacts = await contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}