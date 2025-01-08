const express = require('express')
const { isAdmin } = require('../../middlewares/admin')

const {
  createExpo,
  getFullExpo,
  getExpoId,
  actuExpo,
  noMoreExpo
} = require('../controllers/exhibition')
const { isAuth } = require('../../middlewares/auth')
const { is } = require('express/lib/request')

const router = express.Router()

//create
router.post('/', isAuth, createExpo)

// getFull
router.get('/', getFullExpo)

//ID
router.get('/:id', getExpoId)

//act

router.put('/:id', isAuth, actuExpo)
//delete

router.delete('/:id', isAuth, isAdmin, noMoreExpo)

module.exports = router
