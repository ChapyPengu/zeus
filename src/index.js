const app = require('./app')
const helpers = require('./helpers/helpers')

// helpers.createData()

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})