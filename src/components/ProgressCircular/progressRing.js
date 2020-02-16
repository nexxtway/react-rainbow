import React from 'react';
import PropTypes from 'prop-types';
import StyledRingContainer from './styled/ringContainer';
import StyledRingPath from './styled/ringPath';
import StyledRingFill from './styled/ringFill';
import StyledSvg from './styled/svg';

export default function ProgressRing({ percent, variant }) {
    return (
        <StyledRingContainer>
            <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="140"
                height="140"
                viewBox="-16.8 -16.8 33.6 33.6"
            >
                <StyledRingPath strokeWidth="1.6" fill="none" cx="0" cy="0" r="16" />
                <StyledRingFill
                    variant={variant}
                    strokeWidth="1.6"
                    strokeDasharray={`${percent} ${100 - percent}`}
                    fill="none"
                    cx="0"
                    cy="0"
                    r="16"
                    transform="rotate(-90)"
                />
            </StyledSvg>
        </StyledRingContainer>
    );
}

ProgressRing.propTypes = {
    percent: PropTypes.number.isRequired,
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']).isRequired,
};
