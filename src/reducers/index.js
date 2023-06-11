import { combineReducers } from 'redux';
import typingReducer from './typingReducer';

const rootReducer = combineReducers({
    typing: typingReducer,
    // Add other reducers here if needed
});

export default rootReducer;
