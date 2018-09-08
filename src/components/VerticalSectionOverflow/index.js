import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from './../AssistiveText';
import RenderIf from './../RenderIf';
import { uniqueId } from './../../libs/utils';
import getMaxHeight from './compute-max-height';
import Description from './description';
import './styles.css';

/**
* Represents an overflow of items from a preceding VerticalNavigationSection,
* with the ability to toggle visibility.
*/
export default class VerticalSectionOverflow extends Component {
    constructor(props) {
        super(props);
        this.searchResultsId = uniqueId('search-results');
        this.state = {
            isExpanded: props.expanded,
        };
        this.toggleOverflow = this.toggleOverflow.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        const { isExpanded } = this.state;
        return classnames('rainbow-nav-vertical-section-overflow-container', {
            'rainbow-nav-vertical-section-overflow-container-expanded': isExpanded,
        }, className);
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
            icon,
            style,
            assistiveText,
            children,
        } = this.props;
        const { isExpanded } = this.state;
        const sectionMaxHeight = {
            maxHeight: getMaxHeight(children, isExpanded),
        };

        return (
            <div data-id="vertical-overflow-container" className={this.getContainerClassNames()} style={style}>
                <button
                    className="rainbow-nav-vertical-section-overflow-button"
                    aria-controls={this.searchResultsId}
                    aria-expanded={isExpanded}
                    onClick={this.toggleOverflow}>

                    <div className="rainbow-nav-vertical-overflow__action-text">
                        <span className="rainbow-nav-vertical-overflow__action-title">{title}</span>
                        <Description isExpanded={isExpanded} description={description} />
                        <AssistiveText text={assistiveText} />
                    </div>
                    <RenderIf isTrue={!!icon}>
                        <span className="rainbow-nav-vertical-section-overflow__icon rainbow-nav-vertical-section-overflow__icon_right">
                            {icon}
                        </span>
                    </RenderIf>

                </button>
                <div
                    data-id="vertical-overflow"
                    id={this.searchResultsId}
                    className={this.getOverflowClassName()}
                    style={sectionMaxHeight}>

                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
}

VerticalSectionOverflow.propTypes = {
    icon: PropTypes.node,
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
    icon: null,
    title: '',
    description: '',
    expanded: false,
    className: undefined,
    style: undefined,
    assistiveText: undefined,
    children: null,
};
