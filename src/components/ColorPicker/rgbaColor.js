import React from 'react';
import PropTypes from 'prop-types';
import { StyledFlexContainer, StyledNumberInput } from './styled';
import { getAlpha } from './helpers';
import { recomposeColor } from '../../styles/helpers/color';

export default function RgbaColor(props) {
    const { rgbaColor, tabIndex, onChange } = props;
    const [r, g, b] = rgbaColor.values;
    const a = getAlpha(rgbaColor);

    const handleAlphaChange = event => {
        const alpha = parseInt(event.target.value, 10);

        if (isNaN(alpha)) {
            rgbaColor.values[3] = 0;
        } else {
            rgbaColor.values[3] = Math.max(0, Math.min(alpha, 100)) / 100;
        }
        onChange(recomposeColor(rgbaColor));
    };

    const handleChange = (index, event) => {
        const value = parseInt(event.target.value, 10);

        if (isNaN(value)) {
            rgbaColor.values[index] = 0;
        } else {
            rgbaColor.values[index] = Math.max(0, Math.min(value, 255));
        }
        onChange(recomposeColor(rgbaColor));
    };

    return (
        <StyledFlexContainer>
            <StyledNumberInput
                type="number"
                value={r}
                bottomHelpText="R"
                onChange={event => handleChange(0, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={g}
                bottomHelpText="G"
                onChange={event => handleChange(1, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={b}
                bottomHelpText="B"
                onChange={event => handleChange(2, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={a}
                bottomHelpText="ALPHA"
                onChange={handleAlphaChange}
                tabIndex={tabIndex}
            />
        </StyledFlexContainer>
    );
}

RgbaColor.propTypes = {
    rgbaColor: PropTypes.object,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
};

RgbaColor.defaultProps = {
    rgbaColor: '',
    tabIndex: undefined,
    onChange: () => {},
};
