const initialState = {
    isTyping: false,
    keyCount: 0,
    correctCount: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TYPING':
            return { ...state, isTyping: true };
        case 'STOP_TYPING':
            return { ...state, isTyping: false };
        case 'UPDATE_KEY_COUNT':
            return { ...state, keyCount: state.keyCount + 1 };
        case 'UPDATE_ACCURACY':
            return {
                ...state,
                correctCount: action.payload ? state.correctCount + 1 : state.correctCount,
            };
        default:
            return state;
    }
};

export default reducer;
