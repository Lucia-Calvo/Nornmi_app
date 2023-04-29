import React, {useState} from 'react';

const ItemQuantitySelector = ({count, setCount, onAdd}) => {
    
    const restar = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    const sumar = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>
                <button className="btn btn-dark" onClick={restar}> - </button>
                <span className="btn ">{count}</span>
                <button className="btn btn-dark" onClick={sumar}> + </button>
            </div>
            <div>
            <button className="btn btn-dark" disabled={count === 0} onClick={() => onAdd(count)}> Add to Cart </button>
            </div>
        </div>
    
    )
}

export default ItemQuantitySelector;