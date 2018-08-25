/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
* An item in the hierarchy path of the page the user is on.
*/
export default function Breadcrumb(props) {
    const {
        href,
        label,
        onClick,
        className,
        style,
    } = props;
    const getLiClassNames = () => classnames(
        'slds-breadcrumb__item slds-text-title_caps',
        className,
    );

    return (
        <li className={getLiClassNames()} style={style}>
            <a href={href} onClick={onClick}>
                {label}
            </a>
        </li>
    );
}

Breadcrumb.propTypes = {
    /** The text label for the breadcrumb. */
    label: PropTypes.string.isRequired,
    /** The URL of the page that the breadcrumb goes to. */
    href: PropTypes.string,
    /** The action triggered when the breadcrumb is clicked. */
    onClick: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Breadcrumb.defaultProps = {
    href: 'javascript:void(0);',
    onClick: () => {},
    className: undefined,
    style: undefined,
};
