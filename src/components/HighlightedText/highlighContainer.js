import React from 'react';
import PropTypes, { bool, node } from 'prop-types';

export default function HighlighContainer({ children, isInline, className, style }) {
    if (isInline) {
        return (
            <span className={className} style={style}>
                {children}
            </span>
        );
    }
    return (
        <p className={className} style={style}>
            {children}
        </p>
    );
}

HighlighContainer.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: node,
    isInline: bool,
};

HighlighContainer.defaultProps = {
    className: undefined,
    style: undefined,
    children: undefined,
    isInline: false,
};
