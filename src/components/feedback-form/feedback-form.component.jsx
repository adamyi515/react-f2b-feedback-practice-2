import React, { useState, useContext } from 'react';
import './feedback-form.style.css';

// Components
import FeedbackRatings from './feedback-rating/feedback-ratings.component';

// Context
import { feedbackContext } from '../../context/feedback.context';
import { addFeedbackItem } from '../../context/feedback.actions';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const { dispatch, feedback } = useContext(feedbackContext)

    // EVENT HANDLERS ////////////////////////////////////////////////////////////////////////
    const handleChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = async ev => {
        ev.preventDefault();
        const formData = {
            text,
            rating
        };

        if(text.length > 10){
            const newFeedbackItem = await addFeedbackItem(formData);
            dispatch({ type: 'ADD_FEEDBACK', payload: newFeedbackItem });
            setText('');
        }

        
    }

    const selectRating = (getRating) => {
        setRating(getRating);
    }


    return(
        <div className='feedback-form'>
            <h1>How would you rate our service?</h1>
            <form onSubmit={handleSubmit}>
                <FeedbackRatings selectRating={selectRating} />
                <input type='text' value={text} onChange={handleChange} className='feedback-form__input' />
                <button className='feedback-form__btn'>SEND</button>
            </form>
        </div>
    )
}

export default FeedbackForm;