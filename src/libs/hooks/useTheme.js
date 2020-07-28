import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import normalizeThemeColors from '../../styles/helpers/normalizeThemeColors';
import defaultTheme from '../../styles/defaultTheme';
import normalizeTheme from '../../styles/helpers/normalizeTheme';

export default function useTheme(localTheme) {
    const styledTheme = useContext(ThemeContext);
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
