const database = require('../database/database')

async function createUsers() {

  console.log(await database.client.create({
    data: {
      user: {
        create: {
          name: 'client',
          email: 'client@gmail.com',
          password: '123',
          role: 'client'
        }
      }
    }
  }))

  console.log(await database.employee.create({
    data: {
      user: {
        create: {
          name: 'employee',
          email: 'employee@gmail.com',
          password: '123',
          role: 'employee',
        }
      },
      start: '3/11/2024',
      salary: 2200
    }
  }))

  console.log(await database.manager.create({
    data: {
      user: {
        create: {
          name: 'manager',
          email: 'manager@gmail.com',
          password: '123',
          role: 'manager'
        }
      }
    }
  }))
}

async function createRecord(employeeId) {
  console.log(await database.attendanceRecord.create({
    data: {
      date: '3/11/2024',
      income: '8:00',
      exit: '16:00',
      employeeId
    }
  }))
}

async function createProject() {
  console.log(await database.project.create({
    data: {}
  }))
}

async function createComponents() {
  console.log(await database.component.createMany({
    data: [
      {
        name: "Procesador Intel Core i7",
        details: "8 núcleos, 3.8 GHz",
        price: 400000,
        image: 'procesador.jpg'
      },
      {
        name: "Placa Base ASUS ROG Strix",
        details: "ATX, soporte para Intel y AMD",
        price: 684000,
        image: 'motherboard.jpg'
      },
      {
        name: "Ratón Logitech G502",
        details: "Gaming, RGB, ajustable",
        price: 130000,
        image: 'mouse.jpg'
      },
      {
        name: "Memoria RAM 16GB DDR4",
        details: "3200 MHz, marca Corsair",
        price: 50000,
        image: 'memoriaram.jpg'
      },
      {
        name: "Tarjeta Gráfica NVIDIA RTX 3060",
        details: "12 GB, GDDR6",
        price: 580000,
        image: 'grafica.jpg'
      },
      {
        name: "SSD Samsung 970 EVO Plus",
        details: "1TB, NVMe M.2",
        price: 200000,
        image: 'discossd.jpg'
      },
      {
        name: "HDD Seagate 2TB",
        details: "5400 RPM, SATA",
        price: 100000,
        image: 'hdd.jpg'
      },
      {
        name: "Fuente de Poder EVGA 600W",
        details: "80 Plus, Modular",
        price: 75000,
        image: 'fuente.jpg'
      },
      {
        name: "Gabinete NZXT H510",
        details: "ATX, panel de vidrio templado",
        price: 850000,
        image: 'gabinete.jpg'
      },
      {
        name: "Cooler Master Hyper 212",
        details: "Sistema de refrigeración por aire",
        price: 60000,
        image: 'cooler.jpg'
      },
      {
        name: "Monitor LG 24MP59G-P",
        details: '"24", Full HD, IPS"',
        price: 670000,
        image: 'monitor.jpg'
      },
      {
        name: "Teclado Mecánico Razer BlackWidow",
        details: "RGB, switches mecánicos",
        price: 149000,
        image: 'teclado.jpg'
      }
    ]
  }))
}

async function createData() {
  try {
    await createUsers()
    await createRecord(1)
    await createComponents()
    await createProject()
    await createProject()
    await createProject()
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  createUsers,
  createRecord,
  createProject,
  createComponents,
  createData
}