const getFeedbacks = async () => {
    const response = await fetch(`http://localhost:4000/feedback`);
    const data = response.json();
    return data;
}


export {
    getFeedbacks
};