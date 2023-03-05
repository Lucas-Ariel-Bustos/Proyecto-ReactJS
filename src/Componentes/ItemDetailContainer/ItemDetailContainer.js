import ItemDetail from '../ItemDetail/ItemDetail.js';
import React, {useState, useEffect} from 'react';

const detalle = { id: 1, imagen:"/Bajo1.jpg", descripcion: "Este es el Bajo N° 1 y tiene cuatro cuerdas", precio: 1000
}

export const ItemDetailContainer= () => {

    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(detalle)
                }, 2000);
            });
            getData.then(res => setData(res));
    }, [])
    

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;