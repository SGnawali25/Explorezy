import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { supabase } from './Client';
import Home from './Pages/Home';
import Read from './Pages/Read';
import Header from './Components/Header';

const App = () =>{
return(
  <div className='wholePage'>
    <Header/>
    
  </div>

)
}

export default App
