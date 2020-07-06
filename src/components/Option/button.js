import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';

function OptionButton(props) {
    const { onMouseDown } = props;
    const containerRef = useRef();

    useEffect(() => {
        const spanElement = containerRef.current;
        spanElement.addEventListener('mousedown', onMouseDown);
        return () => {
            spanElement.removeEventListener('mousedown', onMouseDown);
        };
    }, [onMouseDown]);

    return (
        <span ref={containerRef}>
            <StyledButton label="Only" variant="neutral" />
        </span>
    );
}

OptionButton.propTypes = {
    onMouseDown: PropTypes.func,
};

OptionButton.defaultProps = {
    onMouseDown: () => {},
};

export default OptionButton;
