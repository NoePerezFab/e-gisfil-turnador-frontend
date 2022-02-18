import { useState } from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import IsCliente from "./modules/IsCliente";
import Login from "./modules/Login";
import NunCliente from "./modules/NunCliente";
import Servicios from "./modules/Servicios";
import Ticket from "./modules/Ticket";
import TomarTicket from "./modules/TomarTicket";

function App() {
  const [servicios, setservicios] = useState([])
  const [ticket, setticket] = useState({})
  const [sucursal, setsucursal] = useState('9999-GISNET')
  const [ncliente, setncliente] = useState(null)
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Login setsucursal={setsucursal}/>}/>
        <Route path="/app" element={<IsCliente setservicios={setservicios} sucursal={sucursal}/>}/>
        <Route path="/servicios" element={<Servicios servicios={servicios} setticket={setticket} ticket={ticket} sucursal={sucursal} ncliente={ncliente}/>}/>
        <Route path="/ticket" element={<Ticket ticket={ticket} sucursal={sucursal} cliente={ncliente}/>} />
        <Route path="/tomarticket" element={<TomarTicket/>}/>
        <Route path="/numcliente" element={<NunCliente setncliente={setncliente}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
