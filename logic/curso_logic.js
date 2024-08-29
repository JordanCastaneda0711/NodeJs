const Curso = require('../models/curso_model');
const Usuario = require('../models/usuario_model');

//Funcion asincronica para crear cursos
async function crearCurso(body){
    let curso = await new Curso({
        titulo          : body.titulo,
        descripcion     : body.descripcion,
        alumnos         : body.alumnos,
        calificacion    : body.calificacion
    });
    let cursoExistente = await Curso.findOne({ titulo: curso.titulo})
    if(cursoExistente){
        console.log("El curso ingresado ya existe")
    } else {
    return await curso.save();
    }
}


//Funcion asincronica para actualizar cursos
async function actualizarCurso(id, body){
    let curso = await Curso.findByIdAndUpdate(id, {
        $set: {
            titulo          : body.titulo,
            descripcion     : body.descripcion,
            alumnos         : body.alumnos,
            calificacion    : body.calificacion
        }
    }, {new: true});
    return curso;
}


//Funcion asincronica para inactivar cursos
async function desactivarCurso(id) {
    let curso = await Curso.findByIdAndUpdate(id, {
        $set: {
            estado: false
        }
    }, {new: true});
    return cursos;
}


//Funcion asincronica para listar los cursos activos
async function listarCursosActivos(){
    let cursos = await Curso.find({ "estado": true});
    return cursos;
}


//Funcion asincronica para guardar una coleccion 
async function guardarCursos(cursos) {
    try{
        const resultados = [];

        for(let cursoData of cursos){
            //Verificar si ya existe un curso con el mismo titulo
            if(!cursoExistente){
                let nuevoCurso = new Cursor(cursoData);
                let cursoGuardado = await nuevoCurso.save();
                resultados.push(cursoGuardado);
            }else{
                console.log("el curso " + cursoData.titulo + " ya existe.");
            }
        }
    } catch (error) {
        console.error("Error al guardar los cursos:", error);
        throw error;
    }
}


module.exports = {
    crearCurso,
    actualizarCurso,
    desactivarCurso,
    listarCursosActivos
}