
export const Item = ( {item} ) => {

    return (
        <div className='col-4 m-1'>
            <img src={item.img} alt={item.nombre}/>
            <h4>{item.nombre}</h4>
            <p>{item.descripcion}</p>
            <p>Precio: <strong>${item.precio}</strong></p>
            <button className='btn btn-primary'>Ver más</button>
        </div>
    )
}