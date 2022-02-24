


const Teclado = ({inputKey,del,enviarManual,changeTeclado}) => {
        
  return (
   <>
   
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
    <button type="button" class="btn btn-outline-secondary py-3" onClick={changeTeclado}  ><i class="fa fa-keyboard-o" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={del} >&lt;</button>
        <button type="button" class="btn btn-outline-secondary py-3" onClick={inputKey} value="0" >0</button>
        <button type="button" class="btn btn-primary py-3" onClick={enviarManual}>Siguiente</button>
    </div>

   </>
    
  )
}

export default Teclado