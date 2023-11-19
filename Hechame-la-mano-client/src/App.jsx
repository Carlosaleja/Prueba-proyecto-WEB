import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Layout from "./pages/Layout"
import About from "./pages/about"
import Home from "./pages/Home"
import Inicio from "./pages/Inicio"
import Conocenos from "./pages/Conocenos"
import Form_ayuda from "./pages/Form_ayuda"
import Participa from "./pages/Participa"
import Solicitudes from "./pages/Solicitudes"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
                <Route path ="Home" element = {<Home/>} />
                <Route path ="/" element = {<Inicio/>} />
                <Route path ="/Inicio" element = {<Inicio/>} />
                <Route path ="/Conocenos" element = {<Conocenos/>} />
                <Route path ="/Form_ayuda" element = {<Form_ayuda/>} />
                <Route path ="/Solicitudes" element = {<Solicitudes/>} />
                <Route path ="/Paticipa" element = {<Participa/>} />
      </Routes>
    </div>

  );
}

export default App
