import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../../AssistiveText';
import StyledIndicatorLi from '../styled/indicatorLi';
import StyledIndicatorButton from '../styled/indicatorButton';

function getAssistiveText(header) {
    if (typeof header === 'string') {
        return `${header} Tab`;
    }
    return undefined;
}

const Indicator = props => {
    const { id, containerId, header, onSelect, selectedItem, onCreate, onDestroy } = props;
    const indicatorRef = useRef();

    useEffect(() => {
        onCreate({ id, ref: indicatorRef.current });

        return () => {
            onDestroy(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const assistiveText = getAssistiveText(header);
    const isSelected = selectedItem === id;
    const tabIndex = isSelected ? 0 : -1;

    return (
        <StyledIndicatorLi role="presentation" key={id}>
            <StyledIndicatorButton
                id={id}
                isSelected={isSelected}
                role="tab"
                tabIndex={tabIndex}
                aria-selected={isSelected}
                aria-controls={containerId}
                title={assistiveText}
                onClick={() => onSelect(id)}
                ref={indicatorRef}
            >
                <AssistiveText text={assistiveText} />
            </StyledIndicatorButton>
        </StyledIndicatorLi>
    );
};

Indicator.propTypes = {
    id: PropTypes.string,
    containerId: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onSelect: PropTypes.func,
    onCreate: PropTypes.func,
    onDestroy: PropTypes.func,
    selectedItem: PropTypes.string,
};

Indicator.defaultProps = {
    id: undefined,
    containerId: undefined,
    header: undefined,
    onSelect: () => {},
    onCreate: () => {},
    onDestroy: () => {},
    selectedItem: undefined,
};

export default Indicator;
