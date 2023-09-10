import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Home from "../Pages/Home";
import Read from "../Pages/Read";
import Add from "../Pages/Add";
import Edit from "../Pages/Edit";
import { supabase } from "../Client";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";

const Header = () => {

  

    return(
        <div className="Header"> 
            <Link to="/lgn"><button className="LoginButton">Login</button></Link>
            <Link to="/signup"><button className="SignUPButton">SignUp</button></Link>
            <Link to="/"><button className="HomeButton">Home🏡</button></Link>
            <Link to="/see"><button className="SeeButton">See Locations👀</button></Link>
            <Link to="/add"><button className="CreateButton">Add Locations➕</button></Link>
        </div>
    )
}

export default Header;