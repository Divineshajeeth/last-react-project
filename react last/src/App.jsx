import Navbar from './components/navbar';
import './App.css'
import Home from './components/Home';
import Add from './components/addStu';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';

export default function App() {

  return (
    <div>
  <Navbar></Navbar>
      <Routes>
        <Route path="/Home" element={<Home />} /> 
        <Route path="/addStu" element={<Add />} />
        <Route path="/About" element={<About />} />
        </Routes>


    </div>
  )
}
