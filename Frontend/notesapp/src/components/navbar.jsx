import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div style={{padding:"20px",backgroundColor:"Beige"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px"}}>
          <Link to={"/"}>Home</Link>
          <Link to={"/register"}>Sign Up</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/notes"}>Notes</Link>
          <Link to={"/addnotes"}>Add Notes</Link>
        </div>
        </div>
    )
}

export default Navbar