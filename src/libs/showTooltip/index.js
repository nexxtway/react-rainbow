import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './tooltip';
import { WindowScrolling } from '../scrollController';

const rainbowTooltipContainer = document.createElement('div');
let hasRainbowTooltip = false;

export default function showTooltip(props) {
    const { triggerElementRef, content, preferredPosition } = props;
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

    const tooltipProps = {
        triggerElementRef,
        preferredPosition,
    };
    const tooltip = React.createElement(Tooltip, tooltipProps, content);
    ReactDOM.render(tooltip, rainbowTooltipContainer);
}
