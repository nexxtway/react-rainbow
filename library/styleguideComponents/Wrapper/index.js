import React from 'react';
import PropTypes from 'prop-types';
import Application from './../../../src/components/Application';

export default function Wrapper({ children }) {
    return (
        <Application>
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

