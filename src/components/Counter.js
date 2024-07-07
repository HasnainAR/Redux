import react from "react";
import { useDispatch, useSelector } from 'react-redux';

const Count =() =>{
    const count = useSelector((state) => state.counter);
    return (
        <div>
            <h2>count: {count}</h2>
        </div>
    )
}

export default Count;