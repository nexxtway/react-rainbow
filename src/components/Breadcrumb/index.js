/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import StyledAnchor from './styled/anchor';

/**
 * An item in the hierarchy path of the page the user is on.
 * @category Layout
 */
export default function Breadcrumb(props) {
    const { href, label, onClick, disabled, className, style } = props;

    return (
        <li className={className} style={style}>
            <StyledAnchor
                disabled={disabled}
                href={href}
                onClick={onClick}
                aria-disabled={!!disabled}
            >
                {label}
            </StyledAnchor>
        </li>
    );
}

Breadcrumb.propTypes = {
    /** The text label for the breadcrumb. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** The URL of the page that the breadcrumb goes to. */
    href: PropTypes.string,
    /** The action triggered when the breadcrumb is clicked. */
    onClick: PropTypes.func,
    /** Specifies that a breadcrumb element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Breadcrumb.defaultProps = {
    href: 'javascript:void(0);',
    onClick: () => {},
    disabled: false,
    className: undefined,
    style: undefined,
};
