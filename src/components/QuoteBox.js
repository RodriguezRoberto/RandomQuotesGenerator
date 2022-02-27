import React from 'react';

// importing hook
import { useState } from 'react';

// importing list of the quotes and its data
import quotes from '../quotes.json';

// importing list of the colors for the background 
import colorList from '../colorList.json'

// creating component 
const QuoteBox = () => {

    // setting the first random background color when page gets loaded 
    let colorPicker = Math.floor( Math.random(  ) * 15 )
    // setting the first random index of the list of quotes when page gets loaded 
    let indexPicker = Math.floor( Math.random(  ) * 102 )

    // using the first random background color as default 
    const [ color, setColor ] = useState( colorPicker )
    // using the first random index as default 
    const [ index, setIndex ] = useState( indexPicker )

    // creating the function to change the quote randomly and the background color randomly as well
    const changeContent = (  ) => {

        // redefining the background color randomly when function gets executed 
        colorPicker = Math.floor( Math.random(  ) * 15 )
        // redefining the quote index randomly when function gets executed 
        indexPicker = Math.floor( Math.random(  ) * 102 )

        // applying changes 
        setIndex( indexPicker )
        setColor( colorPicker )
    }

    // setting the random color picked before as background and reusing its value for font color  
    document.body.style.backgroundColor = colorList[ color ];
    document.body.style.color = document.body.style.backgroundColor;

    return (
        <div className='quote-box'>
            <div className='quote'>
                <div className='quotation-mark'>
                    <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className='quote-content'>
                    <p>{ quotes[ index ].quote }</p>
                </div>
            </div>
            <div className='author'>
                <p>{ quotes[ index ].author }</p>
            </div>
            <div className='button' onClick={ changeContent }>
                <i className="fa-solid fa-circle-chevron-right"></i>
            </div>
        </div>
    );
};

export default QuoteBox;