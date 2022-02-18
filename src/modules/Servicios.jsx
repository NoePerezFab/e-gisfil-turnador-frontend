import React, {  useState } from 'react'
import { Navigate } from 'react-router-dom'
import Menu from "./Menu";


const Servicios = ({setticket,servicios,sucursal}) => {
    const [red, setred] = useState(1)

    
    
    const getTurno = async(servicio) =>{
        const ticketrequest = {"servicio" : servicio,"id_sucursal" : sucursal.id}
        const servicioJson = JSON.stringify(ticketrequest)
        
        const response = await fetch('../ticket/api/addticket',{ 
                headers : { 'Content-Type': 'application/json' },
                method: 'POST',
                mode: 'cors', // <---
                cache: 'default',
                body: servicioJson
              })
            const responseJson = await response.json()
            setticket(responseJson)
           setred(2)
    }
    
    const regresar = () =>{
        setred(3)
    }
    return (
        <>
        <Menu/>
        <button type="button" onClick={regresar} className="btn  btn-lg ml-1 " style={{background:"#0D7E61",color:"white",marginTop:"5rem"}}>Regresar</button>
        {red === 1?
        <div class="d-flex justify-content-center align-items-center flex-column h-100  ">
            {servicios.length > 0 ?
                servicios.map((servicio)=>{
                    return(
                        <button type="button" onClick={()=>getTurno(servicio)} className="btn  btn-lg btn-block p-5 w-50 " style={{background:"#0D7E61",color:"white",fontSize:"3rem"}}>{servicio.nombre}</button>
                    )
                }) :
                <p></p>
            }
     
        </div>: red === 2?
        <Navigate to={"/ticket"}/> :
        <Navigate to={"/app"}/>}
        
        </>
    )
}

export default Servicios
