import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Notes = () => {

   const [note,setNotes] = useState([]);

    useEffect(()=>{
        axios.get("https://naughty-bull-capris.cyclic.app/notes",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }).then((res)=>{
          console.log(res);
          setNotes(res.data);
        }).catch((err)=>console.log(err));
    },[]);

  return (
    <div>
      {
        note.length>0? note.map((el)=>{
          return <div>
            <h3>{el.title}</h3>
            <p>{el.body}</p>
            <p>{el.sub}</p>
            <button onClick={()=>{
              axios.delete(`https://naughty-bull-capris.cyclic.app/notes/delete/${el._id}`,{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}});
            }}>Delete</button>
          </div>
        }) : <div>
           <h1>you dont have any notes yet !</h1>
           <button><Link style={{textDecoration:"none",color:"black"}} to="/addnotes">Start Making Notes</Link></button>
        </div>
      }
    </div>
  )
}

export default Notes
