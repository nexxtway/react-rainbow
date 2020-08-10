import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import allReducers from './reducers';

export default createStore(
    combineReducers({
        ...allReducers,
        form: formReducer,
    }),
    applyMiddleware(thunk),
);
