export const feedbackReducer = (state, action) => {
    switch(action.type){
        case 'GET_FEEDBACKS':
            return {
                ...state,
                feedbacks: action.payload
            };
        case 'ADD_FEEDBACK':
            return {
                ...state,
                feedbacks: [...state.feedbacks, action.payload]
            };
        case 'DELETE_FEEDBACK':
            return {
                ...state,
                feedbacks: [...state.feedbacks.filter((item) => item.id !== action.payload )]
            };
        default:
            return state;
    }
}