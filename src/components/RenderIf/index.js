import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function RenderIf({ isTrue, children }) {
    if (isTrue) {
        return <Fragment>{children}</Fragment>;
    }
    return null;
}

RenderIf.propTypes = {
    isTrue: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RenderIf.defaultProps = {
    isTrue: false,
    children: [],
};
