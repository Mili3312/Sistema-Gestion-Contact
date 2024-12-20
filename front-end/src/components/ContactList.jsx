import React from 'react'
import ContactCard from "./ContactCard";

//renderizo lista de contactos
const ContactList = ({ contacts, onEdit, onDelete }) => {

  if (!contacts || contacts.length === 0) {
    return <p className='text-center text-gray-600'>No hay contactos disponibles</p>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default ContactList
