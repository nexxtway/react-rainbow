/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** The href of the anchor */
    href: PropTypes.string,
    /** Label for the breadcrumb */
    label: PropTypes.string.isRequired,
    /** Callback function fired when the breadcrumb is clicked */
    onClick: PropTypes.func,
};

Breadcrumb.defaultProps = {
    className: undefined,
    style: {},
    href: 'javascript:void(0);',
    onClick: () => {},
};
