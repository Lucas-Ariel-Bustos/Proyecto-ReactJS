import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

//FALTA IMPORTAR EL SCSS


export const ItemDetail = ({ data }) => {
    return(
        <div className="itenDetailContainer">
            <h1><b>Detalles</b></h1>
            <img className="detailImg" src={data.imagen}></img>
            <p className="detailText">{data.descripcion}</p>
            <p>Precio: ${data.precio}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemDetail