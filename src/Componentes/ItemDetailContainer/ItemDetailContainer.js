import ItemDetail from '../ItemDetail/ItemDetail.js';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { pedirDatosProductoId } from '../helpers/PedirDatos';


export const ItemDetailContainer= () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        pedirDatosProductoId( Number(itemId) )
        .then((resp) => {
            setItem(resp)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return(
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item} />
            }
        </div>
    )
}



// export const ItemDetailContainer= () => {

//     const [itemDetail, setItemDetail] = useState(null);
//     const [loading, setLoading] = useState(true)
    
//     useEffect(() => {
//         const getData = new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve(detalle)
//                 }, 2000);
//             });
//             getData.then(res => setData(res));
//     }, [])
    

//     return(
//         <ItemDetail data={data}/>
//     )
// }

// export default ItemDetailContainer;