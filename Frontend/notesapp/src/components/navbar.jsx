import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div style={{padding:"20px",backgroundColor:"Beige"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px"}}>
          <Link style={{textDecoration:"none",color:"black"}} to={"/"}>Home</Link>
          <Link style={{textDecoration:"none",color:"black"}} to={"/register"}>Sign Up</Link>
          <Link style={{textDecoration:"none",color:"black"}} to={"/login"}>Login</Link>
          <Link style={{textDecoration:"none",color:"black"}} to={"/notes"}>Notes</Link>
          <Link style={{textDecoration:"none",color:"black"}} to={"/addnotes"}>Add Notes</Link>
        </div>
        </div>
    )
}

export default Navbar