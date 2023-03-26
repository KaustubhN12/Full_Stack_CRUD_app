import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div style={{padding:"20px",backgroundColor:"Beige"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"300px"}}>
          <Link to={"/"}>Home</Link>
          <Link to={"/register"}>Sign Up</Link>
          <Link to={"/login"}>Login</Link>
        </div>
        </div>
    )
}

export default Navbar