const { Router } = require('express')
const utilities = require('../../utilities/utilities')

const router = Router()

router.get('/', (req, res) => {
  const { role } = req.cookies
  if (!role || !utilities.validRole(role) || role === 'client') {
    res.sendFile(utilities.page('index'))
  } else {
    res.sendFile(utilities.page(role))
  }
})

router.get('/login', (req, res) => {
  res.sendFile(utilities.page('login'))
})

router.get('/profile', (req, res) => {
  const cookies = req.cookies
  if (!cookies.role || !utilities.validRole(cookies.role)) {
    res.redirect(utilities.go('login'))
  } else {
    if (cookies.role === 'client') {
      res.redirect(utilities.go('index'))
    } else {
      res.sendFile(utilities.page(cookies.role))
    }
  }
})

router.get('/employee/:id', (req, res) => {
  const cookies = req.cookies
  if (!cookies.role || !utilities.validRole(cookies.role)) {
    res.redirect(utilities.go('login'))
  } else {
    if (cookies.role !== 'manager') {
      res.sendFile(utilities.page('employee-details'))
    } else {
      res.sendFile(utilities.page('employee-details'))
    }
  }
})

router.get('/component/:id', (req, res) => {
  res.sendFile(utilities.page('component'))
})

module.exports = router