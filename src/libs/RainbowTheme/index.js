/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import RainbowThemeContainer from '../../components/RainbowThemeContainer';

const RainbowTheme = (Component, theme) => props => (
    <RainbowThemeContainer theme={theme}>
        <Component {...props} />
    </RainbowThemeContainer>
);

export default RainbowTheme;
