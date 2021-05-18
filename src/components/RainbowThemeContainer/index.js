import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import normalizeTheme from '../../styles/helpers/normalizeTheme';

/**
 * RainbowThemeContainer allows to overwrite the theme for specific parts of your tree.
 */
const RainbowThemeContainer = ({ theme, children }) => {
    const [normalizedTheme, setTheme] = useState(() => normalizeTheme(theme));

    useEffect(() => {
        setTheme(normalizeTheme(theme));
    }, [theme]);

    return <ThemeProvider theme={normalizedTheme}>{children}</ThemeProvider>;
};

RainbowThemeContainer.propTypes = {
    theme: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

RainbowThemeContainer.defaultProps = {
    theme: undefined,
    children: undefined,
};

export default RainbowThemeContainer;
