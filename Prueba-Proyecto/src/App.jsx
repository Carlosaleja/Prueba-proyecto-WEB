import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home_/Home"
import Inicio from "./pages/Inicio_/Inicio"
import Inicio_c from "./pages/Inicio_/Inicio#Conocenos_"
import Form_ayuda from "./pages/Inicio_/Inicio#Formadeayuda"
import Solicitudes from "./pages/Solicitudes_/Solicitudes"
import Pagina_error from "./pages/pagina_error/pagina_error"
import Inicio_sesion from "./pages/Inicio_sesion/Inicio_sesion"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
                <Route path ="Home" element = {<Home/>} />
                <Route path ="/" element = {<Inicio/>} />
                <Route path ="/Inicio" element = {<Inicio/>} />
                <Route path ="/Inicio-Conocenos" element = {<Inicio_c/>} />
                <Route path ="/Inicio-Forma ayuda" element = {<Form_ayuda/>} />
                <Route path ="/Solicitudes" element = {<Solicitudes/>} />
                <Route path ="/*" element = {<Pagina_error/>} />
                <Route path ="/Inicio_sesion" element = {<Inicio_sesion/>} />

      </Routes>
    </div>

  );
}

export default App
