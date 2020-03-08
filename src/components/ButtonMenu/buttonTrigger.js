import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import RenderIf from '../RenderIf';

export default function ButtonTrigger(props) {
    const { label, icon, iconPosition, ...rest } = props;
    const hasLeftIcon = iconPosition !== 'right';

    return (
        <Button {...rest}>
            <RenderIf isTrue={hasLeftIcon}>{icon}</RenderIf>
            {label}
            <RenderIf isTrue={!hasLeftIcon}>{icon}</RenderIf>
        </Button>
    );
}

ButtonTrigger.propTypes = {
    /** The text to be displayed inside the button. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon to show if it is passed.
     * It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to label. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
};

ButtonTrigger.defaultProps = {
    label: undefined,
    icon: null,
    iconPosition: 'left',
};
