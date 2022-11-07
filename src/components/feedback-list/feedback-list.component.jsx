import React, { useContext } from 'react';
import './feedback-list.style.css';

// Components
import FeedbackItem from './feedback-item/feedback-item.component';

// Context
import { feedbackContext } from '../../context/feedback.context';

const FeedbackList = () => {
    const { feedbacks } = useContext(feedbackContext);

    return(
        <div className='feedback-list'>
            {
                feedbacks.map((item) => (
                    <FeedbackItem key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default FeedbackList;