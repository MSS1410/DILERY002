const mongoose = require('mongoose')

const ExhibitionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  organizadores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  expositores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  ubicacion: { type: String, required: false }
})

module.exports = mongoose.model('Exhibition', ExhibitionSchema)
