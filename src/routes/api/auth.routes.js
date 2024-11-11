const { Router } = require('express')
const database = require('../../database/database')
const utilities = require('../../utilities/utilities')

const router = Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await database.user.findFirst({
    where: {
      email
    }
  })
  if (!user || user.password !== password) {
    res.redirect(utilities.go('login'))
  } else {
    const role = user.role
    if (!role) {
      res.redirect(utilities.go('login'))
    } else {
      res.cookie('role', role)
      if (role === 'client') {
        res.redirect(utilities.go('index'))
      } else {
        res.redirect(utilities.go('profile'))
      }
    }
  }
})

router.post('/employee/register', async (req, res) => {
  const { email, password } = req.body

  const user = await database.user.findFirst({
    where: {
      email
    }
  })

  if (!user || user.password !== password) {
    res.redirect(utilities.go('login'))
  } else {
    const role = user.role
    if (!role) {
      res.redirect(utilities.go('login'))
    } else {
      res.cookie('role', role)
      res.redirect(utilities.go(role))
    }
  }
})

router.post('/logout', async (req, res) => {
  res.cookie('role', '', {
    expires: new Date(0)
  })
  res.json({ message: 'ok' })
})

module.exports = router