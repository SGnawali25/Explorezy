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

  const [places, setPlaces] = useState ([]);
  const [credentials, setCredentials] = useState([])

  useEffect(() => {
    const fetchPlaces = async() => {
      const {data} = await supabase
      .from('FinalProject')
      .select()
      .order("created_at",{ascending: true})

      setPlaces(data)
    }

    fetchPlaces()
  }, []);


  useEffect(() => {
    const fetchCredentials = async() => {
      const {data} = await supabase
      .from('LoginCredentials')
      .select()
      .order("created_at",{ascending: true})

      setCredentials(data)
    }

    fetchCredentials()
  }, []);




    let element = useRoutes([
        {
          path :"/",
          element:<Home/>
        },
        {
          path : "/add",
          element : <Add/>
        },
        {
          path : "/see",
          element : <Read data = {places}/>
        },
        {
          path:"/see/edit/:id",
          element:<Edit data = {places}/>
        },
        {
          path:"/SignUp",
          element:<SignUp/>
        },
        {
          path:"/Login",
          element:<Login data = {credentials}/>
        }
      ])

    return(
        <div className="Header"> 
            <Link to="/Login"><button className="LoginButton">Login</button></Link>
            <Link to="/SignUp"><button className="SignUPButton">SignUp</button></Link>
            <Link to="/"><button className="HomeButton">Home🏡</button></Link>
            <Link to="/see"><button className="SeeButton">See Locations👀</button></Link>
            <Link to="/add"><button className="CreateButton">Add Locations➕</button></Link>
            {element}       
        </div>
    )
}

export default Header;