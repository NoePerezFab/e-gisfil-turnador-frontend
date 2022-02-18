import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Menu from './Menu'


const Login = ({setsucursal}) => {
    const [redirect, setredirect] = useState(false)
    const [sucursales, setsucursales] = useState([])
    const [sucursalSeleccionada, setsucursalSeleccionada] = useState(null)
    const getSucursal = async() =>{
        const request = {"id" : sucursalSeleccionada}
        const requestJson = JSON.stringify(request)
        
        const response = await fetch('../ticket/api/getsucursal',{ 
                headers : { 'Content-Type': 'application/json' },
                method: 'POST',
                mode: 'cors', // <---
                cache: 'default',
                body: requestJson
              })
        const responseJson = await response.json()
        setsucursal(responseJson)
        setredirect(true)
    }
    const seleccionarSucursal = (e) =>{
        setsucursalSeleccionada(e.target.value)
    }
    useEffect(() => {
        const getSucursales = async () =>{
            const response = await fetch('../ticket/api/getsucursales',{ 
                headers : { 'Content-Type': 'application/json' },
                method: 'GET',
                mode: 'cors', // <---
                cache: 'default',
              })
            const responseJson = await response.json()
            setsucursales(responseJson)
        }
        
        getSucursales()
        
    }, [])
    return (
        
        !redirect ?
        <>
        <Menu/>
        <div class="d-flex justify-content-center align-items-center flex-column  h-100 w-100 ">
            <div class="d-flex justify-content-center align-items-center flex-column  h-100 w-25 text-center ">
                <select class="form-select" onChange={seleccionarSucursal} >
                    <option selected >Selecciona una sucursal</option>
                    {sucursales.length > 0 ? sucursales.map(({id,nombre})=>{
                        return (
                            <option value={id} >{nombre}</option>
                        )

                    }) : <p></p>}
                </select>
                   
                <button type='submit' className="btn    p-3 mt-3  " style={{background:"#0D7E61",color:"white"}} onClick={getSucursal}>Ingresar</button>
                
            </div>
        </div>
        
        </>:
        <Navigate to={"/app"}/>
    )
}

export default Login
