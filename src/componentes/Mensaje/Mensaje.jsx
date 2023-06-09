import { useState } from 'react'

const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false);
    const botonMensaje = () => {
        setMensaje(!mensaje)
    }
  return (
    <div>
        <button onClick={ botonMensaje }> {mensaje ? "OCULTAR" : "MOSTRAR"} </button>
        {mensaje && <h2>Que carajo el UseState, una locura</h2>}
    </div>
  )
}

export default Mensaje