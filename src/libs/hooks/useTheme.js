import { useMemo } from 'react';
import { useTheme as useStyledTheme } from 'styled-components';
import normalizeThemeColors from '../../styles/helpers/normalizeThemeColors';
import defaultTheme from '../../styles/defaultTheme';
import normalizeTheme from '../../styles/helpers/normalizeTheme';

export default function useTheme(localTheme) {
    const styledTheme = useStyledTheme();
    return useMemo(
        () =>
            (localTheme && normalizeTheme(localTheme)) ||
            styledTheme || {
                rainbow: {
                    ...defaultTheme,
                    ...normalizeThemeColors(defaultTheme),
                },
            },
        [localTheme, styledTheme],
    );
}
