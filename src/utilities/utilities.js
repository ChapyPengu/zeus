const path = require('path')

function page(name) {
  return `${path.join(process.cwd(), 'public')}/${name}.html`
}

function go(name) {
  if (name === 'index')
    return '/'
  return `/${name}`
}

function validRole(role) {
  return role === 'client' || role === 'employee' || role === 'manager'
}

module.exports = {
  page,
  go,
  validRole
}