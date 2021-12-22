import { useState } from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import IsCliente from "./modules/IsCliente";
import Menu from "./modules/Menu";
import Servicios from "./modules/Servicios";
import Ticket from "./modules/Ticket";

function App() {
  const [servicios, setservicios] = useState([])
  const [ticket, setticket] = useState({})
  return (
    <>
    <Menu/>
    <Router>
      <Routes>
        <Route path="/" element={<IsCliente setservicios={setservicios}/>}/>
        <Route path="/servicios" element={<Servicios servicios={servicios} setticket={setticket} ticket={ticket}/>}/>
        <Route path="/ticket" element={<Ticket ticket={ticket}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
