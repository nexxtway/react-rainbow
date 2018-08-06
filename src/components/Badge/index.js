import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Badge(props) {
    const {
        className,
        style,
        label,
        variant,
    } = props;

    function getClassName() {
        return classnames('slds-badge', `slds-badge_${variant}`, className);
    }

    return (
        <span className={getClassName()} style={style}>
            {label}
        </span>
    );
}

Badge.propTypes = {
     /** The class name of the root element. */
    className: PropTypes.string,
     /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Label for the badge. It is required. */
    label: PropTypes.string.isRequired,
    /** The badge variant. */
    variant: PropTypes.oneOf([
        'default', 'inverse', 'lightest',
    ]),
};

Badge.defaultProps = {
    className: undefined,
    style: {},
    variant: 'default',
};
