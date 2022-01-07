import React, { useEffect, useRef,useState } from 'react'
import { Navigate } from 'react-router-dom'
import Menu from './Menu'

const TomarTicket = () => {
    const intervalRef = useRef() 
    const [redirect, setredirect] = useState(false)
    const returnPaginaInicial = ()=>{
        
        setredirect(true)
    }
    useEffect(() => {

        intervalRef.current = setInterval(returnPaginaInicial,3000)
        
    }, [])
    return (
        <>
        <Menu/>
        {!redirect ? 
            
                <div class="d-flex justify-content-center align-items-center flex-column h-100   ">
                    <h1 className='pb-2'>Tome su ticket</h1>
                    <h5 className='pb-2'>Gracias por su visita</h5>

                 </div>:
                 <Navigate to={"/app"}/>}
        
        </>
    )
}

export default TomarTicket
