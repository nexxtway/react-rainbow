import React from 'react';
import PropTypes from 'prop-types';

export default function Content(props) {
    const { label, children } = props;

    if (children || children === 0) {
        return <span className="rainbow-badge_content--truncate">{children}</span>;
    }
    return <span className="rainbow-badge_content--truncate">{label}</span>;
}

Content.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
};

Content.defaultProps = {
    label: null,
    children: null,
};
