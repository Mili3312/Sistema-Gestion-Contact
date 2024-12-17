# Sistema-Gestion-Contact
Este proyecto consiste en un Sistema de Gestión de Contactos donde los usuarios pueden agregar, editar, ver y eliminar contactos. El sistema se compone de dos partes: un backend y un frontend.

## Tecnologías
### Backend:
Node.js
Express.js
MongoDB (a través de Mongoose)
CORS (para permitir peticiones de origen cruzado)
Dotenv (para manejar variables de entorno)
Nodemon (para reiniciar automáticamente el servidor durante el desarrollo)
### Frontend:
React (a través de Vite)
Tailwind CSS (para los estilos)


## Estructura del Proyecto
### Backend

back-end
├── node_modules
├── src
│   ├── config
│   ├── db.js
│   ├── controllers
│   │   └── ContactController.js
│   ├── models
│   │   └── ContactModel.js
│   └── routes
│       └── contactRoutes.js
└── server.js
### Frontend

front-end
├── public_modules
├── src
│   ├── components
│   │   ├── ContactCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── ContactList.jsx
│   └── styles
│       └── index.css
└── App.jsx
## Backend
El backend se encarga de manejar la lógica del sistema y exponer una API RESTful para gestionar los contactos, los archivos principales:

#### Conexión a la base de datos (db.js)
Conexión a MongoDB usando Mongoose.

#### Controlador de Contactos (ContactController.js)
Este archivo contiene las funciones para manejar las operaciones CRUD: obtener, crear, actualizar, eliminar contactos.

#### Modelo de Contacto (ContactModel.js)
Define el esquema de contacto con los campos: name, email, phone, address, birthDate.


## Frontend
El frontend se encarga de mostrar los contactos en una interfaz interactiva. Los principales componentes de React son:

#### ContactCard.jsx
Muestra la información de un contacto con la opción de ver más detalles, editar o eliminar.

#### ContactForm.jsx
Formulario para agregar o editar un contacto.

#### ContactList.jsx
Muestra la lista de contactos usando ContactCard.


## Endpoints del Backend
GET /contacts: Obtiene todos los contactos.
POST /contacts: Crea un nuevo contacto.
GET /contacts/:id: Obtiene un contacto por su ID.
PUT /contacts/:id: Actualiza un contacto por su ID.
DELETE /contacts/:id: Elimina un contacto por su ID.
