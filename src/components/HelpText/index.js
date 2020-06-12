import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier, useDisclosure } from '../../libs/hooks';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import { ESCAPE_KEY } from '../../libs/constants';
import {
    StyledTooltip,
    StyledTitle,
    StyledIconContainer,
    StyledText,
    StyledButton,
} from './styled';
import {
    ErrorIcon,
    InfoIcon,
    QuestionIcon,
    WarningIcon,
    ErrorInverseIcon,
    InfoInverseIcon,
    QuestionInverseIcon,
    WarningInverseIcon,
} from './icons';

const iconMap = {
    question: <QuestionIcon />,
    info: <InfoIcon />,
    error: <ErrorIcon />,
    warning: <WarningIcon />,
};

const inverseIconMap = {
    question: <QuestionInverseIcon />,
    info: <InfoInverseIcon />,
    error: <ErrorInverseIcon />,
    warning: <WarningInverseIcon />,
};

/**
 * HelpText is a popup that displays information related to an element.
 */
const HelpText = props => {
    const { id, title, text, variant, icon: iconProp, tabIndex, className, style } = props;

    const triggerRef = useRef();
    const helpTextId = useUniqueIdentifier('help-text');
    const { isOpen, open: openOverlay, close: closeOverlay } = useDisclosure(false);

    const handleKeyPressed = event => {
        if (event.keyCode === ESCAPE_KEY) {
            event.preventDefault();
            closeOverlay();
        }
    };

    const icon = iconProp || iconMap[variant] || iconMap.info;
    const inverseIcon = inverseIconMap[variant] || inverseIconMap.info;

    return (
        <div id={id} className={className} style={style}>
            <StyledButton
                ref={triggerRef}
                onMouseEnter={openOverlay}
                onMouseLeave={closeOverlay}
                onFocus={openOverlay}
                onBlur={closeOverlay}
                onKeyDown={handleKeyPressed}
                type="button"
                tabIndex={tabIndex}
                ariaLabelledby={helpTextId}
            >
                {icon}
            </StyledButton>
            <InternalOverlay
                isVisible={isOpen}
                render={() => {
                    return (
                        <StyledTooltip id={helpTextId} role="tooltip">
                            <RenderIf isTrue={!!title}>
                                <StyledTitle variant={variant}>
                                    <RenderIf isTrue={typeof title === 'string'}>
                                        <StyledIconContainer>{inverseIcon}</StyledIconContainer>
                                    </RenderIf>
                                    {title}
                                </StyledTitle>
                            </RenderIf>
                            <StyledText>{text}</StyledText>
                        </StyledTooltip>
                    );
                }}
                triggerElementRef={triggerRef}
            />
        </div>
    );
};

HelpText.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Displayed the title of component. */
    title: PropTypes.node,
    /** Displayed the help message */
    text: PropTypes.node.isRequired,
    /** The icon to customize the button. If undefined it is used by default based on the variant. */
    icon: PropTypes.node,
    /** The variant changes the appearance of the button. Accepted variants include question, info, error and warning */
    variant: PropTypes.oneOf(['question', 'info', 'error', 'warning']),
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

HelpText.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    title: undefined,
    text: undefined,
    icon: undefined,
    variant: 'info',
    tabIndex: undefined,
};

export default HelpText;
