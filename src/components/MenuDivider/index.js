import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
* The MenuDivider are used for separate content inside the ButtonMenu.
*/
export default function MenuDivider(props) {
    const {
        variant,
        className,
        style,
    } = props;

    const getVariantClassNames = () => {
        if (variant === 'default') {
            return 'slds-has-divider_top';
        }
        return 'slds-has-divider_top-space';
    };

    const getClassNames = () => classnames(getVariantClassNames(), className);

    return (
        <li className={getClassNames()} style={style} role="separator" />
    );
}

MenuDivider.propTypes = {
    /** The variant changes the margin of the divider. Valid values are default, and space.
    * This value defaults to default. */
    variant: PropTypes.oneOf([
        'default', 'space',
    ]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

MenuDivider.defaultProps = {
    variant: 'default',
    className: undefined,
    style: undefined,
};
