import React from 'react';

// Components
import Header from './components/shared/header/header.component';

// Context API
import { FeedbackProvider } from './context/feedback.context';

const App = () => {
    return(
        <FeedbackProvider>
            <Header />
        </FeedbackProvider>
    )
}

export default App;