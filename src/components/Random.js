import React from 'react';



function Random(props) {
    const { min, max } = props
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(props)
    return (
        <p>Random number between {min} and {max}: {randomNumber}</p>
    )
}


export default Random;