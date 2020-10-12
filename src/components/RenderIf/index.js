import React from 'react';
import PropTypes from 'prop-types';

export default function RenderIf({ isTrue, children }) {
    if (isTrue) {
        return <>{children}</>;
    }
    return null;
}

RenderIf.propTypes = {
    /** Indicates whether the component content is showed or not. If is set to true, then is showed the component content. */
    isTrue: PropTypes.any,
    /** The content of the component. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RenderIf.defaultProps = {
    isTrue: false,
    children: [],
};
