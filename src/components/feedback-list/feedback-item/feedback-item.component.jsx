import React from 'react';
import './feedback-item.style.css';

const FeedbackItem = ({ item }) => {
    const { rating, text, id } = item;
    return(
        <div className='feedback-item'>
            <div className='feedback-item__rating'>
                <p>{ rating }</p>
            </div>
            <div className='feedback-item__btns'>
                <button className='btn'>EDIT</button>
                <button className='btn'>DELETE</button>
            </div>
            <p>
                { item.text }
            </p>
        </div>
    )
}

export default FeedbackItem;