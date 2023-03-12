import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss';


export const ItemDetail = ({ item }) => {

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }
    return(
        <div className="itemDetailContainer">
            <h2 className="nombreDetail"><b>{item.nombre}</b></h2>
            <img className="detailImg" src={item.img}></img>
            <p className="detailText">{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <ItemCount/>
            <Link onClick={handleVolver} className='btn btn-primary'>Volver</Link>
        </div>
    )
}

export default ItemDetail