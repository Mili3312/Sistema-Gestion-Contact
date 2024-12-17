import React, { useState, useEffect } from 'react'
import  ContactList  from "./components/ContactList";
import ContactForm from './components/ContactForm';

const App = () => {

  const [contacts, setContacts]= useState([]);
  const [editContact, setEditContact]=useState(null)

  //CARGAR CONTACTOS AL SERVIDOR
  const fetchContacts = async()=>{
    try {
      const response =await fetch('http://localhost:5000/contacts')
      if (!response.ok) throw new Error("Error al cargar los contactos");
      const data =await response.json();
      setContacts(data)
    } catch (error) {
      console.error('No se pudo obtener los contactos')
    }
  };


  useEffect(()=>{
    fetchContacts()
  },[]);
  
  const handleContactAdded = (newContact)=>{
    setContacts(prevContacts =>[...prevContacts, newContact])
  }
  const handleContactEdited = (editedContact)=>{
    setContacts(prevContacts=>prevContacts.map(contact=>contact._id === editedContact._id ? editedContact :contact)
  )
setEditContact(null)

  };

  const handleContactDeleted = async (contactId) => {
    try {
      const response = await fetch(`http://localhost:5000/contacts/${contactId}`,{
        method:'DELETE'
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el contacto')
      }

      setContacts(prevContacts => prevContacts.filter(contact=>contact._id !== contactId)) //Elimina contacto del estado
    } catch (error) {
      console.log('no se pudo eliminar el contacto')
    }
  }
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3x1 font-bold text-center mb-6'>Lista</h1>
      <ContactForm onContactAdded={handleContactAdded}
      onContactEdited={handleContactEdited}
      editingContact={editContact}/>

      <ContactList contacts={contacts} onEdit={setEditContact} onDelete={handleContactDeleted}/>

    </div>
  )
}

export default App
