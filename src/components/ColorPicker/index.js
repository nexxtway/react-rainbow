/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import { StyledContainer } from './styled';
import normalizeColor from './helpers/normalizeColor';
import useNormalizeColors from './hooks/useNormalizeColors';
import { Default, ColorsFixed } from './variants';

const variantMap = { default: Default, 'colors-fixed': ColorsFixed };

const ColorPicker = React.forwardRef((props, ref) => {
    const { id, value, defaultColors, variant, tabIndex, onChange, className, style } = props;

    const color = normalizeColor(value);
    const colors = useNormalizeColors({ defaultColors, variant });
    const context = {
        ...color,
        colors,
        tabIndex,
        onChange,
    };

    const Variant = variantMap[variant] || Default;

    return (
        <StyledContainer className={className} style={style} id={id}>
            <Provider value={context}>
                <Variant ref={ref} />
            </Provider>
        </StyledContainer>
    );
});

ColorPicker.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies the color of ColorPicker. */
    value: PropTypes.shape({
        hex: PropTypes.string,
        rgba: PropTypes.arrayOf(PropTypes.number),
        hsv: PropTypes.arrayOf(PropTypes.number),
    }),
    /** Specifies the default colors to choice. */
    defaultColors: PropTypes.array,
    /** The variant changes the appearance of the Chip. Accepted variants include default, color-fixed */
    variant: PropTypes.oneOf(['default', 'colors-fixed']),
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ColorPicker.defaultProps = {
    id: undefined,
    value: { hex: '#000000' },
    defaultColors: [
        '#e3aaec',
        '#c3dbf7',
        '#9fd6ff',
        '#9de7da',
        '#9ef0bf',
        '#fef199',
        '#fdd499',
        '#d174e0',
        '#86baf3',
        '#5ebbff',
        '#42d8be',
        '#3be282',
        '#ffe654',
        '#ffb758',
        '#bd35bd',
        '#5779c1',
        '#4A90E2',
        '#06aea9',
        '#3dba4c',
        '#f5bc24',
        '#f99222',
        '#570e8c',
        '#021970',
        '#0b2399',
        '#0d7477',
        '#0a6b50',
        '#b67e12',
        '#b75d0c',
    ],
    variant: 'default',
    tabIndex: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};

export default ColorPicker;
