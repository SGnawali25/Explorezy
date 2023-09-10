import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { supabase } from './Client';
import Home from './Pages/Home';
import Read from './Pages/Read';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const App = () =>{

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
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/lgn",
      element:<Login data = {credentials}/>
    }
  ])


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
return(
  <div className='wholePage'>

    <Link to="/lgn"><button className="LoginButton">Login</button></Link>
    <Link to="/signup"><button className="SignUPButton">SignUp</button></Link>
    <Link to="/"><button className="HomeButton">Home🏡</button></Link>
    <Link to="/see"><button className="SeeButton">See Locations👀</button></Link>
    <Link to="/add"><button className="CreateButton">Add Locations➕</button></Link>
    {element}
  </div>

)
}

export default App
