import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from './../../libs/utils';
import AssistiveText from './../AssistiveText';
import { Provider } from './context';
import getMaxHeight from './getMaxHeight';
import Description from './description';
import RightArrow from './rightArrow';
import StyledContainer from './styled/container';
import StyledButton from './styled/button';
import StyledActionContainer from './styled/actionContainer';
import StyledActionLabel from './styled/actionLabel';
import StyledOverflow from './styled/overflow';
import StyledUl from './styled/ul';

/**
 * Represents an overflow of items from a preceding VerticalNavigationSection,
 * with the ability to toggle visibility.
 * @category Layout
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

    static getDerivedStateFromProps(nextProps, state) {
        const { expanded, onToggleSection } = nextProps;
        if (expanded !== state.isExpanded && typeof onToggleSection === 'function') {
            return {
                isExpanded: expanded,
            };
        }
        return null;
    }

    toggleOverflow(event) {
        const { isExpanded } = this.state;
        const { onToggleSection } = this.props;
        if (typeof onToggleSection === 'function') {
            return onToggleSection(event);
        }
        return this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const { label, description, style, assistiveText, children, className } = this.props;
        const { isExpanded } = this.state;
        const sectionMaxHeight = {
            maxHeight: getMaxHeight(children, isExpanded),
        };

        return (
            <StyledContainer
                data-id="vertical-overflow-container"
                className={className}
                style={style}
                isExpanded={isExpanded}
            >
                <StyledButton
                    data-id="vertical-overflow-button"
                    aria-controls={this.searchResultsId}
                    aria-expanded={isExpanded}
                    onClick={this.toggleOverflow}
                    isExpanded={isExpanded}
                    description={description}
                >
                    <StyledActionContainer as="div">
                        <StyledActionLabel>{label}</StyledActionLabel>
                        <Description isExpanded={isExpanded} description={description} />
                        <AssistiveText text={assistiveText} />
                    </StyledActionContainer>
                    <RightArrow isExpanded={isExpanded} />
                </StyledButton>
                <StyledOverflow
                    data-id="vertical-overflow"
                    id={this.searchResultsId}
                    style={sectionMaxHeight}
                    isExpanded={isExpanded}
                >
                    <Provider value={isExpanded}>
                        <StyledUl>{children}</StyledUl>
                    </Provider>
                </StyledOverflow>
            </StyledContainer>
        );
    }
}

VerticalSectionOverflow.propTypes = {
    /** The label to show when the section is collapsed. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description to show when the section is collapsed. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The state of the overflow. */
    expanded: PropTypes.bool,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** Action fired when a component is clicked. */
    onToggleSection: PropTypes.func,
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
    onToggleSection: undefined,
};
