const { Router } = require('express')
const database = require('../../database/database')

const router = Router()

router.get('/', async (req, res) => {
  const employees = (await database.employee.findMany({
    include: {
      user: true
    }
  })).map(e => ({ ...e, ...e.user, id: e.id, user: undefined, userId: undefined }))
  res.json(employees)
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const e = await database.employee.findFirst({
    where: {
      id
    },
    include: {
      user: true
    }
  })
  res.json(({ ...e, ...e.user, id: e.id, user: undefined, userId: undefined }))
})

router.post('/', async (req, res) => {
  const { email, password } = req.body
  try {
    const employee = await database.employee.create({
      data: {
        user: {
          create: {
            email,
            password,
            role: 'employee'
          }
        }
      }
    })
    res.json(employee)
  } catch (err) {
    res.status(500).json({ message: 'server error' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const employee = await database.employee.delete({
      where: {
        id
      }
    })
    res.json(employee)
  } catch (err) {
    res.status(500).json({ message: 'server error' })
  }
})

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const { salary, role } = req.body
  try {
    await database.employee.update({
      where: {
        id
      },
      data: {
        salary
      }
    })

    await database.user.update({
      where: {
        employee: {
          id
        }
      },
      data: {
        role
      }
    })

    res.json(employee)
  } catch (err) {
    res.status(500).json({ message: 'server error' })
  }
})

router.get('/get-salary', async (req, res) => {
  const { employeeId } = req.body

  const employee = await database.employee.findFirst({
    where: {
      id: employeeId
    }
  })

  if (!employee) {
    res.json({ message: 'employee not found' })
    return
  }

  const records = await database.record.findMany({
    where: {
      AND: [
        {
          employeeId
        },
        {
          OR: [
            {
              absent: false
            },
            {
              AND: [
                {
                  absent: true
                },
                {
                  justified: true
                }
              ]
            }
          ]
        }
      ]
    }
  })

  if (!records.length) {
    res.json({ message: 'I dont work this month' })
    return
  }
  const salaryByHour = 2200
  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const salary = records.reduce((acum, record) => {
    const recordMonth = parseInt(record.date.split('/')[1])
    const recordYear = parseInt(record.date.split('/')[2])
    if (recordMonth !== month || recordYear !== year) {
      return acum
    }
    const start = parseInt(record.income.split(':')[0])
    const end = parseInt(record.exit.split(':')[0])
    const extras = record.extras
    return acum + ((end - start) + extras) * salaryByHour
  }, 0)
  res.json({ salary })
})

router.post('/add-project', async (req, res) => {
  const { employeeId, projectId } = req.body
  try {
    await database.employeeProject.create({
      data: {
        employeeId,
        projectId
      }
    })
    await database.employee.update({
      where: {
        id: employeeId
      },
      data: {
        available: false
      }
    })
    res.json({ message: 'success' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'error' })
  }
})

router.post('/add-performance', async (req, res) => {
  const { employeeId, projectId } = req.body
  try {

    res.status(200).json({ message: 'success' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'error' })
  }
})

router.post('/add-training', async (req, res) => {
  try {
    const employee = {}
    res.json(employee)
  } catch (err) {
    res.status(500).json({ message: 'server error' })
  }
})

module.exports = router