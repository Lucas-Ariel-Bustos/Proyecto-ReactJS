import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss';
import { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { LowStockMsg } from '../LowStockMsg/LowStockMsg';


export const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart }  = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }
    
    const handleAgregar = () => {
        const newItem = {
                    ...item,
                    cantidad
        }
       agregarAlCarrito(newItem)
    }

    return(
        <div className="itemDetailContainer">
            <h2 className="nombreDetail"><b>{item.nombre}</b></h2>
            <img className="detailImg" src={item.img}></img>
            <p className="detailText">{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            { item.stock <= 5 && <LowStockMsg stock={item.stock}/>} 
            <p><strong>
                {
                    item.stock === 1
                    ? `Queda una sola unidad de este producto`
                    : `Quedan ${item.stock} unidades de este producto`
                }
            </strong></p>
        

            {
                isInCart(item.id)
                ?   <Link to="/cart" className='btn btn-danger my-1'>Ir al Carrito</Link>
                :   <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }
            <Link onClick={handleVolver} className='btn btn-primary volver'>Volver</Link>
        </div>
    )
}

export default ItemDetail