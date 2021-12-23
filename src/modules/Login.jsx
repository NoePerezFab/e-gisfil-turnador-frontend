import React, { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Menu from './Menu'

const Login = ({setsucursal}) => {
    const sucursalRef = useRef()
    const [redirect, setredirect] = useState(false)
    const getSucursal = () =>{
        setsucursal(sucursalRef.current.value)
        setredirect(true)
    }
    return (
        
        !redirect ?
        <>
        <Menu/>
        <div class="d-flex justify-content-center align-items-center flex-column  h-100 w-100 ">
            <div class="d-flex justify-content-center align-items-center flex-column  h-100 w-25 text-center ">
                <h3 class='mb-4'>Ingresa el nombre de la sucursal</h3>
               
                <input type='text' class='form-control' ref={sucursalRef} required/>
                <button type='submit' className="btn    p-3 mt-3  " style={{background:"#0D7E61",color:"white"}} onClick={getSucursal}>Ingresar</button>
                
            </div>
        </div>
        </>:
        <Navigate to={"/app"}/>
    )
}

export default Login
