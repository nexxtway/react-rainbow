import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './content';
import './styles.css';

/**
* Badges are labels which hold small amounts of information.
*/
export default function Badge(props) {
    const {
        className,
        style,
        label,
        children,
        variant,
    } = props;

    function getVariantClassNames() {
        if (variant === 'default') {
            return null;
        }
        return `rainbow-badge--${variant}`;
    }

    function getClassName() {
        return classnames('rainbow-badge', getVariantClassNames(), className);
    }

    if (children === null && label === null) {
        return null;
    }

    return (
        <span className={getClassName()} style={style}>
            <Content label={label}>
                {children}
            </Content>
        </span>
    );
}

Badge.propTypes = {
    /** The text to be displayed inside the badge. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The content of the badge. Used to render icon or text elements inside the badge.
    * Children takes precedence over label. */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    /** The variant changes the appearance of the badge. Accepted variants include default,
    * inverse, lightest, brand and outline-brand. This value defaults to default. */
    variant: PropTypes.oneOf([
        'default', 'inverse', 'lightest', 'outline-brand', 'brand',
    ]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Badge.defaultProps = {
    label: null,
    children: null,
    variant: 'default',
    className: undefined,
    style: undefined,
};
