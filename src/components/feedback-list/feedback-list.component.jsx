import React, { useContext } from 'react';
import './feedback-list.style.css';

// Context
import { feedbackContext } from '../../context/feedback.context';

const FeedbackList = () => {
    const { feedbacks } = useContext(feedbackContext);

    return(
        <div className='feedback-list'>
        </div>
    )
}

export default FeedbackList;