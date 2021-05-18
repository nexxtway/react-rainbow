import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import normalizeTheme from '../../styles/helpers/normalizeTheme';

/**
 * RainbowThemeContainer allows to overwrite the theme for specific parts of your tree.
 */
const RainbowThemeContainer = ({ value, children }) => {
    const [theme, setTheme] = useState(() => normalizeTheme(value));

    useEffect(() => {
        setTheme(normalizeTheme(value));
    }, [value]);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

RainbowThemeContainer.propTypes = {
    value: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

RainbowThemeContainer.defaultProps = {
    value: undefined,
    children: undefined,
};

export default RainbowThemeContainer;
