import {Routes, Route} from "react-router-dom";
import React from 'react'
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/login";
import Notes from "./components/Notes";
import Addnotes from "./components/Addnotes";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/addnotes" element={<Addnotes/>}/>
    </Routes>
  )
}

export default AllRoutes

