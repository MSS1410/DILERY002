const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  valoraciones: [Number],
  comentarios: [String],
  fechaPubli: { type: Date, required: true },
  estudio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Studio',
    required: true
  },
  exposiciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exhibition' }],
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Project', ProjectSchema)
