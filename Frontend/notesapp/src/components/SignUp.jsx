import React, { useState } from 'react'
import axios from 'axios';  
const SignUp = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [location,setLocation] = useState("");
    const [age,setAge] = useState(0);

    const handleSubmit = () => {
        const payload = {
            email,
            pass,
            location,
            age
        }
        axios.post("http://localhost:8080/users/register",payload).then((res)=>console.log(res)).catch((err)=>console.log(err))
        setEmail("");
        setPass("");
        setAge(0);
        setLocation("");
    }

  return (
    <div>
        <h1>Sign UP</h1>
      <label>Email: </label>
      <input type="text" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>password: </label>
      <input type="password" placeholder='Enter pass'value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <label>location: </label>
      <input type="text" placeholder='Where are you from ?'value={location} onChange={(e)=>setLocation(e.target.value)}/>
      <label>age: </label>
      <input type="number" placeholder='Enter your age'value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SignUp
