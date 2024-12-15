import React, { useEffect, useState } from 'react'
import { ContactCard } from "./ContactCard";
const ContactList = () => {

  const [contacts, setContacts]= useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]=useState(null)

  useEffect(()=>{
    fetch('http://localhost:5000/contacts')
    .then((response)=>{
      if (!response.ok) {
        throw new Error('Error al intentar obtener los contactos')
      }
      return response.json();
    })
    .then((data)=>{
      setContacts(data);
      setLoading(false)
    })
    .catch((error)=>{
      setError(error.message);
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <p>cargando contactos...</p>;    
  }
  if (error) {
    return p
  }
  return (
    <div className='contact-list'>
      {contacts.map((contact)=>(
        <ContactCard key={contact._id} contact={contact}/>
      ))}
    </div>
  )
}

export default ContactList
