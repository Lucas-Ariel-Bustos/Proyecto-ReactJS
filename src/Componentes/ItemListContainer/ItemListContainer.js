import { useContext, useEffect } from 'react';
import { useState } from 'react';
import './ItemListContainer.scss';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/Config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    const { categoryId }= useParams()
    
    useEffect(() => {
        
        const productosReferencia = collection(db, "productos")
        const q = categoryId
                    ? query(productosReferencia, where("category", "==", categoryId))
                    : productosReferencia
        
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                 return {...doc.data(), id: doc.id}
                })
                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })
  
    }, [categoryId])

    return (
        <div className="contenedor">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
            
        </div>
    )
}

export default ItemListContainer