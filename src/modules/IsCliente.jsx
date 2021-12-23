import { useState } from "react"
import { Navigate } from "react-router-dom";
import Menu from "./Menu";

const IsCliente = ({setservicios}) => {
        const [red, setred] = useState(false)
        
        const getServicios = async(isCliente) =>{
            const response = await fetch('http://192.168.200.216:8080/ticket/api/servicios?isCliente='+isCliente,{ 
                method: 'GET',
                mode: 'cors',
                cache: 'default'
              })
            const responseJson = await response.json()
            setservicios(responseJson)
            setred(true)
        }
    
       
    return (
        <>
        
        <Menu/>
        {!red ?
        <div class="d-flex justify-content-center align-items-center flex-column h-100 ">
            
                <button type="button" onClick={()=>getServicios(true)} className="btn  btn-lg btn-block p-5 m-5 w-50 " style={{background:"#0D7E61",color:"white"}}>Soy Cliente</button>
            
                <button type="button" onClick={()=>getServicios(false)}className="btn  btn-lg btn-block p-5 m-5 w-50" style={{background:"#0D7E61",color:"white"}}>No soy Cliente</button>
        </div>:

        <Navigate to={ "/servicios"}/>}
        </>
        
    )
}

export default IsCliente
