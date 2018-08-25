import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconSvg from './../IconSvg';
import Label from './label';
import AssistiveText from './../AssistiveText';
import { uniqueId } from './../../libs/utils';

const searchResultsId = uniqueId('search-results');

/**
* Represents an overflow of items from a preceding verticalNavigationSection,
* with the ability to toggle visibility.
*/
export default class VerticalSectionOverflow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: props.expanded,
        };
        this.toggleOverflow = this.toggleOverflow.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('slds-nav-vertical__overflow', className);
    }

    getOverflowClassName() {
        const { isExpanded } = this.state;
        if (isExpanded) {
            return 'slds-show';
        }
        return 'slds-hide';
    }

    toggleOverflow() {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const {
            expandedLabel,
            collapsedLabel,
            style,
            assistiveText,
            children,
        } = this.props;
        const { isExpanded } = this.state;

        return (
            <div className={this.getContainerClassNames()} style={style}>
                <button
                    className="slds-button slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow"
                    aria-controls={searchResultsId}
                    aria-expanded={isExpanded}
                    onClick={this.toggleOverflow}>

                    <IconSvg iconName="utility:chevronright" className="slds-button__icon slds-button__icon_left" />
                    <span className="slds-nav-vertical__action-text">
                        <Label
                            isExpanded={isExpanded}
                            expandedLabel={expandedLabel}
                            collapsedLabel={collapsedLabel} />

                        <AssistiveText text={assistiveText} />
                    </span>

                </button>
                <div data-id="vertical-overflow" id={searchResultsId} className={this.getOverflowClassName()}>
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
}

VerticalSectionOverflow.propTypes = {
    /** The label to show when the section is collapsed. */
    collapsedLabel: PropTypes.node,
    /** The label to show when the section is expanded. */
    expandedLabel: PropTypes.node,
    /** The state of the overflow. */
    expanded: PropTypes.bool,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
    * This prop that should not be visible in the documentation.
    * @ignore
    */
    children: PropTypes.node,
};

VerticalSectionOverflow.defaultProps = {
    expandedLabel: 'Show Less',
    collapsedLabel: 'Show More',
    expanded: false,
    className: undefined,
    style: undefined,
    assistiveText: undefined,
    children: null,
};
