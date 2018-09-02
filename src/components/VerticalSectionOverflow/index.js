import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from './../AssistiveText';
import { uniqueId } from './../../libs/utils';
import Description from './description';
import LeftIcon from './leftIcon';
import RightIcon from './rightIcon';
import './styles.css';

const searchResultsId = uniqueId('search-results');

/**
* Represents an overflow of items from a preceding VerticalNavigationSection,
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

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-nav-vertical-section-overflow-container', className);
    }

    getButtonClassName() {
        const { isExpanded } = this.state;
        return classnames(
            'rainbow-button rainbow-button_reset rainbow-nav-vertical__action',
            { 'rainbow-nav-vertical__action_overflow': isExpanded });
    }

    getOverflowClassName() {
        const { isExpanded } = this.state;
        if (isExpanded) {
            return 'rainbow-nav-certical-overflow-show';
        }
        return 'rainbow-nav-certical-overflow-hide';
    }

    toggleOverflow() {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const {
            title,
            description,
            leftIcon,
            rightIcon,
            style,
            assistiveText,
            children,
        } = this.props;
        const { isExpanded } = this.state;

        return (
            <div className={this.getContainerClassName()} style={style}>
                <button
                    className={this.getButtonClassName()}
                    aria-controls={searchResultsId}
                    aria-expanded={isExpanded}
                    onClick={this.toggleOverflow}>
                    <LeftIcon className="rainbow-button__icon rainbow-button__icon_left" icon={leftIcon} />
                    <div className="rainbow-nav-vertical__action-text">
                        <span className="rainbow-nav-vertical__action-title">{title}</span>
                        <Description isExpanded={isExpanded} description={description} />
                        <AssistiveText text={assistiveText} />
                    </div>
                    <RightIcon className="rainbow-button__icon rainbow-button__icon_right" icon={rightIcon} />

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
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    description: PropTypes.string,
    /** The label to show when the section is collapsed. */
    title: PropTypes.string,
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
    leftIcon: null,
    rightIcon: null,
    title: '',
    description: '',
    expanded: false,
    className: undefined,
    style: undefined,
    assistiveText: undefined,
    children: null,
};
