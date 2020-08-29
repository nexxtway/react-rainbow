import { useMemo } from 'react';
import isValidColor from '../../../styles/helpers/color/isValidColor';

export const defaultColors = [
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
];

export default function useNormalizeColors(props) {
    const { defaultColors: colors, variant } = props;
    return useMemo(() => {
        const validColors = Array.isArray(colors)
            ? colors.filter(color => isValidColor(color))
            : [];

        if (variant === 'colors-fixed') {
            if (!validColors.length > 0) {
                // eslint-disable-next-line no-console
                console.warn(
                    'If the props variant is colors-fixed, the defaultColors prop must contain at least one valid color',
                );
                return defaultColors;
            }
        }

        return validColors;
    }, [colors, variant]);
}
