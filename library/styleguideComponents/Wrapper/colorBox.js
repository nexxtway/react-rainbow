import React from 'react';
import PropTypes from 'prop-types';
import { StyledColorBox, StyledIcon } from './styled';

export default function ColorBox(props) {
    const { label, color } = props;

    return (
        <React.Fragment>
            <StyledIcon>
                <StyledColorBox rainbowTheme={color} />
            </StyledIcon>
            {label}
        </React.Fragment>
    );
}

ColorBox.propTypes = {
    label: PropTypes.string,
    color: PropTypes.object,
};

ColorBox.defaultProps = {
    label: undefined,
    color: undefined,
};
