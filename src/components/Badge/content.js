import React from 'react';
import PropTypes from 'prop-types';
import Truncate from './truncate';

export default function Content(props) {
    const { label, children } = props;

    if (children || children === 0) {
        return <Truncate>{children}</Truncate>;
    }
    return <Truncate>{label}</Truncate>;
}

Content.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
};

Content.defaultProps = {
    label: null,
    children: null,
};
