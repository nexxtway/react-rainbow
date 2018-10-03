/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from './../RenderIf';
import { uniqueId } from './../../libs/utils';
import { Consumer } from './../Accordion/context';
import ButtonIcon from './../ButtonIcon';
import RightArrow from './rightArrow';
import isInArray from './check-is-in-array';
import './styles.css';

class AccordionItem extends Component {
    constructor(props) {
        super(props);
        this.accordionDetailsId = uniqueId('accordion-details');
        this.name = uniqueId('accordion-section');
        this.handleSelect = this.handleSelect.bind(this);
    }

    getContainerClassNames() {
        const { className, disabled } = this.props;
        return classnames('rainbow-accordion_container', {
            'rainbow-accordion_container--disabled': disabled,
        }, className);
    }

    getTabIndex() {
        const { disabled } = this.props;
        if (disabled) {
            return -1;
        }
        return undefined;
    }

    resolveNamesWhenMultiple() {
        const { name, activeNames } = this.props;
        const nameToToggle = name || this.name;

        if (activeNames === undefined) {
            return [nameToToggle];
        }
        if (isInArray(activeNames, nameToToggle)) {
            return activeNames;
        }
        return activeNames.concat([nameToToggle]);
    }

    resolveNames() {
        const { name, multiple } = this.props;
        const nameToToggle = name || this.name;
        if (multiple) {
            return this.resolveNamesWhenMultiple();
        }
        return nameToToggle;
    }

    handleSelect(event) {
        const { disabled, privateOnToggleSection } = this.props;
        if (!disabled) {
            privateOnToggleSection(event, this.resolveNames());
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

        return (
            <li className={this.getContainerClassNames()} style={style} disabled={disabled}>
                <section>
                    <div className="rainbow-accordion_summary">
                        <h3 className="rainbow-accordion_summary-heading">
                            <button
                                className="rainbow-accordion_summary-button-heading"
                                tabIndex={this.getTabIndex()}
                                aria-controls={this.accordionDetailsId}
                                aria-expanded={this.isSelected}
                                onClick={this.handleSelect}>
                                <RenderIf isTrue={!!icon}>
                                    <span className="rainbow-accordion_summary-icon" aria-hidden="true">
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
                            className="rainbow-accordion_summary-button"
                            size="x-small"
                            disabled={disabled}
                            onClick={this.handleSelect}
                            assistiveText={assistiveText}
                            aria-haspopup="true"
                            icon={
                                <RightArrow isExpanded={this.isExpanded()} disabled={disabled} />
                            } />
                    </div>
                    <RenderIf isTrue={this.isExpanded()}>
                        <div
                            aria-hidden={!this.isExpanded()}
                            className="rainbow-accordion_content"
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

AccordionItem.propTypes = {
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
    /** The text to be displayed inside the AccordionSection. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The icon to show at the left in the label. */
    icon: PropTypes.node,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** The name is used during Accordion's onSelect
    * event to determine which AccordionSection was clicked. */
    name: PropTypes.string,
};

AccordionItem.defaultProps = {
    className: undefined,
    style: undefined,
    assistiveText: undefined,
    disabled: false,
    children: null,
    label: undefined,
    icon: null,
    name: undefined,
};
