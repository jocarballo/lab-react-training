import React from 'react';
import './IdCard.css';



function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props
    console.log(props)
    return (
        <div> 
            <div>
                <div>{firstName.toString()}</div>
                <div>{lastName.toString()}</div>
                <div>{gender.toString()}</div>
                <div>{height.toString()}</div>
                <div>{birth.toString()}</div>
                <div><img src={picture} className="picture" alt="pic"/></div>
            </div>
        </div>

    )
}





export default IdCard;