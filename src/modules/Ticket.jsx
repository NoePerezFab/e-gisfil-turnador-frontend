import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Ticket = ({ticket,sucursal}) => {
    const intervalRef = useRef()
    const [datetime, setdatetime] = useState('')
    const [redirect, setredirect] = useState(false)
    const returnPaginaInicial = ()=>{
        
        setredirect(true)
    }
    useEffect(() => {
        const convertFecha = async() =>{
            const dateconv = await new Date(ticket.hora_llegada)
            await setdatetime(dateconv.toLocaleString('es'))
            window.print()
        }
        convertFecha()
        intervalRef.current = setInterval(returnPaginaInicial,2000)
        
    }, [ticket])
    //410px para ajustar ancho de impresora, usar chrome sin margenes para mejor compatibilidad
    return (
        !redirect ?
        <div >
            <div class="d-flex justify-content-center align-items-center flex-column   " style={{width:"410px"}}>
            <h3 className='pb-2'>e-GISfil</h3>
            <h3 className='w-100 text-center' style={{background:"#0D529B",color:"#ffffff"}}>GISnet</h3>
            <h5 className='pt-2'>Bienvenido</h5>
            <h5 className='pb-2'>{sucursal.clave}-{sucursal.nombre}</h5>
            <h1 className='pb-2'>{ticket.turno}</h1>
            <h5 className='text-center pl-5 pr-5'>Favor de esperar turno en la zona de espera</h5>
            <h5 className='pb-2'>Gracias por su visita</h5>
            <h6>{datetime}</h6>
            </div>
        </div>:
        <Navigate to="/app"/>
    )
}

export default Ticket
