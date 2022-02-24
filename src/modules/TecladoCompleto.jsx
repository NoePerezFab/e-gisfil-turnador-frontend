import React from 'react'

const TecladoCompleto = ({inputKey,del,enviarManual,changeTeclado}) => {
    
  return (
    <>
    
    <div class="btn-group" >
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="1">1</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="2">2</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="3">3</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="4">4</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="5">5</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="6">6</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="7">7</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="8">8</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="9">9</button>
        <button type="button" class="btn btn-outline-secondary pr-3" onClick={inputKey} value="0">0</button>
        <button type="button" class="btn btn-outline-secondary btn-danger py-3 " onClick={del} style={{color : "white"}} >Borrar</button>   
    </div>
    <div class="btn-group">
        
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="Q">Q</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="W" >W</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="E" >E</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="R">R</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="T">T</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="Y">Y</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="U">U</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="I">I</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="O">O</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="P">P</button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="A">A</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="S">S</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="D">D</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="F">F</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="G">G</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="H">H</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="J">J</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="K">K</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="L">L</button>
        <button type="button" class="btn btn-primary py-3" onClick={enviarManual} >Siguiente</button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary py-3" onClick={changeTeclado}  ><i class="fa fa-keyboard-o" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="Z">Z</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="X">X</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="C">C</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="V">V</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="B">B</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="N">N</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="M">M</button>
    </div>

   </>
  )
}

export default TecladoCompleto