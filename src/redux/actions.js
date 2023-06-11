export const startTyping = () => {
    return {
        type: 'START_TYPING',
    };
};

export const stopTyping = () => {
    return {
        type: 'STOP_TYPING',
    };
};

export const updateKeyCount = () => {
    return {
        type: 'UPDATE_KEY_COUNT',
    };
};

export const updateAccuracy = (isCorrect) => {
    return {
        type: 'UPDATE_ACCURACY',
        payload: isCorrect,
    };
};
