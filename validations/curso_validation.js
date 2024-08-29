const Joi = require('@hapi/joi');


//Validaciones para el objeto usuario
const schema = Joi.object({
    titulo: Joi.string()
        .min(3)
        .max(30)
        .required()
        .pattern(/^[A-Za-záéíóú ]{3,30}$/),
    descripcion: Joi.string()
        .min(10)
        .max(100)
        .pattern(/^[A-Za-záéíóú ]{10,100}$/),
    alumnos: Joi.number()
        .integer()
        .min(0)
        .max(50),
    calificacion: Joi.number()
        .min(0)
        .max(5),
});

module.exports = {
    schema
}