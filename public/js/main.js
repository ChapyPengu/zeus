function getCache() {
  const cache = localStorage.getItem('cache')
  if (cache === null) return {}
  return JSON.parse(cache)
}

function setCache(key, value) {
  const cache = getCache()
  cache[key] = value
  localStorage.setItem('cache', JSON.stringify({ ...cache }))
}

function getComponents() {
  const components = localStorage.getItem('components')
  if (components === null) return []
  return JSON.parse(components)
}

function setComponents(components) {
  localStorage.setItem('components', JSON.stringify(components))
  const $order = document.querySelector('#order-list')
  const $message = document.querySelector('#order-message')
  const $price = document.querySelector('#order-price')
  const $btn = document.querySelector('#order-section__btn')
  $order.innerHTML = ''
  if (components.length === 0) {
    $message.style.display = 'block'
    $message.innerHTML = 'No tiene componentes pedidos por el momento'
    $btn.style.display = 'none'
    $order.style.display = 'none'
    $price.style.display = 'none'
  } else {
    let price = 0
    components.forEach(c => {
      console.log(c)
      const $component = document.createElement('li')
      $component.className = 'order-item'
      $component.innerHTML = `
          <img class="order-list__img" src="${c.image}">
        `
      $order.appendChild($component)
      price += c.price
    })
    $message.style.display = 'none'
    $message.innerHTML = 'No tiene componentes pedidos por el momento'
    $btn.style.display = 'block'
    $order.style.display = 'flex'
    $price.style.display = 'block'
    $price.style.marginTop = '1rem'
    $price.innerHTML = `Precio total: $${price}`
  }
}

function addComponent(component) {
  const components = getComponents()
  const cookies = {}

  document.cookie.split(';').forEach(i => {
    const [key, value] = i.split('=')
    cookies[key] = value
  })

  if (cookies.role === 'client') {
    const componentFound = components.find(c => c.id === component.id)
    if (componentFound) {
      alert('el componente ya esta pedido')
    } else {
      setComponents([...components, component])
    }
  } else {
    location.href = '/login'
  }
}

function showComponents() {
  console.log('componentes:', getComponents())
}

function clearOrder() {
  setComponents([])
}

async function sendOrder(name, email, address, components) {
  return await Service.postOrder(name, email, address, components)
}


function filterComponents() {
  const $components = document.querySelector('.components')
  $components.innerHTML = ''
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  getCache().components.filter(c => c.name.toLowerCase().includes(filter)).forEach(c => {
    const $component = document.createElement('li')
    const $button = document.createElement('button')
    $button.className = 'btn'
    $button.onclick = () => addComponent(c)
    $button.innerHTML = 'Agregar al pedido'
    $component.className = 'component'
    $component.innerHTML = `
      <img class="component__image" src="${c.image}" alt="${c.name}">
      <p class="component__text">${c.name}</p>
      <p class="component__text">${c.details}</p>
      <p class="component__text">$${c.price}</p>
      <p class="component__text">${c.available ? 'Disponible' : 'No disponible'}</p>
      <a class="btn" href="${`/component/${c.id}`}">Ver mas</a>
    `
    $component.appendChild($button)
    $components.appendChild($component)
  })
}