import React from 'react';
import PropTypes from 'prop-types';

export default function Content(props) {
    const {
        className,
        label,
        children,
    } = props;

    if (children !== null && children !== undefined) {
        return (
            <span className={className}>
                {children}
            </span>
        );
    }
    return (
        <span className={className}>
            {label}
        </span>
    );
}

Content.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    className: PropTypes.string,
};

Content.defaultProps = {
    label: null,
    children: null,
    className: undefined,
};

