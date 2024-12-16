import React from 'react'
import { useState } from "react";

const ContactCard = ({contact}) => {
    const [showDetails, setShowDetails]= useState(false)

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
            <strong className='block text-lg font-semibold' >{contact.name}</strong>
            <span className='text-gray-500 text-sm'>{contact.email}</span>
        </div>
      </header>

      <aside>
        <button className='text-blue-500 font-bold text-xl hover:text-blue-700' onClick={handleToggleDetails}>
            {showDetails ? "▲" : "▼"}
        </button>
      </aside>

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
