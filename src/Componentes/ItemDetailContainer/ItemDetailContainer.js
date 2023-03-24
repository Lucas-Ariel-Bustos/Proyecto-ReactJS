import ItemDetail from '../ItemDetail/ItemDetail.js';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { pedirDatosProductoId } from '../helpers/PedirDatos';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Config.js';


export const ItemDetailContainer= () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const docReferencia = doc(db, "productos", itemId)
        getDoc(docReferencia)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                }) 
            })
            .finally(() => setLoading(false))
       
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