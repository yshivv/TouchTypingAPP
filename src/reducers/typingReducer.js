import { combineReducers } from 'redux';
import {
    SET_INPUT_VALUE,
    SET_NEXT_KEYS,
    INCREMENT_KEYS_PRESSED,
    CALCULATE_ACCURACY,
    SET_TIMER,
    START_TYPING,
    STOP_TYPING,
} from '../store/actions/typingActions';

const initialState = {
    inputValue: '',
    nextKeys: '',
    keysPressed: 0,
    accuracy: 100,
    timer: null,
    isTyping: false,
};

const typingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload,
            };
        case SET_NEXT_KEYS:
            const availableKeys = 'asdfjkl;';
            const randomKey =
                availableKeys[Math.floor(Math.random() * availableKeys.length)];
            return {
                ...state,
                nextKeys: randomKey,
            };
        case INCREMENT_KEYS_PRESSED:
            return {
                ...state,
                keysPressed: state.keysPressed + 1,
            };
        case CALCULATE_ACCURACY:
            const newAccuracy = (
                (state.keysPressed / (state.keysPressed + 1)) *
                state.accuracy
            ).toFixed(2);
            return {
                ...state,
                accuracy: newAccuracy,
            };
        case SET_TIMER:
            return {
                ...state,
                timer: action.payload,
            };
        case START_TYPING:
            return {
                ...state,
                isTyping: true,
            };
        case STOP_TYPING:
            return {
                ...state,
                isTyping: false,
            };
        default:
            return state;
    }
};

export default typingReducer;
