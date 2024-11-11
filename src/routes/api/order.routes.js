const { Router } = require('express')
const database = require('../../database/database')

const router = Router()

router.post('/', async (req, res) => {
  const { name, email, address, components } = req.body
  try {
    const order = await database.order.create({
      data: {
        name,
        email,
        address
      }
    })
    const componentsFormat = components.map(c => ({ componentId: c.id, orderId: order.id }))
    const componentsOnOrder = await database.orderComponent.createMany({
      data: componentsFormat
    })
    const newOrder = await database.order.findFirst({
      where: {
        id: order.id
      },
      include: {
        components: {
          include: {
            component: true
          }
        }
      }
    })
    res.json(({ ...newOrder, components: newOrder.components.map(c => ({ ...c.component })) }))
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'server error' })
  }
})

module.exports = router