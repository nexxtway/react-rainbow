/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

export default function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Wrapper.defaultProps = {
    children: [],
};
