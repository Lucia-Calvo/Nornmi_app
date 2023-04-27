import React from 'react';
import "./HomeCard.css";

const HomeCard = (props) => {
    return (
        <div>
            <div className="CardContainer">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default HomeCard



{/* <div>
    <h2>Our journey began when those closest to us fell ill.</h2>
    <p>We were told there was nothing more that could be done, that it was time to say goodbye. Except it wasn’t. There was a different path, an unexplored path that we knew we could navigate. So, we did. Now we’re inviting you to join us.</p>
</div> */} 