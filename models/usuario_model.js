const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    password: {
            type: String,
            required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        required: false
    },
    cursos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso'
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);