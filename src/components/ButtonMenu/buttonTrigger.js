import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import ButtonIcon from './../ButtonIcon';
import RenderIf from '../RenderIf';
import LeftIcon from './styled/styledLeftIcon';
import RightIcon from './styled/styledRightIcon';

const ButtonTrigger = React.forwardRef((props, ref) => {
    const { label, icon, iconPosition, ...rest } = props;
    const hasLeftIcon = icon && iconPosition !== 'right';
    const hasRightIcon = icon && iconPosition === 'right';

    if (label) {
        return (
            <Button {...rest} ref={ref}>
                <RenderIf isTrue={hasLeftIcon}>
                    <LeftIcon>{icon}</LeftIcon>
                </RenderIf>
                {label}
                <RenderIf isTrue={hasRightIcon}>
                    <RightIcon>{icon}</RightIcon>
                </RenderIf>
            </Button>
        );
    }
    return <ButtonIcon {...rest} icon={icon} ref={ref} />;
});

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

export default ButtonTrigger;
