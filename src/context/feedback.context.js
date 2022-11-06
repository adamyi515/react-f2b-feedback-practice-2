import { createContext, useReducer, useEffect } from "react";

// Reducer
import { feedbackReducer } from './feedback.reducer';
// Actions
import { getFeedbacks } from './feedback.actions';



export const feedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
    const initialState = {
        feedbacks: [],
        feedback: {
            isEditing: false,
            item: {}
        }
    }
    const [state, dispatch] = useReducer(feedbackReducer, initialState);

    useEffect(() => {
        callGetFeedbackAPI();
    }, []);

    const callGetFeedbackAPI = async () => {
        const data = await getFeedbacks();
        dispatch({ type: 'GET_FEEDBACKS', payload: data});
    }


    return(
        <feedbackContext.Provider value={{
            ...state,
            dispatch
        }}>
            { children }
        </feedbackContext.Provider>
    )
}