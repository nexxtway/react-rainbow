import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import { Provider } from './context';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledTitle from './styled/title';
import StyledUl from './styled/ul';

/**
 * Represents a section within a VerticalNavigation.
 * @category Layout
 */
class VerticalSection extends Component {
    constructor(props) {
        super(props);
        this.entityHeaderId = uniqueId('entity-header');
    }

    render() {
        const { label, style, children, className } = this.props;

        return (
            <StyledContainer className={className} style={style}>
                <RenderIf isTrue={!!label}>
                    <StyledTitle id={this.entityHeaderId}>{label}</StyledTitle>
                </RenderIf>
                <Provider value={this.entityHeaderId}>
                    <StyledUl>{children}</StyledUl>
                </Provider>
            </StyledContainer>
        );
    }
}

VerticalSection.propTypes = {
    /** The heading text for this section. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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

VerticalSection.defaultProps = {
    label: null,
    className: undefined,
    style: undefined,
    children: null,
};

export default VerticalSection;
