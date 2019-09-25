import React from 'react';
import PropTypes from 'prop-types';
import TruncatedText from '../Structural/truncatedText';

export default function Content(props) {
    const { label, children } = props;

    if (children || children === 0) {
        return <TruncatedText>{children}</TruncatedText>;
    }
    return <TruncatedText>{label}</TruncatedText>;
}

Content.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
};

Content.defaultProps = {
    label: null,
    children: null,
};
