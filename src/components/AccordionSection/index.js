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
        this.handleSelect = this.handleSelect.bind(this);
    }

    getContainerClassNames() {
        const { className, disabled } = this.props;
        return classnames('rainbow-accordion-section_container', {
            'rainbow-accordion-section_container--disabled': disabled,
        }, className);
    }

    getTabIndex() {
        const { disabled } = this.props;
        if (disabled) {
            return -1;
        }
        return undefined;
    }

    resolveActiveNamesWhenMultiple() {
        const { name, activeNames } = this.props;
        const nameToToggle = name || this.name;

        if (activeNames === undefined) {
            return [nameToToggle];
        }
        if (isInArray(activeNames, nameToToggle)) {
            return removeItemFromArray(activeNames, nameToToggle);
        }
        return activeNames.concat([nameToToggle]);
    }

    resolveActiveNames() {
        const { name, multiple, activeNames } = this.props;
        const nameToToggle = name || this.name;
        if (multiple) {
            return this.resolveActiveNamesWhenMultiple();
        }
        if (nameToToggle === activeNames) {
            return '';
        }
        return nameToToggle;
    }

    handleSelect(event) {
        const { disabled, privateOnToggleSection } = this.props;
        if (!disabled) {
            privateOnToggleSection(event, this.resolveActiveNames());
        }
    }

    isExpanded() {
        const { activeNames, name, multiple } = this.props;
        const currentName = name || this.name;
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
            <li className={this.getContainerClassNames()} style={style} disabled={disabled}>
                <section>
                    <div className="rainbow-accordion-section_summary">
                        <h3 className="rainbow-accordion-section_summary-heading">
                            <button
                                className="rainbow-accordion-section_summary-button-heading"
                                tabIndex={this.getTabIndex()}
                                aria-controls={this.accordionDetailsId}
                                aria-expanded={isExpanded}
                                onClick={this.handleSelect}>
                                <RenderIf isTrue={!!icon}>
                                    <span className="rainbow-accordion-section_summary-icon" aria-hidden="true">
                                        {icon}
                                    </span>
                                </RenderIf>
                                <RenderIf isTrue={!!label}>
                                    <span title="Accordion Label">
                                        {label}
                                    </span>
                                </RenderIf>
                            </button>
                        </h3>

                        <ButtonIcon
                            className="rainbow-accordion-section_summary-button"
                            size="x-small"
                            disabled={disabled}
                            onClick={this.handleSelect}
                            assistiveText={assistiveText}
                            ariaHaspopup
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
