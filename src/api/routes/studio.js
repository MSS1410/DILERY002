const express = require('express')
const { isAdmin } = require('../../middlewares/admin')

const {
  createStudio,
  getFullStudios,
  actStudio,
  noMoreStudio,
  getStudioId
} = require('../controllers/studio')

const { isAuth } = require('../../middlewares/auth')

const router = express.Router()

// create
router.post('/', isAuth, createStudio)

//getfull
router.get('/', getFullStudios)

//act
router.put('/:id', isAuth, actStudio)

//delete
router.delete('/:id', isAuth, isAdmin, noMoreStudio)

// by ID

router.get('/:id', getStudioId)

module.exports = router
