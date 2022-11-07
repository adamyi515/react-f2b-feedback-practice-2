const getFeedbacks = async () => {
    const response = await fetch(`http://localhost:4000/feedback`);
    const data = response.json();
    return data;
}

const addFeedbackItem = async (feedbackItem) => {
    const response = await fetch(`http://localhost:4000/feedback`, {
        method: 'POST',
        body: JSON.stringify(feedbackItem),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = response.json();
    return data;
}

const updateFeedbackItem = async (updatedFeedbackItem, id) => {
    const response = await fetch(`http://localhost:4000/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFeedbackItem)
    });

    const data = await response.json();
    return data;
}

const deleteFeedbackItem = async (id) => {
    await fetch(`http://localhost:4000/feedback/${id}`, {
        method: 'DELETE'
    });
}


export {
    getFeedbacks,
    addFeedbackItem,
    deleteFeedbackItem,
    updateFeedbackItem
};