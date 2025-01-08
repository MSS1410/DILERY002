const mongoose = require('mongoose')
const Project = require('../api/models/project')

mongoose
  .connect(
    'mongodb+srv://admin:2xPK0e2nULveJR8y@cluster003iidilery.my8zb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster003IIDILERY'
  )
  .then(async () => {
    console.log('Conectado a MongoDB')
    const projects = await Project.find({})
    console.log('Proyectos mongo:', projects)
    mongoose.disconnect()
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error)
  })
