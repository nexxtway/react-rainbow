import React from 'react';
import PropTypes from 'prop-types';
import { StyledAlphaSlider } from './styled';
import { recomposeColor } from '../../styles/helpers/color';
import { getAlpha } from './helpers';

export default function Alpha(props) {
    const { rgbaColor, onChange } = props;
    const a = getAlpha(rgbaColor);

    const handleChange = event => {
        const alpha = parseInt(event.target.value, 10);
        rgbaColor.values[3] = alpha / 100;
        onChange(recomposeColor(rgbaColor));
    };

    return <StyledAlphaSlider value={a} min={0} max={100} onChange={handleChange} />;
}

Alpha.propTypes = {
    rgbaColor: PropTypes.object,
    onChange: PropTypes.func,
};

Alpha.defaultProps = {
    rgbaColor: '',
    onChange: () => {},
};
