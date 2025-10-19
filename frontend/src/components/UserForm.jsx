import { useState,useEffect } from 'react'
import {api} from '../api'

function UserForm() {
const{form,setForm}=useState({
    name:"",
    email:"",
    age:"",
    city:"",
})
const handleSubmit=async(e)=>{
    e.preventDefault();
    
    await api.post('/users',form)
    setForm({
        name:"",
        email:"",
        age:"",
        city:"",
    })
    onSuccess()

}

  return (
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
    <input type="email" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
    <input type="number" placeholder="Age" onChange={(e)=>setForm({...form,age:e.target.value})}/>
    <input type="text" placeholder="City" onChange={(e)=>setForm({...form,city:e.target.value})}/>
    <button type="submit">Add user</button>
   </form>
  )
}

export default UserForm
