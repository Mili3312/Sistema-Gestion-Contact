const express= require('express');
const router = express.Router();
const contactControler= require('../controllers/contactController')

console.log('cargando rutas')
<<<<<<< HEAD
=======

>>>>>>> dev
//rutas para manejar los contactos 
router.get('/', contactControler.getAllContacts);
router.post('/', contactControler.createContact);
router.get('/:id', contactControler.getContactById);
router.put('/:id', contactControler.updateContact);
router.delete('/:id', contactControler.deleteContact)

module.exports= router