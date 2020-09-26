import React from 'react';
import PropTypes from 'prop-types';
import { DefaultHitContainer, DefaultTextContainer } from './styled/index';

export const defaultHitComponent = ({ children }) => {
    return <DefaultHitContainer>{children}</DefaultHitContainer>;
};

export const defaultTextComponent = ({ children }) => {
    return <DefaultTextContainer>{children}</DefaultTextContainer>;
};

defaultHitComponent.propTypes = {
    children: PropTypes.node,
};

defaultTextComponent.propTypes = {
    children: PropTypes.node,
};

defaultHitComponent.defaultProps = {
    children: undefined,
};

defaultTextComponent.defaultProps = {
    children: undefined,
};
