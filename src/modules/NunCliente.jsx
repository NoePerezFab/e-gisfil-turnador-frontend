import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import Menu from './Menu'

const NunCliente = () => {
    const [red, setred] = useState(0)
    useEffect(() => {
        document.getElementById("ncliente").focus()
    }, [])
    const regresar = () =>{
        setred(1)
    }
    return (
        red === 0 ?
        <>
        <Menu/>
        <button type="button" onClick={regresar} className="btn  btn-lg ml-1 " style={{background:"#0D7E61",color:"white",marginTop:"5rem"}}>Regresar</button>
        <div class="d-flex justify-content-center align-items-center flex-column  h-100 w-100 ">
            <div class="form-group">
                <label for="exampleInputEmail1" >Numero Cliente</label>
                <input type="text" className="form-control" id="ncliente"  placeholder="Ingresa tu numero de cliente"/>
            </div>
        </div>
        </> : 
        red === 1 ? <Navigate to={"/app"}/> : <></>
    )
}

export default NunCliente
