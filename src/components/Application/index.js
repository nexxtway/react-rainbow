import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import legacyStyles from './rainbowLegacyStyles';

/**
 * This component is used to setup the React Rainbow context for a tree.
 * Usually, this component will wrap an app's root component so that the entire
 * app will be within the configured context.
 * @category Layout
 */
export default function Application(props) {
    const { children, className, style, locale } = props;
    const contextValue = { locale };
    return (
        <Provider value={contextValue}>
            <div className={className} style={style}>
                <style>{legacyStyles}</style>
                {children}
            </div>
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
};

Application.defaultProps = {
    children: [],
    className: undefined,
    style: undefined,
    locale: undefined,
};
