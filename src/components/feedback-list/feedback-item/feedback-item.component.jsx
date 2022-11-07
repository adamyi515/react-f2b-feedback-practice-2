import React, { useContext } from 'react';
import './feedback-item.style.css';

// Context API
import { deleteFeedbackItem } from '../../../context/feedback.actions';
import { feedbackContext } from '../../../context/feedback.context';

const FeedbackItem = ({ item }) => {
    const { rating, text, id } = item;
    const { dispatch } = useContext(feedbackContext);

    // EVENT HANDLERS /////////////////////////////////////////////////
    const handleDeleteFeedbackItem = async () => {
        if(window.confirm('Are you sure you want to delete?')) {
            await deleteFeedbackItem(id);
            dispatch({ type: 'DELETE_FEEDBACK', payload: id })
        }
    }

    return(
        <div className='feedback-item'>
            <div className='feedback-item__rating'>
                <p>{ rating }</p>
            </div>
            <div className='feedback-item__btns'>
                <button className='feedback-item__btn'>EDIT</button>
                <button className='feedback-item__btn' onClick={handleDeleteFeedbackItem}>DELETE</button>
            </div>
            <p>
                { text }
            </p>
        </div>
    )
}

export default FeedbackItem;