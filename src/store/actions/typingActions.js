export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SET_NEXT_KEYS = 'SET_NEXT_KEYS';
export const INCREMENT_KEYS_PRESSED = 'INCREMENT_KEYS_PRESSED';
export const CALCULATE_ACCURACY = 'CALCULATE_ACCURACY';
export const SET_TIMER = 'SET_TIMER';
export const START_TYPING = 'START_TYPING';
export const STOP_TYPING = 'STOP_TYPING';

export const setInputValue = (value) => ({
    type: SET_INPUT_VALUE,
    payload: value,
});

export const setNextKeys = () => ({
    type: SET_NEXT_KEYS,
});

export const incrementKeysPressed = () => ({
    type: INCREMENT_KEYS_PRESSED,
});

export const calculateAccuracy = () => ({
    type: CALCULATE_ACCURACY,
});

export const setTimer = (value) => ({
    type: SET_TIMER,
    payload: value,
});

export const startTyping = () => ({
    type: START_TYPING,
});

export const stopTyping = () => ({
    type: STOP_TYPING,
});
