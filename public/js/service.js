class Service {

  static async postOrder(name, email, address, components) {
    const response = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        address,
        components
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }) 
    const data = await response.json()
    return data
  }
}