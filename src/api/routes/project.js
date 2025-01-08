const express = require('express')
const { isAdmin } = require('../../middlewares/admin')

const {
  createProject,
  getFullProjects,
  getProjectsById,
  actuProject,
  noMoreProject
} = require('../controllers/project')
const { isAuth } = require('../../middlewares/auth')

const router = express.Router()

//create Proshecto

router.post('/', isAuth, createProject)

// obtener proyectos

router.get('/', getFullProjects)

//Proyecto x Id

router.get('/:id', getProjectsById)

// act

router.put('/:id', isAuth, actuProject)

//noMoreProject

router.delete('/:id', isAuth, isAdmin, noMoreProject)

module.exports = router
