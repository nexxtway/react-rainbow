/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import RainbowThemeContainer from '../../../components/RainbowThemeContainer';

const withRainbowTheme = (Component, theme) => props => (
    <RainbowThemeContainer theme={theme}>
        <Component {...props} />
    </RainbowThemeContainer>
);

export default withRainbowTheme;
