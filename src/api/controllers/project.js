const Project = require('../models/project')
const User = require('../models/user')
const Studio = require('../models/studio')

// crear nuevo proyecto.

const createProject = async (req, res) => {
  try {
    const { nombre, descripcion, estudio, exposiciones } = req.body
    const userId = req.user.id
    // check existencia estudio

    const checkStudio = await Studio.findById(estudio)
    if (!checkStudio) {
      return res.status(404).json({ message: 'CANT FIND STUDIO' })
    }
    //genero proyecto nuevo

    const newProject = new Project({
      nombre,
      descripcion,
      estudio,
      exposiciones,
      artist: userId,
      fechaPubli: new Date()
    })
    const savedProject = await newProject.save()
    // enlazare el proyecto con el usuario y el estudio en cuestion
    await User.findByIdAndUpdate(userId, {
      $push: { proyectos: savedProject._id }
    })
    await Studio.findByIdAndUpdate(estudio, {
      $push: { obras: savedProject._id }
    })
    // ok json
    return res
      .status(201)
      .json({ message: 'OK LOAD PROJECT ', project: savedProject })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: ' CREATION NOT OK' })
  }
}

//obtenr todos los proyectos

const getFullProjects = async (req, res) => {
  try {
    const allProjects = await Project.find()
      .populate('artist', 'nombre email') // reemplazo el ID del artista por sus campos nombre email
      //Busca el documento completo de la cole User con el ObjectId almacenado en artist
      //Solo devuelve los campos nombre y email
      .populate('estudio', 'nombre ubicacion')
      // busco docu cmpleto en cole Studio y saco respuesta nombre y ubi, es solo para no devolver datos de mas
      .populate('exposiciones', 'nombre ubicacion')

    return res.status(200).json(allProjects)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'NO OK FULL PROJECTS' })
  }
}

// proyecto x ID

const getProjectsById = async (req, res) => {
  try {
    const { id } = req.params
    const projectId = await Project.findById(id) // aqui buscaremos uno especifico por ID aplico igual
      // el popu y solo saco lo que me interesa
      .populate('artist', 'nombre email')
      .populate('estudio', 'nombre ubicacion')
      .populate('exposiciones', 'nombre ubicacion')
    if (!projectId) {
      return res.status(404).json({ message: 'NO OK FIND BY ID' })
    }
    return res.status(200).json(projectId)
  } catch (error) {
    return res
      .status(500)
      .json({ message: `NO OK SHOW PROJECT:${error.message}` })
  }
}

//actualizar proyecto

const actuProject = async (req, res) => {
  try {
    const { id } = req.params
    const actProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!actProject) {
      return res.status(404).json({ message: 'NO OK FIND PROJECT' })
    }
    return res
      .status(200)
      .json({ message: 'OK ACT PROJECT', project: actProject })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'NO OK ACT PROJECT' })
  }
}

// DELETEEE

const noMoreProject = async (req, res) => {
  try {
    const { id } = req.params
    const elimProject = await Project.findByIdAndDelete(id)
    if (!elimProject) {
      return res.status(404).json({ message: 'NO OK FIND PROJECT' })
    }
    //metodo $pull elimina valor especifico de un array en MongoDB
    // debo elminarlo de sus relacionados
    await User.findByIdAndUpdate(elimProject.artist, {
      $pull: { proyectos: elimProject._id }
      // metodo pull para asegurarme de que en mis referencias los cambios tamvbien se han realizado,
      // para eliminarlo de otras colecciones //elimProject.artist = busca al usuario asociado al proyecto y elimina el ID del proyecto de su arrat proyectos
    })
    await Studio.findByIdAndUpdate(elimProject.estudio, {
      $pull: { obras: elimProject._id }
      //busca studio asociado a id de elimPrject, y elimina Id de array obras
    })
    return res
      .status(200)
      .json({ message: 'OK DELETE PROECT', project: elimProject })
    // dentro del campo project devolvere el proyecto Eliinado.
    // podria enviarlo nomral pero asi le pongo mensajito sae
  } catch (error) {
    return res.status(500).json({ message: 'NO OK DELETIN PROJECT' })
  }
}

module.exports = {
  createProject,
  getFullProjects,
  getProjectsById,
  actuProject,
  noMoreProject
}
