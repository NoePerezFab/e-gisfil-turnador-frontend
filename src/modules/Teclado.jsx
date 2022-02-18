import React, { useRef } from 'react'


const Teclado = ({enviar}) => {
        const numeroRef = useRef(null)
      const inputKey = (e) =>{
            document.getElementById("code").focus()
            const aux = numeroRef.current.value
            numeroRef.current.value = aux + e.target.value
      }
      const del = () =>{
        document.getElementById("code").focus()
        numeroRef.current.value = numeroRef.current.value.slice(0,-1)
      }
      const enviarManual = () =>{
          enviar(numeroRef.current.value)
      }
  return (
   <>
    <div class="btn-group-vertical ml-4 mt-4" role="group" aria-label="Basic example">
    <div class="btn-group">
        <input class="text-center form-control-lg mb-2" id="code" ref={numeroRef}/>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="1">1</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="2">2</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="3">3</button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="4">4</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="5" >5</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="6" >6</button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="7">7</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="8">8</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="9">9</button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary py-3" onClick={del} >&lt;</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="0" >0</button>
        <button type="button" class="btn btn-primary py-3" onClick={enviarManual}>Siguiente</button>
    </div>
</div>
   </>
    
  )
}

export default Teclado