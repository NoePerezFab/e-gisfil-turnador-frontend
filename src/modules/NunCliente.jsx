import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router'
import Menu from './Menu'
import Teclado from './Teclado'

const NunCliente = ({setncliente}) => {
    const [red, setred] = useState(0)
    const ntarjetaRef = useRef(null)
    //const nclienteRef = useRef(null)
    const [alert, setalert] = useState(false)
    const [numeroaux, setnumeroaux] = useState('')
    useEffect(() => {
        document.getElementById("ntarjeta").focus()
    }, [])
    const regresar = () =>{
        setred(1)
    }
    //ASCII 48 a 57
    const enviar = async(e)=>{
        e.preventDefault()
        try{
        let index
        for(let i = 0; i< ntarjetaRef.current.value.length;i++){
            if(ntarjetaRef.current.value.charCodeAt(i) > 47 & ntarjetaRef.current.value.charCodeAt(i) < 58){
                index = i
                break
            } 
        }
        const numero = ntarjetaRef.current.value.slice(index,index+16)
        setnumeroaux(numero)
        const request = {"numero_tarjeta" : numero}
        const requestJson = JSON.stringify(request)
        
        const response = await fetch('../gestor/api/buscarcliente',{ 
                headers : { 'Content-Type': 'application/json' },
                method: 'POST',
                mode: 'cors', // <---
                cache: 'default',
                body: requestJson
              })
              console.log(response);
        const responseJson = await response.json()
        setncliente(responseJson)
        setred(2)}
        catch{
            setalert(true)
        }
    }
    const enviarIngresoManual = async(numero) => {
        try{
        const request = {"numero_cliente" : numero}
        const requestJson = JSON.stringify(request)
        
        const response = await fetch('../gestor/api/buscarcliente',{ 
                headers : { 'Content-Type': 'application/json' },
                method: 'POST',
                mode: 'cors', // <---
                cache: 'default',
                body: requestJson
              })
        const responseJson = await response.json()
        setncliente(responseJson)
        setred(2)
            }catch{
                setalert(true)
            }
        
    }
    
    return (
        red === 0 ?
        <>
        <Menu/>
        <button type="button" onClick={regresar} className="btn  btn-lg ml-1 " style={{background:"#0D7E61",color:"white",marginTop:"5rem"}}>Regresar</button>
        <div class="d-flex justify-content-center align-items-center flex-column  h-100 w-100 " >
            <h1>Desliza tu tarjeta o ingresa tu numero de cliente</h1>
            <div class="d-flex align-items-center flex-column  h-100 w-100"  >
            <form onSubmit={enviar}>
            <input type="text" className='' style={{opacity:"0"}} id="ntarjeta" ref={ntarjetaRef} />
            <div class="form-group">
            
                <Teclado enviar={enviarIngresoManual}/>
                <button type='submit' style={{opacity:"0"}}></button>
            </div>
            {alert ? <><div class="alert alert-danger" role="alert">
                   {numeroaux}
                </div></> : <></>}

            </form>
            </div>
        </div>
        </> : 
        red === 1 ? <Navigate to={"/app"}/> : red === 2 ? <Navigate to={"/servicios"}/> : <></>
    )
}

export default NunCliente
