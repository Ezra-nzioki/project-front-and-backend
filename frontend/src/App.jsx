import { useState,useEffect } from 'react'
import UserForm from './components/UserForm'
import './App.css'
import { api } from './api'

function App() {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res=await api.get('/users')
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  
  return (
   <>
   <div>
      <h1>
          User list
      </h1>
      <UserForm  onSuccess={fetchUsers} />
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
   </div>
   
   </>
  )
}

export default App
