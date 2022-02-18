import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router'
import Menu from './Menu'

const NunCliente = ({setncliente}) => {
    const [red, setred] = useState(0)
    const ntarjetaRef = useRef(null)
    const nclienteRef = useRef(null)
    useEffect(() => {
        document.getElementById("ntarjeta").focus()
    }, [])
    const regresar = () =>{
        setred(1)
    }
    const enviar = (e)=>{
        e.preventDefault()
        setncliente(ntarjetaRef.current.value)
        setred(2)
    }
    
    return (
        red === 0 ?
        <>
        <Menu/>
        <button type="button" onClick={regresar} className="btn  btn-lg ml-1 " style={{background:"#0D7E61",color:"white",marginTop:"5rem"}}>Regresar</button>
        <div class="d-flex justify-content-center align-items-center flex-column  h-100 w-100 " >
            <h1>Desliza tu tarjeta o ingresa tu</h1>
            <div class="d-flex align-items-center flex-column  h-100 w-100" style={{marginTop:"12rem"}} >
            <form onSubmit={enviar}>
            <input type="text" className='' style={{opacity:"0"}} id="ntarjeta" ref={ntarjetaRef} />
            <div class="form-group">
            
                <label for="exampleInputEmail1" >Numero Cliente</label>
                <input type="text" className="form-control" id="ncliente"  placeholder="Ingresa tu numero de cliente" ref={nclienteRef}/>
                <button type='submit' style={{opacity:"0"}}></button>
            </div>
            

            </form>
            </div>
        </div>
        </> : 
        red === 1 ? <Navigate to={"/app"}/> : red === 2 ? <Navigate to={"/servicios"}/> : <></>
    )
}

export default NunCliente
