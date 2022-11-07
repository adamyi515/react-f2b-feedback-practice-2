import React, { useState } from 'react';
import './feedback-form.style.css';

const FeedbackForm = () => {
    const [text, setText] = useState('');

    const handleChange = ev => {
        setText(ev.target.value);
    }


    return(
        <div className='feedback-form'>
            <h1>How would you rate our service?</h1>
            <form>
                <input type='text' value={text} onChange={handleChange} className='feedback-form__input' />
                <button className='feedback-form__btn'>SEND</button>
            </form>
        </div>
    )
}

export default FeedbackForm;