import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Apply from './Components/Apply/Apply';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply' element={<Apply/>} />
      </Routes>
    </BrowserRouter>
    // <BrowswerRoute>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //   </Routes>
  )
}

export default App;
