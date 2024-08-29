/*const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos');

const express = require('express');
const mongoose = require('mongoose');

//Conexión a la base de datos mongoDB
mongoose.connect('mongodb+srv://lozanojordan13:lFx2ejsx18JTbYCJ@nodejslabserver.nlhjm.mongodb.net/?retryWrites=true&w=majority&appName=nodeJsLabServer')
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));


// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// end points (recursos)
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);

const port = process.env.PORT || 8085;
app.listen(port, () => {
  console.log('Api REST ejecutandose correctamente');
})