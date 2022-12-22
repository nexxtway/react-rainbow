import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { AccordionContext } from '../Accordion/context';
import RightArrow from './rightArrow';
import { getIsExpanded, isInArray } from './helpers';
import StyledLi from './styled/li';
import StyledSummary from './styled/summary';
import StyledHeading from './styled/heading';
import StyledIcon from './styled/icon';
import StyledContent from './styled/content';
import AssistiveText from '../AssistiveText';
import StyledSpan from './styled/span';
import useUniqueIdentifier from '../../libs/hooks/useUniqueIdentifier';

const contextDefault = {
    privateRegisterAccordionSection: () => {},
    privateUnregisterAccordionSection: () => {},
};

/**
 * An AccordionSection is single section that is nested in the Accordion component.
 * @category Layout
 */
const AccordionSection = props => {
    const {
        style,
        disabled,
        children,
        label,
        icon,
        assistiveText,
        className,
        variant,
        name,
    } = props;
    const {
        activeNames,
        multiple,
        privateOnToggleSection,
        privateOnFocusSection,
        privateRegisterAccordionSection,
        privateUnregisterAccordionSection,
        privateOnKeyPressed,
    } = useContext(AccordionContext) ?? contextDefault;

    const containerRef = useRef();
    const buttonRef = useRef();
    const uniqueName = useUniqueIdentifier('accordion-section');
    const accordionDetailsId = useUniqueIdentifier('accordion-section-details');

    const currentName = name || uniqueName;

    useEffect(() => {
        if (!disabled) {
            privateRegisterAccordionSection({
                id: currentName,
                ref: containerRef.current,
                focusButton: () => buttonRef.current.focus(),
            });
        }
        return () => {
            if (!disabled) {
                privateUnregisterAccordionSection(currentName);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isExpanded = getIsExpanded({ multiple, activeNames, currentName });

    const resolveActiveNamesWhenMultiple = () => {
        if (activeNames === undefined) {
            return [currentName];
        }
        if (isInArray(activeNames, currentName)) {
            return activeNames.filter(element => element !== currentName);
        }
        return [...activeNames, currentName];
    };

    const resolveActiveNames = () => {
        if (multiple) {
            return resolveActiveNamesWhenMultiple();
        }
        if (currentName === activeNames) {
            return '';
        }
        return currentName;
    };

    const handleToggleSection = event => {
        if (!disabled) {
            privateOnToggleSection(event, resolveActiveNames());
        }
    };

    const handleFocusSection = () => {
        if (!disabled) {
            privateOnFocusSection(currentName);
        }
    };

    const handleKeyPressed = event => {
        if (!disabled) {
            privateOnKeyPressed(event);
        }
    };

    return (
        <StyledLi
            data-id="accordion-section-li"
            className={className}
            style={style}
            disabled={disabled}
            variant={variant}
            isExpanded={isExpanded}
            ref={containerRef}
        >
            <StyledSummary
                data-id="accordion-section-summary"
                isExpanded={isExpanded}
                variant={variant}
                disabled={disabled}
                onClick={handleToggleSection}
                onFocus={handleFocusSection}
                onKeyDown={handleKeyPressed}
                aria-controls={accordionDetailsId}
                aria-expanded={isExpanded}
                type="button"
                ref={buttonRef}
            >
                <RightArrow isExpanded={isExpanded} disabled={disabled} />
                <AssistiveText text={assistiveText} />
                <StyledHeading disabled={disabled}>
                    <RenderIf isTrue={icon}>
                        <StyledIcon>{icon}</StyledIcon>
                    </RenderIf>
                    <RenderIf isTrue={label}>
                        <StyledSpan data-id="accordion-section-label">{label}</StyledSpan>
                    </RenderIf>
                </StyledHeading>
            </StyledSummary>
            <StyledContent
                data-id="accordion-section-content"
                aria-hidden={!isExpanded}
                isCollapsed={!isExpanded}
                id={accordionDetailsId}
            >
                {children}
            </StyledContent>
        </StyledLi>
    );
};

AccordionSection.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** Specifies that the AccordionSection element should be disabled.
     * This value defaults to false. */
    disabled: PropTypes.bool,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** The text to be displayed as the AccordionSection's label. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon to show at the left of the label. */
    icon: PropTypes.node,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** The name is used to determine which AccordionSection was clicked.
     * If `name` is not passed it will be generated. */
    name: PropTypes.string,
    /** The variant changes the appearance of the AccordionSection. */
    variant: PropTypes.oneOf(['default', 'error']),
};

AccordionSection.defaultProps = {
    className: undefined,
    style: undefined,
    assistiveText: undefined,
    disabled: false,
    children: null,
    label: undefined,
    icon: null,
    name: undefined,
    variant: 'default',
};

export default AccordionSection;
