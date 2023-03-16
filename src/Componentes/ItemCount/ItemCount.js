import './ItemCount.scss';


export const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {
                         
        const handleClickMas = () => {
            cantidad < max && setCantidad(cantidad + 1)
        }

        const handleClickMenos = () => {
            cantidad > 1 && setCantidad(cantidad - 1)
        }
 
    return (
        <div className="container my-5">
            <button onClick={handleClickMenos} className="btn btn-primary"><i className="bi bi-dash-lg"></i></button>
            <p><b /> {cantidad} </p>
            <button onClick={handleClickMas} className="btn btn-primary"><i className="bi bi-plus-lg"></i></button>
            <br/>
            <button onClick={handleAgregar} className='botonAgregar btn btn-dark my-1'>Agregar al carrito</button>
        </div>
    )
}