const Contact = require('../models/contactModel')

const validateEmail = (email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone)=>/^\+?\d{10,15}$/.test(phone)


//obtener todos los contactos
const  getAllContacts = async (req, res)=>{
    try {
        const contacts = await Contact.find();
        console.log('GET/contacts : ',contacts)
        //responde con los contactos encontrados
        res.status(200).json(contacts);
    } catch (err) {
        //si ocurre un error lo muestra en consola
        console.log('GET/contacts  ERROR: ',err.message)
        res.status(500).json({error: err.message})
        
    }
}
//crear nuevo contacto
const  createContact = async (req, res) => {
     try {


        const {name, email, phone, address, birthDate} = req.body

        //valida que todos los campos estén presentes
        if(!name || !email || !phone || !address || !birthDate){
            return res.status(400).json({error: "All fields are required"})
        }

        if (!validateEmail(email)) {
            return res.status(400).json({message:' The email is not valid '})
        }

        if (!validatePhone(phone)) {
            return res.status(400).json({message:'The phone number must be 10 digits'})
        }

        const newContact = Contact({name, email, phone, address, birthDate: new Date(birthDate)})


         //guarda el contacto 

        await newContact.save()
        console.log('POST / contacts new contact created: ',newContact)
        //responde con el nuevo contacto creado
        res.status(201).json(newContact)
     } catch (err) {
        //si ocurre un error
        console.log('POST contacts -ERROR: ', err.message)
        res.status(400).json({error: err.message});
     }
}


//obtener contacto por id
const getContactById = async (req, res) => {
    try {
        const {id} = req.params;



        console.log(`GET/contacts/${id} - Contact by ID `)
//busca el contacto por su id
        const contact = await Contact.findById(id)

        if (!contact) {
            console.log(`GET/contacts/${id} - Contact not found`)
            return res.status(404).json({message:"contact not found"})
        }
        //responde con el contacto encontrado
        res.status(200).json(contact)
    } catch (err) {

          //si hay un error lo muestra en consola 
          console.log(`GET/contacts/${id} - ERROR `, err.message)
        res.status(500).json({message: "Error fetching contact", error: err.message})
    }
}

//actualizar un contacto
const updateContact = async (req,res) => {
    try {
        const {id} = req.params
        const datos = req.body

        console.log(`PUT/contacts/${id} - updating contact `, datos)


         //actualiza el contacto con el id proporcionado

        const contact = await Contact.findByIdAndUpdate(id, datos, {
            new: true,
            runValidators:true
        });

        if (!contact) {


            console.log(`PUT/contacts/${id} -contact not found`)
            return res.status(404).json({message:"contact not found"})
        }
         //responde con el contaacto actualizado

        res.status(200).json(contact)
    } catch (err) {
        //en caso de un error lo muestra en consola
        console.log(`PUT/contacts/${id} - ERROR updating contact: `, err.message)
        res.status(500).json({message:"Error update contact", error:err.message})
    }
}


//eliminar contacto
const deleteContact = async (req,res)=>{
    try {
        const {id} = req.params;
        console.log(`DELETE/ contacts / ${id}- deleting contact`)

        //elimina el contacto con el id proporcionado
        const contact = await Contact.findByIdAndDelete(id);

        if (!contact) {
            console.log(`DELETE/ contacts / ${id}- contact not found`)
            return res.status(404).json({message:"Contact not found"})
        }
        //responde con mensaje de exito
        res.status(200).json({message:"Contact delete successfully"})
    } catch (err) {
        //en caso de un error lo muestra en consola
        console.log(`DELETE/ contacts / ${id}- ERROR: `, err.message)
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

