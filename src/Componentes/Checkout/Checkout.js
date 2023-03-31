import { collection, addDoc } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { db } from '../Firebase/Config'
import './Checkout.scss'


export const Checkout = () => {

    const { cart, total, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [values, setValues] = useState({})

    const handleInpudChange = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))

    }

    const handleSubmit = (e) => {


        const orden = {
            cliente:values,
            items:cart,
            total:total(),
            fecha:new Date()
        }


        const orderRef = collection(db, 'orders')

        addDoc(orderRef, orden)
        .then(({ id }) => {
            console.log(id);
            setOrderId(id)
            vaciarCarrito()
    })
    }
    if(orderId) {
        return (
            <div className='container my-5 containerCompraRealizada'>
                <h3>Tu compra se registró con éxito</h3>
                <p>Guarda tu numero de orden: {orderId}</p>
                <Link className='btn btn-primary my-3' to='/'>Volver al inicio</Link>
            </div>
        )    
    }
    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <div className="contenedorCompra">
            <h2>Compra</h2>
            <form>
                <input
                    onChange={handleInpudChange}
                    type='text' 
                    placeholder='Tu nombre'
                    className="inputCarrito form-control my-2"
                    name='nombre'
                />

                <input
                    onChange={handleInpudChange}
                    type='text' 
                    placeholder='Dirección'
                    className='inputCarrito form-control my-2'
                    name='direccion'
                />  

                <input
                    onChange={handleInpudChange}
                    type='email'
                    placeholder='Tu email'
                    className='inputCarrito form-control my-2'
                    name='email'
                />
            </form> 
             <button onClick={handleSubmit} className="enviar" type="submit">Enviar</button>

        </div>
    )
}