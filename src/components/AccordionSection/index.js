/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from './../RenderIf';
import { uniqueId } from './../../libs/utils';
import { Consumer } from './../Accordion/context';
import ButtonIcon from './../ButtonIcon';
import RightArrow from './rightArrow';
import isInArray from './is-in-array';
import removeItemFromArray from './remove-item-from-array';
import './styles.css';

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
            return setTimeout(() => privateRegisterAccordionSection({
                name: this.getCurrentName(),
                ref: this.containerRef.current,
                focusButtonIcon: this.buttonRef.current.focus.bind(this),
            }), 0);
        }
        return null;
    }

    componentWillUnmount() {
        const { privateUnregisterAccordionSection } = this.props;
        privateUnregisterAccordionSection(this.getCurrentName());
    }

    getContainerClassNames() {
        const { className, disabled } = this.props;
        return classnames('rainbow-accordion-section_container', {
            'rainbow-accordion-section_container--disabled': disabled,
        }, className);
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
        } = this.props;

        const isExpanded = this.isExpanded();

        return (
            <li
                className={this.getContainerClassNames()}
                style={style}
                disabled={disabled}
                ref={this.containerRef}>
                <section>
                    <div className="rainbow-accordion-section_summary">
                        <h3 className="rainbow-accordion-section_summary-heading">
                            <RenderIf isTrue={!!icon}>
                                <span className="rainbow-accordion-section_summary-icon">
                                    {icon}
                                </span>
                            </RenderIf>
                            <RenderIf isTrue={!!label}>
                                <span title="Accordion Label">
                                    {label}
                                </span>
                            </RenderIf>
                        </h3>

                        <ButtonIcon
                            size="small"
                            disabled={disabled}
                            onClick={this.handleToggleSection}
                            onFocus={this.handleFocusSection}
                            onKeyDown={this.handleKeyPressed}
                            assistiveText={assistiveText}
                            ariaControls={this.accordionDetailsId}
                            ariaExpanded={isExpanded}
                            ref={this.buttonRef}
                            icon={
                                <RightArrow isExpanded={isExpanded} disabled={disabled} />
                            } />
                    </div>
                    <RenderIf isTrue={isExpanded}>
                        <div
                            aria-hidden={!isExpanded}
                            className="rainbow-accordion-section_content"
                            id={this.accordionDetailsId}>
                            {children}
                        </div>
                    </RenderIf>
                </section>
            </li>
        );
    }
}

export default function AccordionSection(props) {
    return (
        <Consumer>
            {context => <AccordionItem {...props} {...context} />}
        </Consumer>
    );
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
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The icon to show at the left of the label. */
    icon: PropTypes.node,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** The name is used to determine which AccordionSection was clicked.
    * If `name` is not passed it will be generated. */
    name: PropTypes.string,
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
};
