const valueReducer = (state, action) => {
    switch (action) {
        case "Increment":
            return ++state;
        case "Decrement":
            return --state;

        default:
            return state;
    }
}
export default valueReducer;