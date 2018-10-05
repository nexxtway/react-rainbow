import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import AssistiveText from './../AssistiveText';
import { Provider } from './context';
import getMaxHeight from './compute-max-height';
import Description from './description';
import RightArrow from './rightArrow';
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
        return classnames('rainbow-vertical-section-overflow_container', {
            'rainbow-vertical-section-overflow_container--expanded': isExpanded,
        }, className);
    }

    getButtonClassNames() {
        const { isExpanded } = this.state;
        const { description } = this.props;
        return classnames('rainbow-vertical-section-overflow_button', {
            'rainbow-vertical-section-overflow_button--expanded': isExpanded && description,
        });
    }

    getOverflowClassName() {
        const { isExpanded } = this.state;
        if (isExpanded) {
            return 'rainbow-vertical-section-overflow--show';
        }
        return 'rainbow-vertical-section-overflow--hide';
    }

    toggleOverflow() {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const {
            label,
            description,
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
                    className={this.getButtonClassNames()}
                    aria-controls={this.searchResultsId}
                    aria-expanded={isExpanded}
                    onClick={this.toggleOverflow}>

                    <div className="rainbow-vertical-section-overflow_action-text">
                        <span className="rainbow-vertical-section-overflow_action-label">{label}</span>
                        <Description isExpanded={isExpanded} description={description} />
                        <AssistiveText text={assistiveText} />
                    </div>
                    <RightArrow isExpanded={isExpanded} />

                </button>
                <div
                    data-id="vertical-overflow"
                    id={this.searchResultsId}
                    className={this.getOverflowClassName()}
                    style={sectionMaxHeight}>

                    <Provider value={isExpanded}>
                        <ul>
                            {children}
                        </ul>
                    </Provider>
                </div>
            </div>
        );
    }
}

VerticalSectionOverflow.propTypes = {
    /** The label to show when the section is collapsed. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The description to show when the section is collapsed. */
    description: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
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
    label: '',
    description: '',
    expanded: false,
    className: undefined,
    style: undefined,
    assistiveText: undefined,
    children: null,
};
