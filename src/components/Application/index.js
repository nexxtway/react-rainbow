import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider } from './context';
import { useLocale } from '../../libs/hooks';
import legacyStyles from './rainbowLegacyStyles';
import normalizeTheme from '../../styles/helpers/normalizeTheme';

/**
 * This component is used to setup the React Rainbow context for a tree.
 * Usually, this component will wrap an app's root component so that the entire
 * app will be within the configured context.
 * @category Layout
 */
export default function Application(props) {
    const { children, className, style, locale, theme } = props;

    const contextValue = { locale: useLocale(locale) };

    const [normalizedTheme, setTheme] = useState(() => normalizeTheme(theme));

    useEffect(() => {
        setTheme(normalizeTheme(theme));
    }, [theme]);

    return (
        <Provider value={contextValue}>
            <ThemeProvider theme={normalizedTheme}>
                <div className={className} style={style}>
                    <style>{legacyStyles}</style>
                    {children}
                </div>
            </ThemeProvider>
        </Provider>
    );
}

Application.propTypes = {
    /**
     * This prop should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The locale used by application. Defaults to browser's locale. */
    locale: PropTypes.string,
    /** The application theme. */
    theme: PropTypes.shape({
        rainbow: PropTypes.shape({
            palette: PropTypes.shape({
                brand: PropTypes.string,
                success: PropTypes.string,
                error: PropTypes.string,
                warning: PropTypes.string,
                mainBackground: PropTypes.string,
            }),
        }),
    }),
};

Application.defaultProps = {
    children: [],
    className: undefined,
    style: undefined,
    locale: undefined,
    theme: {},
};
