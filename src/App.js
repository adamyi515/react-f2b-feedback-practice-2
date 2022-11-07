import React from 'react';

// Components
import Header from './components/shared/header/header.component';
import FeedbackList from './components/feedback-list/feedback-list.component';

// Context API
import { FeedbackProvider } from './context/feedback.context';

const App = () => {
    return(
        <FeedbackProvider>
            <Header />
            <FeedbackList />
        </FeedbackProvider>
    )
}

export default App;