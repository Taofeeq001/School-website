import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    // <BrowswerRoute>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //   </Routes>
    // </BrowswerRoute>
    // <div>
    //   <Home/>
    // </div>
  );
}

export default App;
