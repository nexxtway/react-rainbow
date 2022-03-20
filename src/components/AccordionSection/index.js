/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import { Consumer } from '../Accordion/context';
import RightArrow from './rightArrow';
import isInArray from './isInArray';
import removeItemFromArray from './removeItemFromArray';
import StyledLi from './styled/li';
import StyledSummary from './styled/summary';
import StyledHeading from './styled/heading';
import StyledIcon from './styled/icon';
import StyledContent from './styled/content';
import AssistiveText from '../AssistiveText';
import StyledSpan from './styled/span';

class AccordionItem extends Component {
    constructor(props) {
        super(props);
        this.accordionDetailsId = uniqueId('accordion-section-details');
        this.name = uniqueId('accordion-section');
        this.handleToggleSection = this.handleToggleSection.bind(this);
        this.handleFocusSection = this.handleFocusSection.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.containerRef = React.createRef();
        this.buttonRef = React.createRef();
    }

    componentDidMount() {
        const { privateRegisterAccordionSection, disabled } = this.props;
        if (!disabled) {
            return setTimeout(
                () =>
                    privateRegisterAccordionSection({
                        name: this.getCurrentName(),
                        ref: this.containerRef.current,
                        focusButton: () => this.buttonRef.current.focus(),
                    }),
                0,
            );
        }
        return null;
    }

    componentWillUnmount() {
        const { privateUnregisterAccordionSection } = this.props;
        privateUnregisterAccordionSection(this.getCurrentName());
    }

    getCurrentName() {
        const { name } = this.props;
        return name || this.name;
    }

    resolveActiveNamesWhenMultiple() {
        const { activeNames } = this.props;
        const nameToToggle = this.getCurrentName();

        if (activeNames === undefined) {
            return [nameToToggle];
        }
        if (isInArray(activeNames, nameToToggle)) {
            return removeItemFromArray(activeNames, nameToToggle);
        }
        return activeNames.concat([nameToToggle]);
    }

    resolveActiveNames() {
        const { multiple, activeNames } = this.props;
        const nameToToggle = this.getCurrentName();
        if (multiple) {
            return this.resolveActiveNamesWhenMultiple();
        }
        if (nameToToggle === activeNames) {
            return '';
        }
        return nameToToggle;
    }

    handleToggleSection(event) {
        const { disabled, privateOnToggleSection } = this.props;
        if (!disabled) {
            privateOnToggleSection(event, this.resolveActiveNames());
        }
    }

    handleFocusSection() {
        const { disabled, privateOnFocusSection } = this.props;
        if (!disabled) {
            privateOnFocusSection(this.getCurrentName());
        }
    }

    handleKeyPressed(event) {
        const { disabled, privateOnKeyPressed } = this.props;
        if (!disabled) {
            privateOnKeyPressed(event);
        }
    }

    isExpanded() {
        const { activeNames, multiple } = this.props;
        const currentName = this.getCurrentName();
        if (multiple && Array.isArray(activeNames)) {
            return isInArray(activeNames, currentName);
        }
        return activeNames === currentName;
    }

    render() {
        const {
            style,
            disabled,
            children,
            label,
            icon,
            assistiveText,
            className,
            variant,
        } = this.props;

        const isExpanded = this.isExpanded();

        return (
            <StyledLi
                data-id="accordion-section-li"
                className={className}
                style={style}
                disabled={disabled}
                variant={variant}
                isExpanded={isExpanded}
                ref={this.containerRef}
            >
                <StyledSummary
                    data-id="accordion-section-summary"
                    isExpanded={isExpanded}
                    variant={variant}
                    disabled={disabled}
                    onClick={this.handleToggleSection}
                    onFocus={this.handleFocusSection}
                    onKeyDown={this.handleKeyPressed}
                    aria-controls={this.accordionDetailsId}
                    aria-expanded={isExpanded}
                    type="button"
                    ref={this.buttonRef}
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
                    id={this.accordionDetailsId}
                >
                    {children}
                </StyledContent>
            </StyledLi>
        );
    }
}

/**
 * An AccordionSection is single section that is nested in the Accordion component.
 * @category Layout
 */
export default function AccordionSection(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Consumer>{context => <AccordionItem {...props} {...context} />}</Consumer>;
}

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
