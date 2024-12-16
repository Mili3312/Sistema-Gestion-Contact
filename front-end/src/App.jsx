import React, { useState, useEffect } from 'react'
import  ContactList  from "./components/ContactList";
import ContactForm from './components/ContactForm';

const App = () => {

  const [contacts, setContacts]= useState([]);

  const fetchContacts = async()=>{
    try {
      const response =await fetch('http://localhost:5000/contacts')
      if (!response) throw new Error("Error al cargar los contactos");
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
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3x1 font-bold text-center mb-6'>Lista</h1>
      <ContactForm onContactAdded={handleContactAdded}/>
      <ContactList contacts={contacts}/>

    </div>
  )
}

export default App
