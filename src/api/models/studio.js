const mongoose = require('mongoose')

const StudioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  participantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dueño: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  obras: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  ubicacion: { type: String, required: false },
  exposiciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exhibition' }]
})

module.exports = mongoose.model('Studio', StudioSchema)
