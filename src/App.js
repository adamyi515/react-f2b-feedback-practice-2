import React from 'react';

// Components
import Header from './components/shared/header/header.component';
import FeedbackList from './components/feedback-list/feedback-list.component';
import FeedbackForm from './components/feedback-form/feedback-form.component';

// Context API
import { FeedbackProvider } from './context/feedback.context';

const App = () => {
    return(
        <FeedbackProvider>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackList />
            </div>
        </FeedbackProvider>
    )
}

export default App;