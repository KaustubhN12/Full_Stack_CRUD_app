import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const handleSubmit = () => {
        const payload = {
            email,
            pass
        }
        axios.post("http://localhost:8080/users/login",payload).then((res)=>console.log(res)).catch((err)=>console.log(err));
        setEmail("");
        setPass("");
    }

  return (
    <div>
        <h1>Log In</h1>
      <label>Email: </label>
      <input type="text" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>password: </label>
      <input type="password" placeholder='Enter pass'value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
