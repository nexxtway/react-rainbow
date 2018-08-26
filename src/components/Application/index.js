import React from 'react';
import PropTypes from 'prop-types';

export const { Provider, Consumer } = React.createContext();

/**
 * This component is used to setup the React Lightning context for a tree.
 * Usually, this component will wrap an app's root component so that the entire
 * app will be within the configured context.
 */
export default function Application(props) {
    const {
      assetsSrc,
      children,
      className,
      style,
    } = props;
    const context = { assetsSrc };

    return (
        <Provider value={context}>
            <div className={className} style={style}>
                {children}
            </div>
        </Provider>
    );
}

Application.propTypes = {
    /** The URL of the SLDS assets */
    assetsSrc: PropTypes.string,
    /**
     * This prop should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.arrayOf(PropTypes.node),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Application.defaultProps = {
    assetsSrc: '',
    children: [],
    className: undefined,
    style: undefined,
};
