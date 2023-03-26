import React, { useState } from 'react'
import axios from 'axios';  

const Addnotes = () => {

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [sub,setSub] = useState("");

    const handleSubmit = () => {
        const payload = {
            title,
            body,
            sub
        }
        axios.post("https://naughty-bull-capris.cyclic.app/notes/add",JSON.stringify(payload),{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}}).then((res)=>console.log(res)).catch((err)=>console.log(err))
        setBody("");
        setSub("");
        setTitle("");
    }

  return (
    <div>
      <h1>Add Note</h1>
      <label>title: </label>
      <input type="text" placeholder='Enter Title'value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <label>Body: </label>
      <input type="text" placeholder='Enter Details'value={body} onChange={(e)=>setBody(e.target.value)}/>
      <label>Subject: </label>
      <input type="text" placeholder='Enter Subject'value={sub} onChange={(e)=>setSub(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Addnotes
