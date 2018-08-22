import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import OpenCloseLabel from './label';

class VerticalSectionOverflow extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: props.expanded };
        this.toggleOverflow = this.toggleOverflow.bind(this);
    }

    componentWillReceiveProps(prevProps, newProps) {
        if (prevProps.expanded !== newProps.expanded) {
            this.setState({ expanded: newProps.expanded });
        }
    }

    toggleOverflow() {
        this.setState({ expanded: !this.state.expanded });
    }

    isExpanded() {
        return this.state.expanded;
    }

    render() {
        const { expandedLabel, collapsedLabel, className, style, children } = this.props;
        const { expanded } = this.state;
        const containerClassName = classnames('slds-nav-vertical__overflow', className);
        const overflowSectionClassName = classnames({ 'slds-hide': !expanded, 'slds-show': expanded });
        return (
            <div className={containerClassName} style={style}>
                <button
                    className="slds-button slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow"
                    aria-controls="search-results"
                    aria-expanded="false"
                    onClick={this.toggleOverflow}>

                    <Icon iconName="utility-sprite:chevronright" />
                    <OpenCloseLabel
                        expandedLabel={expandedLabel}
                        collapsedLabel={collapsedLabel}
                        expanded={expanded} />
                </button>
                <div id="search-results" className={overflowSectionClassName}>
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
}

VerticalSectionOverflow.propTypes = {
    /** The label to show when the section is collapsed */
    expandedLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** The label to show when the section is expanded */
    collapsedLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** The state of the overflow */
    expanded: PropTypes.bool,
    /** The content body section */
    children: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

VerticalSectionOverflow.defaultProps = {
    expandedLabel: 'Show More',
    collapsedLabel: 'Show Less',
    expanded: false,
    className: '',
    style: {},
    children: null,
};

export default VerticalSectionOverflow;
