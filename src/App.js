
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Apply from './Components/Apply/Apply';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Apply />
    </div>
  );
}

export default App;
