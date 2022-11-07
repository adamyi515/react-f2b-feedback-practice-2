import React, { useState, useContext, useEffect } from 'react';
import './feedback-form.style.css';

// Components
import FeedbackRatings from './feedback-rating/feedback-ratings.component';

// Context
import { feedbackContext } from '../../context/feedback.context';
import { addFeedbackItem, updateFeedbackItem } from '../../context/feedback.actions';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const { dispatch, feedback } = useContext(feedbackContext)

    // Lifecycle method ////////////////////////////////////////////////
    useEffect(() => {
        if(feedback.isEditing){
            setText(feedback.item.text);
            setRating(feedback.item.rating);
        }
    }, [feedback]);



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

        if(text.length > 10 && feedback.isEditing !== true){
            const newFeedbackItem = await addFeedbackItem(formData);
            dispatch({ type: 'ADD_FEEDBACK', payload: newFeedbackItem });
            setText('');
        }

        if(text.length > 10 && feedback.isEditing){
            const updatedFeedbackItem = await updateFeedbackItem(formData, feedback.item.id);
            dispatch({ type: 'UPDATE_FEEDBACK', payload: updatedFeedbackItem });
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