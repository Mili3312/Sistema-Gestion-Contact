import React from 'react'
import { useState } from "react";

const ContactCard = ({contact, onEdit}) => {
    const [showDetails, setShowDetails]= useState(false)

    //cambio de estado Mostrar o no los detalles
    const handleToggleDetails = ()=>{
        setShowDetails(prevState=>!prevState);
    }
  return (
    <div className='border p-4 rounded-lg shadow-lg bg-white mb-4'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center'>
        <img className='w-12 h-12 rounded-full bg-gray-300 mr-4' src="" alt="avatar" />
        </div>
        <div>
          {/**nombre y correo electronico */}
            <strong className='block text-lg font-semibold' >{contact.name}</strong>
            <span className='text-gray-500 text-sm'>{contact.email}</span>
        </div>
      </header>

{/**mostrar u ocultar detalles */}
      <aside className='flex space-x-4'>
        <button className='text-blue-500 font-bold text-xl hover:text-blue-700' onClick={handleToggleDetails}>
            {showDetails ? "▲" : "▼"}
        </button>
        <button onClick={()=> onEdit(contact)} className='text-green-500 hover:text-green-700'>
        ✏️
        </button>
      </aside>
 
 {/**detalles del contacto */}
      {showDetails &&(
        <div className='mt-4 space-y-2'>
            <p className='text-gray-700'> 📞 phone: {contact.phone || "no disponible"}</p>
            <p className='text-gray-700'> 🏠 address: {contact.address || "no disponible"}</p>
            <p className='text-gray-700'> 🎂 birthDate: {contact.birthDate || "no disponible"}</p>
        </div>
      )

      }
    </div>
  )
}

export default ContactCard
