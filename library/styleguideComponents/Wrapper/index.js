/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import Application from './../../../src/components/Application';
import './styles.css';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

export default function Wrapper({ children }) {
    return (
        <Provider store={store}>
            <Application className="react-rainbow-styleguide-wrapper-container">
                {children}
            </Application>
        </Provider>
    );
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
};

Wrapper.defaultProps = {
    children: [],
};
