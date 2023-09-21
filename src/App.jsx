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

  // let element = useRoutes([
  //   {
  //     path :"/",
  //     element:<Home/>
  //   },
  //   {
  //     path : "/add",
  //     element : <Add/>
  //   },
  //   {
  //     path : "/see",
  //     element : <Read data = {places}/>
  //   },
  //   {
  //     path:"/see/edit/:id",
  //     element:<Edit data = {places}/>
  //   },
  //   {
  //     path:"/signup",
  //     element:<SignUp/>
  //   },
  //   {
  //     path:"/login",
  //     element:<Login data = {credentials}/>
  //   }
  // ])


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
    <Header/>
    <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/add' Component={Add} exact/>
        <Route path = '/see' Component={Read} exact/>
        <Route path='/see/edit/:id' Component={Edit} exact/>
        <Route path='/lgn' Component={Login} exact/>
        <Route path='/signup' Component={SignUp} exact/>
    </Routes>
    
  </div>

)
}

export default App
