const Studio = require('../models/studio')
const User = require('../models/user')
const Project = require('../models/project')

// crear newwww studio

const createStudio = async (req, res) => {
  try {
    const { nombre, participantes, dueño, ubicacion, obras, exposiciones } =
      req.body
    // verifico si existe dueño
    const chekStudio = await Studio.findOne({ nombre })
    if (chekStudio) {
      return res.status(404).json({ message: 'ESTE ESTUDIO YA EXISTE' })
    }
    const newStudio = new Studio({
      nombre,
      participantes,
      dueño,
      ubicacion,
      obras,
      exposiciones
    })
    const savedStudio = await newStudio.save()
    return res.status(201).json({
      message: 'OK STUDIO CREADO',
      studio: savedStudio
    })
  } catch (error) {
    return res.status(500).json({ message: 'NO CREATE STUDIO' })
  }
}

// get it all

const getFullStudios = async (req, res) => {
  try {
    const studios = await Studio.find()
      .populate('dueño', 'nombre email')
      .populate('participantes', 'nombre email')
    return res.status(200).json(studios)
  } catch (error) {
    return res.status(500).json({ message: 'NOT GET ALL STUDIOS' })
  }
}

//studio x ID

const getStudioId = async (req, res) => {
  try {
    const { id } = req.params
    const studioId = await Studio.findById(id)
      .populate('dueño', 'nombre email')
      .populate('participantes', 'nombre email')
      .populate('obras', 'nombre descripcion')

    if (!studioId) {
      return res.status(404).json({ message: 'NO STUDIO FOUND' })
    }
    return res.status(200).json(studioId)
  } catch (error) {
    return res.status(500).json({ message: 'NO STUDIO BY ID' })
  }
}

//actualizar un estudio // NECESITARE REPASO DE CHAT DE ESTE POPULATE NEN Y DE TODOS

const actStudio = async (req, res) => {
  try {
    const { id } = req.params

    const actuStudio = await Studio.findByIdAndUpdate(id, req.body, {
      new: true
    })
      .populate('dueño', 'nombre email')
      .populate('participantes', 'nombre email')
      .populate('obras', 'nombre descripcion')

    if (!actuStudio) {
      return res.status(404).json({ message: 'STU NO FOUND' })
    }

    return res.status(200).json({ message: 'OK ACTU STU', studio: actuStudio })
  } catch (error) {
    return res.status(500).json({ message: 'ERR ACT STU' })
  }
}

// delete studio

const noMoreStudio = async (req, res) => {
  try {
    const { id } = req.params
    const elimStu = await Studio.findByIdAndDelete(id)
    if (!elimStu) {
      return res.status(404).json({ message: 'NO FOUND STUDIO' })
    }

    await User.updateMany(
      { estudios: elimStu._id },
      { $pull: { estudios: elimStu._id } }
    )
    //eliminar referencias de proyectos
    await Project.updateMany({ estudio: elimStu._id }, { estudio: null })
    return res.status(200).json({ message: 'OK DELETE STU', studio: elimStu })
  } catch (error) {
    return res.status(500).json({ message: 'NO POSIBLE DELETE STUDIO' })
  }
}

module.exports = {
  createStudio,
  getFullStudios,
  getStudioId,
  actStudio,
  noMoreStudio
}
