/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconSvg from '../IconSvg';
import { uniqueId } from '../../libs/utils';

export default class ExpandableSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: this.props.initiallyExpanded,
            id: uniqueId('expandable-section'),
        };

        this.handleExpanding = this.handleExpanding.bind(this);
    }

    getContainerClass() {
        return classnames('slds-section', {
            'slds-is-open': this.state.isExpanded,
        }, this.props.className);
    }

    handleExpanding() {
        const { onExpandOrCollapse } = this.props;
        const nextState = !this.state.isExpanded;

        this.setState({ isExpanded: nextState });
        onExpandOrCollapse(this.state);
    }

    renderHeader() {
        const { label } = this.props;
        const { id, isExpanded } = this.state;

        return (
            <h3 className="slds-section__title">
                <button aria-controls={id} aria-expanded={isExpanded} className="slds-button slds-section__title-action" onClick={this.handleExpanding}>
                    <IconSvg className="slds-section__title-action-icon slds-button__icon slds-button__icon_left" iconName="utility:switch" variant="bare" />
                    {label ? <span className="slds-truncate">{label}</span> : null}
                </button>
            </h3>
        );
    }

    render() {
        const { children, style } = this.props;

        return (
            <div className={this.getContainerClass()} style={style}>
                {this.renderHeader()}
                <div aria-hidden={!this.state.isExpanded} className="slds-section__content" id={this.state.id}>
                    {children}
                </div>
            </div>
        );
    }
}

ExpandableSection.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** It tells if the section is expanded initially. This value only change the
     state of the section one time */
    initiallyExpanded: PropTypes.bool,
    /** The title in header of the component */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** The content body section */
    children: PropTypes.node,
    /** The callback is fired when the section expand or collapse. Its invoked with
     the current state of the section like { isExpanded: true } */
    onExpandOrCollapse: PropTypes.func,
};

ExpandableSection.defaultProps = {
    initiallyExpanded: false,
    onExpandOrCollapse: () => {},
};
