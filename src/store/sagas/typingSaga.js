import { takeLatest, call, put } from 'redux-saga/effects';
import { SET_INPUT_VALUE, INCREMENT_KEYS_PRESSED, CALCULATE_ACCURACY, SET_TIMER, STOP_TIMER } from '../actions/typingActions';

// Utility function to delay for a specified number of milliseconds
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* handleInputValue(action) {
    yield put({ type: INCREMENT_KEYS_PRESSED });
    yield put({ type: CALCULATE_ACCURACY });
}

function* handleTimer() {
    for (let i = 300; i >= 0; i--) {
        yield put({ type: SET_TIMER, payload: i });

        if (i === 0) {
            yield put({ type: STOP_TIMER }); // Dispatch a STOP_TIMER action when the timer reaches zero
            break; // Stop the loop when the timer reaches zero
        }

        yield call(delay, 1000);
    }
}

export default function* typingSaga() {
    yield takeLatest(SET_INPUT_VALUE, handleInputValue);
    yield call(handleTimer);
}
