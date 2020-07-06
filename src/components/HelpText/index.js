import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier, useDisclosure, useWindowResize } from '../../libs/hooks';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import AssistiveText from '../AssistiveText';
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

const positionResolver = opts => InternalOverlay.defaultPositionResolver(opts, 0);

/**
 * HelpText is a popup that displays information related to an element.
 */
export default function HelpText(props) {
    const { id, title, text, variant, tabIndex, className, style } = props;

    const triggerRef = useRef();
    const helpTextId = useUniqueIdentifier('help-text');
    const [isFocused, setIsFocused] = useState(false);
    const isHoverTooltip = useRef(false);
    const isClickTooltip = useRef(false);
    const { isOpen, open: openOverlay, close: closeOverlay } = useDisclosure(false);

    useEffect(() => {
        if (isFocused) {
            openOverlay();
        } else {
            closeOverlay();
        }
    }, [closeOverlay, isFocused, openOverlay]);

    useWindowResize(() => closeOverlay(), isOpen);

    const handleBlur = () => {
        if (!isClickTooltip.current) {
            setIsFocused(false);
        }
    };

    const handleButtonMouseLeave = () => {
        if (!isFocused) {
            setTimeout(() => {
                if (!isHoverTooltip.current) closeOverlay();
            });
        }
    };

    const handleTooltipMouseDown = () => {
        isClickTooltip.current = true;
    };

    const handleTooltipMouseUp = () => {
        isClickTooltip.current = false;
        triggerRef.current.focus();
    };

    const handleTooltipMouseEnter = () => {
        isHoverTooltip.current = true;
    };

    const handleTooltipMouseLeave = () => {
        isHoverTooltip.current = false;
        if (!isFocused) {
            closeOverlay();
        }
    };

    const handleKeyPressed = event => {
        if (event.keyCode === ESCAPE_KEY) {
            event.preventDefault();
            closeOverlay();
        }
    };

    const icon = iconMap[variant] || iconMap.info;
    const inverseIcon = inverseIconMap[variant] || inverseIconMap.info;

    return (
        <>
            <StyledButton
                id={id}
                className={className}
                style={style}
                ref={triggerRef}
                onMouseEnter={openOverlay}
                onMouseLeave={handleButtonMouseLeave}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                onKeyDown={handleKeyPressed}
                type="button"
                tabIndex={tabIndex}
                ariaLabelledby={helpTextId}
            >
                {icon}
                <AssistiveText text={variant} />
            </StyledButton>
            <RenderIf isTrue={!!text}>
                <InternalOverlay
                    isVisible={isOpen}
                    positionResolver={positionResolver}
                    render={() => {
                        return (
                            <StyledTooltip
                                id={helpTextId}
                                role="tooltip"
                                onMouseDown={handleTooltipMouseDown}
                                onMouseUp={handleTooltipMouseUp}
                                onMouseEnter={handleTooltipMouseEnter}
                                onMouseLeave={handleTooltipMouseLeave}
                            >
                                <RenderIf isTrue={!!title}>
                                    <StyledTitle variant={variant}>
                                        <StyledIconContainer>{inverseIcon}</StyledIconContainer>
                                        {title}
                                    </StyledTitle>
                                </RenderIf>
                                <StyledText>{text}</StyledText>
                            </StyledTooltip>
                        );
                    }}
                    triggerElementRef={triggerRef}
                />
            </RenderIf>
        </>
    );
}

HelpText.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Displayed the title of component. */
    title: PropTypes.string,
    /** Displayed the help message */
    text: PropTypes.node,
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
    variant: 'info',
    tabIndex: undefined,
};
