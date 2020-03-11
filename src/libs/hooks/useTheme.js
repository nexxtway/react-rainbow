import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import normalizeThemeColors from '../../styles/helpers/normalizeThemeColors';
import defaultTheme from '../../styles/defaultTheme';

export default function useTheme() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        return {
            rainbow: {
                ...defaultTheme,
                ...normalizeThemeColors(defaultTheme),
            },
        };
    }
    return themeContext;
}
