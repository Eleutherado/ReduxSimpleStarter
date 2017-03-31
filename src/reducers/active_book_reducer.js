//State is only the one that this reducer is resposnible for, not App state.
// This funciton should be pure.
export default (state = null, action) => {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state
}
