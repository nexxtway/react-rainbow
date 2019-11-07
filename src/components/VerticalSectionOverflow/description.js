import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from './../RenderIf';
import StyledDescription from './styled/description';

export default function Description({ description, isExpanded }) {
    return (
        <RenderIf isTrue={!!description}>
            <StyledDescription isExpanded={isExpanded}>{description}</StyledDescription>
        </RenderIf>
    );
}

Description.propTypes = {
    description: PropTypes.node,
    isExpanded: PropTypes.bool.isRequired,
};

Description.defaultProps = {
    description: '',
};
