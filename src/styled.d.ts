export type ThemeType = {
    rainbow?: {
        palette?: {
            brand?: string;
            success?: string;
            error?: string;
            warning?: string;
            mainBackground?: string;
        };
    };
};

export interface Palette {
    brand: {
        main: string;
        dark: string;
        light: string;
    };
    success: {
        main: string;
        dark: string;
        light: string;
    };
    error: {
        main: string;
        dark: string;
        light: string;
    };
    warning: {
        main: string;
        dark: string;
        light: string;
    };
    background: {
        main: string;
        secondary: string;
        highlight: string;
        active: string;
    };
    text: {
        main: string;
        title: string;
        header: string;
        label: string;
        disabled: string;
    };
    border: {
        main: string;
        divider: string;
        disabled: string;
    };
    action: {
        active: string;
        hover: string;
    };
    getContrastText: (background: string) => string;
    isDark: boolean;
}

export interface Shadows {
    brand: string;
    success: string;
    error: string;
    shadow_1: string;
    shadow_2: string;
    shadow_3: string;
    shadow_4: string;
    shadow_5: string;
    shadow_6: string;
    shadow_7: string;
    shadow_8: string;
    shadow_9: string;
    shadow_10: string;
    shadow_11: string;
    shadow_12: string;
}

export interface RainbowTheme {
    palette: Palette;
    shadows: Shadows;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        rainbow: RainbowTheme;
    }
}
