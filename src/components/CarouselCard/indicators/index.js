import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEFT_KEY, RIGHT_KEY } from '../../../libs/constants';
import { getItemIndex } from '../helpers';
import Indicator from './indicator';
import StyledIndicatorUl from '../styled/indicatorsUl';
import { useChildrenRegisterRef } from '../../../libs/hooks';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;
const SELECTOR = '[role="tab"]';

const Indicators = props => {
    const { carouselChildren, onSelect, selectedItem } = props;
    const containerRef = useRef();

    const { childrenRegistered: indicatorsRefs, register, unregister } = useChildrenRegisterRef({
        containerRef,
        selector: SELECTOR,
    });

    const setAsSelectedIndicator = tabIndex => {
        indicatorsRefs[tabIndex].ref.click();
        indicatorsRefs[tabIndex].ref.focus();
    };

    const selectIndicator = side => {
        const indicatorIndex = getItemIndex(indicatorsRefs, selectedItem);
        if (indicatorIndex === indicatorsRefs.length - 1 && side === RIGHT_SIDE) {
            setAsSelectedIndicator(0);
        } else if (indicatorIndex === 0 && side === LEFT_SIDE) {
            setAsSelectedIndicator(indicatorsRefs.length - 1);
        } else {
            setAsSelectedIndicator(indicatorIndex + side);
        }
    };

    const keyHandlerMap = {
        [RIGHT_KEY]: () => selectIndicator(RIGHT_SIDE),
        [LEFT_KEY]: () => selectIndicator(LEFT_SIDE),
    };

    const handleKeyPressed = event => {
        if (keyHandlerMap[event.keyCode]) {
            return keyHandlerMap[event.keyCode]();
        }
        return null;
    };

    return (
        <StyledIndicatorUl role="tablist" onKeyDown={handleKeyPressed} ref={containerRef}>
            {carouselChildren.map(({ id, containerId, header }) => (
                <Indicator
                    id={id}
                    containerId={containerId}
                    header={header}
                    onSelect={onSelect}
                    selectedItem={selectedItem}
                    onCreate={register}
                    onDestroy={unregister}
                    key={id}
                />
            ))}
        </StyledIndicatorUl>
    );
};

Indicators.propTypes = {
    carouselChildren: PropTypes.array,
    onSelect: PropTypes.func,
    selectedItem: PropTypes.string,
};

Indicators.defaultProps = {
    carouselChildren: [],
    onSelect: () => {},
    selectedItem: undefined,
};

export default Indicators;
