import { combineReducers } from 'redux';
import typingReducer from './typingReducer';
const store = createStore(rootReducer);

const rootReducer = combineReducers({
    typing: typingReducer,
    // Add other reducers here if you have any
});

export default rootReducer;
