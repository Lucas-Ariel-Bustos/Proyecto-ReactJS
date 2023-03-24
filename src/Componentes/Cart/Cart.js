import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { BsFillTrash3Fill } from 'react-icons/bs';
import './Cart.scss'
import { Link } from 'react-router-dom';


export const Cart = () => {

    const { cart, total, vaciarCarrito, eliminarProducto } = useContext(CartContext)

    return (
        <div className="divCarrito">
            <h2 className="tituloCompra">Detalles de compra</h2>
            <hr/>
            {
                cart.map((prod) => (
                    <div className='divProductosCarrito' key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img className='imagenProductoCarrito' src={prod.img} alt={prod.nombre}/>
                        <small>Precio por unidad: ${prod.precio} </small>
                        <small>Cantidad: {prod.cantidad}</small>
                        <p><b>Precio Total: ${prod.precio * prod.cantidad}</b></p>
                        <button 
                            onClick={ () => eliminarProducto(prod.id)} 
                            className='botonEliminar'>
                                
                            <BsFillTrash3Fill/>Eliminar
                        </button>
                        <hr />
                    </div>
                ))
            }
            <h3>TOTAL ${ total() }</h3>
            <button onClick={vaciarCarrito} className='vaciarCarrito'>VACIAR CARRITO</button>
            <Link className="botonCompraCarrito" to="/Checkout">Comprar Carrito</Link>
        </div>
    )
}