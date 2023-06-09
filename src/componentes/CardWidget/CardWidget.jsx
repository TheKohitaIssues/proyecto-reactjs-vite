import './CardWidget.css'

const CardWidget = () => {
    const carrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div>
        <img className='carrito' src={carrito} alt="Imagen del carrito" />
        <strong> 10 </strong>
    </div>
  )
}

export default CardWidget