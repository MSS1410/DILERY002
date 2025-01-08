const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isAdmin } = require('../../middlewares/admin')

const userSchema = new mongoose.Schema(
  {
    nombre: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 8
    },
    imagen: { type: String, required: false },
    descripcion: { type: String, required: true },
    proyectos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    estudios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Studio' }],
    exposiciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exhibition' }],
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User
