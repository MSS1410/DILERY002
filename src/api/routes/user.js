const express = require('express')
const {
  register,
  deleteUser,
  actuUser,
  getUsers,
  login,
  getUserId,
  noMoreUser,
  cambioRole
} = require('../controllers/user')
const { isAuth } = require('../../middlewares/auth')
const { isAdmin } = require('../../middlewares/admin')

// instancia router

const router = express.Router()

// registro de usuario
router.post('/register', register)
//login
router.post('/login', login)

router.get('/:id', getUserId)
router.put('/:id', actuUser)
router.get('/', getUsers)
router.delete('/:id', isAuth, isAdmin, noMoreUser)
//ROL
router.put('/:id/role', isAuth, isAdmin, cambioRole)

module.exports = router
