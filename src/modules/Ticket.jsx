import React, { useEffect, useState } from 'react'

const Ticket = ({ticket}) => {
    const [datetime, setdatetime] = useState('')
    useEffect(() => {
        const dateconv = new Date(ticket.hora_llegada)
        setdatetime(dateconv.toLocaleString('es'))
    }, [ticket])
    return (
        <div class="d-flex justify-content-center align-items-center flex-column h-100  text-justify ">
            <div class="d-flex justify-content-center align-items-center flex-column h-100  " style={{width:"250px"}}>
            <h3 className='pb-2'>E-GISfil</h3>
            <h3 className='w-100 text-center' style={{background:"#0D529B",color:"#ffffff"}}>GISnet</h3>
            <h5 className='pt-2'>Bienvenido</h5>
            <h5 className='pb-2'>9999-GISNET</h5>
            <h1 className='pb-2'>{ticket.turno}</h1>
            <h5 className='text-center '>Favor de esperar turno en la zona de espera</h5>
            <h5 className='pb-2'>Gracias por su visita</h5>
            <h6>{datetime}</h6>
            </div>
        </div>
    )
}

export default Ticket
