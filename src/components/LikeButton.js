import React from 'react';
import { useState } from 'react'


function LikeButton(props) {
    
    // this creates a state variable and a setter function
    const [counter, setCounter] = useState(0)

    let color = 'yellow'
    const divStyle = {
        "backgroundColor": `${color}`,
      };

    const counterHandler = () => {
        console.log('click')
        
        // we pass the new value as a parameter to the setter
        setCounter(counter + 1)
    }

    return (
        <div >
          <header>
            <button style={divStyle} onClick={counterHandler}>{counter} Likes</button>
          </header>
        </div>
      )
}




export default LikeButton;