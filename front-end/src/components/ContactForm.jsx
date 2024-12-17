import React, { useEffect } from 'react';
import { useState } from "react";

const ContactForm = ({onContactAdded, onContactEdited, editingContact}) => {
  //Estado para los campos del form
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [phone, setPhone]= useState('');
  const [address, setAddress]= useState('');
  const [birthDate, setBirthDate]= useState('');
  const [errors, setErrors]= useState({});
  const [isLoading, setIsLoading]= useState(false);


  useEffect(()=>{
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
      setAddress(editingContact.address);
      setBirthDate(editingContact.birthDate);
    }
  }, [editingContact])


  /**manejo del envio del form - validaciones de datos */
  const handleSubmit=async (e) => {
    e.preventDefault();

    let formErrors={};

    if (!name) {
      formErrors.name='Name is required';
    }
    if (!email) {
      formErrors.email='Email is required';
    }
    if (!phone) {
      formErrors.phone='Phone is required';
    }
    if (!address) {
      formErrors.address='Address is required';
    }
    if (!birthDate) {
      formErrors.birthDate=' BirthDate is required';
    }

    const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?\d{10,15}$/;

    if (email && !emailPattern.test(email)) {
      formErrors.email = 'Email is not valid'
    }
    if (phone && !phonePattern.test(phone)) {
      formErrors.phone = 'Phone is not valid'
    }

    if (Object.keys(formErrors).length>0) {
      setErrors(formErrors);
      return;
    }
    setIsLoading(true)
    
    try{
      let response;
      if (editingContact) {
        //EDITAR CONTACTO
        response = await fetch(`http://localhost:5000/contacts/${editingContact._id}`, {
          method:'PUT',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({name, email, phone, address, birthDate}),
        });
        
      }else{
        //CREAR NUEVO CONTACTO
        response = await fetch('http://localhost:5000/contacts', {
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({name, email, phone, address, birthDate}),
        });
      }

      const data=await response.json()

      if (response.ok) {
        if (editingContact) {
          onContactEdited(data)
        }else{   
          onContactAdded(data)
        }

        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setBirthDate('');
        setErrors({});
      }else{
        setErrors({global: data.message || 'an unexpected error occurred'})
      }
    }catch(err){
      console.log('Error during submission: ', err)
      setErrors({global: 'Please try again later'})
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div className='max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md'>
      <h2>{editingContact ? 'Editar Contacto':'Nuevo contacto'}</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor="name" className='block text-lg'>Nombre</label>
          <input type="text" id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='w-full p-2 border rounded' placeholder='nombre completo' />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className='block text-lg'> Correo electronico</label>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 border rounded' placeholder='correo electrónico' />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className='block text-lg'> Teléfono </label>
          <input type="text" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className='w-full p-2 border rounded' placeholder='Número de teléfono' />
          {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="address" className='block text-lg'> Dirección </label>
          <input type="text" name="address" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} className='w-full p-2 border rounded' placeholder='Dirección' />
          {errors.address && <p className='text-red-500'>{errors.address}</p>}
        </div>

        <div>
          <label htmlFor="birthDate" className='block text-lg'> fecha de nacimiento</label>
          <input type="date" name="birthDate" id="birthDate" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} className='w-full p-2 border rounded'  />
          {errors.birthDate && <p className='text-red-500'>{errors.birthDate}</p>}
        </div>

        {errors.global && <p className='text-red-500'>{errors.global}</p>}

        <div className='mt-4'>
          <button className='w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400'disabled={isLoading}>

{isLoading ? 'guardando.... ' : editingContact ? 'Actualizar Contacto' : 'Agregar contacto'}

          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
