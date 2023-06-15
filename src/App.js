
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Apply from './Components/Apply/Apply';
import About from './Components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply' element={<Apply/>} />
        <Route path ='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
