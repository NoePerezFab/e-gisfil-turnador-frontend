import { useState } from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import IsCliente from "./modules/IsCliente";
import Login from "./modules/Login";
import Servicios from "./modules/Servicios";
import Ticket from "./modules/Ticket";

function App() {
  const [servicios, setservicios] = useState([])
  const [ticket, setticket] = useState({})
  const [sucursal, setsucursal] = useState('9999-GISNET')
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Login setsucursal={setsucursal}/>}/>
        <Route path="/app" element={<IsCliente setservicios={setservicios} sucursal={sucursal}/>}/>
        <Route path="/servicios" element={<Servicios servicios={servicios} setticket={setticket} ticket={ticket} sucursal={sucursal}/>}/>
        <Route path="/ticket" element={<Ticket ticket={ticket} sucursal={sucursal}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
