import { collection, addDoc, doc, updateDoc, getDoc, or } from 'firebase/firestore'
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





// import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
// import { useContext, useState } from 'react'
// import { Link, Navigate } from 'react-router-dom'
// import { CartContext } from '../Context/CartContext'
// import { db } from '../Firebase/Config'
// import './Checkout.scss'


// export const Checkout = () => {

//     const { cart, total, vaciarCarrito } = useContext(CartContext)
//     const [orderId, setOrderId] = useState(null)

//     const [values, setValues] = useState({
//         nombre:'',
//         direccion:'',
//         email:''
//     })

//     const handleInpudChange = (e) => {

//         setValues({
//             ...values,
//             [e.target.name]: e.target.values
//         })
//     }

//     const handleSubmit = (e) => {
//         e.prevenDefault()

//         if(values.nombre.length <3) {
//             alert('NOMBRE INVÁLIDO!!!')
//             return
//         }   

//         if(values.direccion.length <3) {
//             alert('DIRECCIÓN INVALIDA!!!')
//             return
//         }

//         if(values.email.length <3) {
//             alert('EMAIL INVÁLIDO!!!')
//             return
//         }

//         const orden = {
//             cliente:values,
//             items:cart.map((prod) => ({id: prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.cantidad})),
//             total:total(),
//             fecha:new Date()
//         }

//         const productosRef = collection(db, 'productos')

//         cart.forEach((item) => {
//             const docRef = doc(productosRef, item.id)

//             getDoc(docRef)
//                 .then((doc) => {
//                     if (doc.data().stock >= item.cantidad) {
//                         updateDoc(docRef, {
//                             stock: doc.data().stock - item.cantidad
//                         })
//                     } else {
//                         alert("No Queda Stock del Producto que elegiste: " + item.nombre)
//                     }
//                 })
//         });

//         const orderRef = collection(db, 'orders')

//     addDoc(orderRef, orden)
//     .then((doc) => {
//         setOrderId(doc.id)
//         vaciarCarrito()
//     })
//     }

//     if(orderId) {
//         return (
//             <div className='container my-5'>
//                 <h3>Tu compra se registró con éxito</h3>
//                 <p>Guarda tu numero de orden: {orderId}</p>
//                 <Link className='btn btn-primary my-3' to='/'>Volver al inicio</Link>
//             </div>
//         )    
//     }
//     if (cart.length === 0) {
//         return <Navigate to='/' />
//     }

//     return (
//         <div className="contenedorCompra">
//             <h2>Compra</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     onChange={handleInpudChange}
//                     value={values.nombre}
//                     type={ 'text' }
//                     placeholder='Tu nombre'
//                     className="inputCarrito form-control my-2"
//                     name='nombre'
//                 />

//                 <input
//                     onChange={handleInpudChange}
//                     value={values.direccion}
//                     type={ 'text' }
//                     placeholder='Dirección'
//                     className='inputCarrito form-control my-2'
//                     name='direccion'
//                 />  

//                 <input
//                     onChange={handleInpudChange}
//                     value={values.email}
//                     type={ 'email' }
//                     placeholder='Tu email'
//                     className='inputCarrito form-control my-2'
//                     name='email'
//                 />
//             </form> 

//              <button className="enviar" type="submit">Enviar</button>
//         </div>
//     )
// }