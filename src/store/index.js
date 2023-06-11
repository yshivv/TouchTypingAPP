import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import typingSaga from './sagas/typingSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the root reducer and apply middleware
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);


// Run the root saga
sagaMiddleware.run(typingSaga);

export default store;
