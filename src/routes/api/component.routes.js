const { Router } = require('express')
const database = require('../../database/database')
const utilities = require('../../utilities/utilities')

const router = Router()

router.get('/', async (req, res) => {
  const components = (await database.component.findMany()).map(c => ({...c, image: `/${c.image}`}))
  res.json(components)
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const component = await database.component.findFirst({
    where: {
      id
    }
  })
  res.json(({...component, image: `/${component.image}`}))
})

module.exports = router