import { useState } from 'react';
import './ItemCount.scss';


export const ItemCount = () => {

        let [counter, setCounter] = useState(0)                         
        const handleClickMas = () => {
            setCounter(counter + 1);
        }

        [counter, setCounter] = useState(0)
        const handleClickMenos = () => {
            setCounter(counter - 1);
        }

        
        
    return (
        <div className="container my-5">
            <button onClick={handleClickMas} className="btn btn-primary"><i class="bi bi-plus-lg"></i></button>
            <p><b /> {counter} </p>
            <button onClick={handleClickMenos} className="btn btn-primary"><i class="bi bi-dash-lg"></i></button>
        </div>
    )
}