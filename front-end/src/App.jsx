import React, { useState, useEffect } from 'react'
import  ContactList  from "./components/ContactList";
import ContactForm from './components/ContactForm';

const App = () => {

  const [contacts, setContacts]= useState([]);
  const [editContact, setEditContact]=useState(null)
 const [showForm, setShowForm]= useState(false)
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
  };

  const toggleForm=()=>{
    setShowForm((prevState)=> !prevState)
  }
  return (
    <div className='min-h-screen bg-pink-50'>
    <div className='container mx-auto p-4'>
      <h1 className='text-3x1 font-bold text-center mb-6 text-teal-600'>Lista de contactos</h1>

{/**mostrar/ocultar formulario */}
      <button onClick={toggleForm} className='bg-teal-600 text-white px-4 py-2 rounded-lg mb-4'>
        {showForm ? 'cerrar formulario' : 'Agregar nuevo contacto'}
      </button>

{showForm && ( 
  <ContactForm onContactAdded={handleContactAdded}
  onContactEdited={handleContactEdited}
  editingContact={editContact}/>
)}

      <ContactList contacts={contacts} onEdit={setEditContact} onDelete={handleContactDeleted}/>

    </div>
      </div>
  )
}

export default App
