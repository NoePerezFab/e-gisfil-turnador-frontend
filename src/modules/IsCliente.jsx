import { useEffect, useRef, useState } from "react"
import { Navigate } from "react-router-dom";
import Menu from "./Menu";

const IsCliente = ({setservicios,sucursal}) => {
        const intervalRef = useRef() 
        const [red, setred] = useState(false)
        const [fecha, setfecha] = useState(null)
        const getServicios = (isCliente) =>{
            const serviciosSucursal = sucursal.servicios
            const serviciosCliente = serviciosSucursal.filter(({servicio_cliente})=> servicio_cliente === isCliente)
            setservicios(serviciosCliente)
            setred(true)
        }
        const convertNumber = (n)=>{
           if(n < 10){
               return "0"+n
           }
           return n

        }
        useEffect(() => {
            const getFecha = () => {
                const fechaActual = new Date()
                setfecha({dia : convertNumber(fechaActual.getDate()),
                            mes : convertNumber(fechaActual.getMonth()+1),
                            anio : fechaActual.getFullYear(),
                            hora : convertNumber(fechaActual.getHours()),
                            minutos : convertNumber(fechaActual.getMinutes()),
                            segundos : convertNumber(fechaActual.getSeconds())})
                           
            } 
            intervalRef.current = setInterval(getFecha,1000)
            
        }, [])
       
    return (
        <>
        
        <Menu/>
        
        <h2 className="pt-4 mt-5 text-center">Bienvenido a sucursal: {sucursal.nombre}</h2>
        {fecha !== null ? <h4 className="text-center">{fecha.dia}/{fecha.mes}/{fecha.anio}    {fecha.hora}:{fecha.minutos}:{fecha.segundos}</h4>
        : <></>}
        
        {!red ?
        <div class="d-flex justify-content-center align-items-center flex-column mt-5 ">
            
                <button type="button" onClick={()=>getServicios(true)} className="btn  btn-lg btn-block p-5 m-5 w-50 " style={{background:"#0D7E61",color:"white",fontSize:"3rem"}}>Soy Cliente</button>
            
                <button type="button" onClick={()=>getServicios(false)}className="btn  btn-lg btn-block p-5 m-5 w-50" style={{background:"#0D7E61",color:"white",fontSize:"3rem"}}>No soy Cliente</button>
        </div>:

        <Navigate to={ "/servicios"}/>}
        </>
        
    )
}

export default IsCliente
