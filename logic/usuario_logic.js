const { response } = require('express');
const Usuario = require('../models/usuario_model');


//Funcion asincrona para crear un objeto de tipo usuario
async function crearUsuario(body){
    let usuario = new Usuario({
        email       : body.email,
        nombre      : body.nombre,
        password    : body.password
    });
    let usuarioExistente = await Usuario.findOne({ email: usuario.email });
    if(usuarioExistente){
        console.log('El usuario ingresado ya existe.');
    } else {
        return await usuario.save();
    }
}


//Funcion asincrona para editar un objeto de tipo usuario
async function actualizarUsuario(email, body){
    let usuario = await Usuario.findOneAndUpdate({ "email": email }, {
        $set: {
            nombre: body.nombre,
            password: body.password
        }
    }, {new: true});
    return usuario;
}


//Funcion asincrona para inactivar un usuario
async function desactivarUsuario(email){
    let usuario = await Usuario.findOneAndUpdate({"email": email}, {
        $set: {
            estado: false
        }
    }, {net: true});
    return usuario;
}


//Funcion asincrona para listar todos los usuarios activos
async function listarUsuarioActivos(){
    let usuarios = await Usuario.find({ "estado": true });
    return usuarios;
}


module.exports = {
    crearUsuario,
    actualizarUsuario,
    desactivarUsuario,
    listarUsuarioActivos
}