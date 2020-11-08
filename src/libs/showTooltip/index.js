import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Tooltip from './tooltip';
import { WindowScrolling } from '../scrollController';

const rainbowTooltipContainer = document.createElement('div');
let hasRainbowTooltip = false;

export default function showTooltip(props) {
    const { content, theme, ...rest } = props;
    if (hasRainbowTooltip) {
        ReactDOM.unmountComponentAtNode(rainbowTooltipContainer);
    }
    hasRainbowTooltip = true;

    const windowScrolling = new WindowScrolling();
    windowScrolling.startListening(() => {
        windowScrolling.stopListening();
        ReactDOM.unmountComponentAtNode(rainbowTooltipContainer);
        hasRainbowTooltip = false;
    });

    const tooltip = React.createElement(Tooltip, { ...rest }, content);
    ReactDOM.render(
        <ThemeProvider theme={theme}>{tooltip}</ThemeProvider>,
        rainbowTooltipContainer,
    );
}
