const Exhibition = require('../models/exhibition')
const User = require('../models/user')
const Studio = require('../models/studio')

// new expo
const createExpo = async (req, res) => {
  try {
    console.log('Request body recibido:', req.body)

    const { nombre, descripcion, organizadores, expositores, ubicacion } =
      req.body

    // check nombre
    const chekExpo = await Exhibition.findOne({ nombre })
    if (chekExpo) {
      return res.status(400).json({ message: 'USE OTHER NAME' })
    }
    // crea expo

    const newExpo = new Exhibition({
      nombre,
      descripcion,
      organizadores,
      expositores,
      ubicacion
    })
    const savedExpo = await newExpo.save()
    return res.status(201).json({
      message: 'Expo Ready',
      exhibition: savedExpo
    })
  } catch (error) {
    console.error('ERROR en createExpo:', error.message)
    return res.status(500).json({ message: 'ERROR NEW EXPO' })
  }
}

// all expo

const getFullExpo = async (req, res) => {
  try {
    const expos = await Exhibition.find()
      .populate('organizadores', 'nombre email')
      .populate('expositores', 'nombre email')

    return res.status(200).json(expos)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'ERR FULL EXPOS' })
  }
}

// Id

const getExpoId = async (req, res) => {
  try {
    const { id } = req.params
    const expoId = await Exhibition.findById(id)
      .populate('organizadores', 'nombre email')
      .populate('expositores', 'nombre email')

    if (!expoId) {
      return res.status(404).json({ message: 'CANNOT FIND EXPO' })
    }
    return res.status(200).json(expoId)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'CANNOT GET BY ID' })
  }
}
// sctualizar
// const actuExpo = async (req, res) => {
//   try {
//     console.log('ID recibido:', req.params.id)
//     console.log('Body recibido:', req.body)

//     // Respuesta fija para pruebas
//     return res.status(200).json({
//       message: 'Simulación OK ACT EXPO',
//       exhibition: {
//         _id: req.params.id,
//         nombre: req.body.nombre,
//         ubicacion: req.body.ubicacion
//       }
//     })
//   } catch (error) {
//     console.error('Error en actuExpo:', error.message)
//     return res.status(500).json({ message: 'ERR ON ACT EXPO' })
//   }
// }

const actuExpo = async (req, res) => {
  try {
    console.log('ID recibido:', req.params.id)
    console.log('Body recibido:', req.body)
    const { id } = req.params
    const actuExpo = await Exhibition.findByIdAndUpdate(id, req.body, {
      new: true
    })
      .populate('organizadores', 'nombre email')
      .populate('expositores', 'nombre email')

    if (!actuExpo) {
      console.log('Exposición no encontrada')
      return res.status(404).json({ message: 'CANNOT FIND EXPO' })
    }
    console.log('Exposición actualizada:', actuExpo)
    return res.status(200).json({
      message: 'OK ACT EXPO',
      exhibition: actuExpo
    })
  } catch (error) {
    console.error('Error en actuExp', error.message)
    return res.status(500).json({ message: 'ERR ON ACT EXPO' })
  }
}

// elmiminienieniene

const noMoreExpo = async (req, res) => {
  try {
    const { id } = req.params
    const elimExpo = await Exhibition.findByIdAndDelete(id)
    if (!elimExpo) {
      return res.status(404).json({ message: 'NO FOUND EXPO' })
    }

    await User.updateMany(
      { exposiciones: elimExpo._id },
      { $pull: { exposiciones: elimExpo._id } }
    )

    await Studio.updateMany(
      { exposiciones: elimExpo._id },
      { $pull: { exposiciones: elimExpo._id } }
    )
    return res
      .status(200)
      .json({ message: 'OK DELETE EXPO', exhibition: elimExpo })
  } catch (error) {
    console.error('ERROR en noMoreExpo:', error.message)
    return res.status(500).json({ message: 'NO POSSIBLE DELETE EXPO' })
  }
}

module.exports = { createExpo, getFullExpo, getExpoId, actuExpo, noMoreExpo }
