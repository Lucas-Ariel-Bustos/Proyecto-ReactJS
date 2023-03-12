import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ( {item} ) => {

    return (
        <div className='col-3 m-3 item'>
            <img className='imagen' src={item.img} alt={item.nombre}/>
            <h4>{item.nombre}</h4>
            {/* <p>{item.descripcion}</p>
            <p>Precio: <strong>${item.precio}</strong></p> */}
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}