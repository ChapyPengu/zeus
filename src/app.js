const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')

const clientPagesRoutes = require('./routes/client/routes')
const authRoutes = require('./routes/api/auth.routes')
const componentRoutes = require('./routes/api/component.routes')
const orderRoutes = require('./routes/api/order.routes')
const clientRoutes = require('./routes/api/client.routes')
const employeeRoutes = require('./routes/api/employee.routes')
const managerRoutes = require('./routes/api/manager.routes')

const app = express()
const PORT = process.env.PORT ?? 3000

app.set('port', PORT)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public/js')))
app.use(express.static(path.join(__dirname, '../public/styles')))
app.use(express.static(path.join(__dirname, '../public/imgs')))
app.use(cookieParser())
app.use(morgan('dev'))

app.use('/', clientPagesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/component', componentRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/client', clientRoutes)
app.use('/api/employee', employeeRoutes)
app.use('/api/manager', managerRoutes)

module.exports = app