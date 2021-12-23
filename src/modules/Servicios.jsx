import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Menu from "./Menu";


const Servicios = ({setticket,servicios}) => {
    const [red, setred] = useState(false)
    const getTurno = async(servicio) =>{
        const ticketrequest = {"servicio" : servicio}
        const servicioJson = JSON.stringify(ticketrequest)
        
        const response = await fetch('http://192.168.200.216:8080/ticket/api/addticket',{ 
                headers : { 'Content-Type': 'application/json' },
                method: 'POST',
                mode: 'cors', // <---
                cache: 'default',
                body: servicioJson
              })
            const responseJson = await response.json()
            setticket(responseJson)
           setred(true)
    }
    return (
        <>
        <Menu/>
        {!red?
        <div class="d-flex justify-content-center align-items-center flex-column h-100 ">
            {servicios.length > 0 ?
                servicios.map((servicio)=>{
                    return(
                        <button type="button" onClick={()=>getTurno(servicio)} className="btn  btn-lg btn-block p-5 m-5 w-50 " style={{background:"#0D7E61",color:"white"}}>{servicio.nombre}</button>
                    )
                }) :
                <p></p>
            }
     
        </div>:
        <Navigate to={"/ticket"}/>}
        </>
    )
}

export default Servicios
