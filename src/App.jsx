
import './App.css'
import {Route, Routes } from "react-router-dom";
import Movies from './pages/Movies';

import Display from './pages/Display';
import Browse from './pages/Browse';
import Register from './pages/Register';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/display" element={<Display></Display>}></Route>
        <Route path="/browse" element={<Browse></Browse>}></Route>
      </Routes>
    </>
  )
}

export default App