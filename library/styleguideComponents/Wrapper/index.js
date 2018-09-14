import React from 'react';
import PropTypes from 'prop-types';
import Application from './../../../src/components/Application';
import './styles.css';

export default function Wrapper({ children }) {
    return (
        <Application className="react-rainbow-styleguide-wrapper-container">
            {children}
        </Application>
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

