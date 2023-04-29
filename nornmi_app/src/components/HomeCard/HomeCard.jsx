import React from 'react';
import "./HomeCard.css";

const HomeCard = (props) => {
    return (
        <div>
            <div className="CardContainer">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
            <div className='OtherCardContainer'>
                <div>
                    <h2></h2>
                </div>
            </div>
        </div>
    )
}

export default HomeCard



