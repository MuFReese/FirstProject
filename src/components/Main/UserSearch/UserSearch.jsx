import { useEffect } from 'react'

export default function UserSearch() {
  
  useEffect(() => {
    const filter = document.getElementById('filter')
    const list = document.getElementById('list')
    let USERS = []
    
    filter.addEventListener('input', (event) => {
      const value = event.target.value.toLowerCase()
      const filteredUsers = USERS.filter( (user) => user.name.toLowerCase().includes(value))
    
      render(filteredUsers)
    })
    
    
    async function start() {
      list.innerHTML = 'Loading...'
      try {
        const addUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await addUsers.json()
        setTimeout(() => {
          USERS = data
          render(data)
        }, 2000)
      } catch(err) {
        list.style.color = 'red'
        list.innerHTML = err.message
      }
    }
    
    function render(users = []) {
      if( users.length === 0) {
        list.innerHTML = 'There are no such people'
      } else {
        const html = users.map(toHTML).join('')
        list.innerHTML = html
      }
    }
    
    function toHTML(user) {
      return `
      <li class="list-group-item">${user.name}</li>
      `
    }
    
    start()
    
    })
  return(
    <>
    <div style={{margin: '25px 50px'}} >
      <h2 style={{fontSize: '30px'}}>Список пользователей</h2>
      <input
      style={{margin: '10px 0px', }}
        type="text"
        placeholder="Имя пользователя"
        id="filter"
      />
      <ul style={{ fontSize: '20px'}} className="list-group list-group-flush" id="list"></ul>
    </div>
    </>
  )
}