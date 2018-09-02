import React from 'react';
import PropTypes from 'prop-types';
import './styles/rainbow-styles.css';

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
    /**
     * The URL to the SLDS assets. It allows to configure the path to the statics assets.
     * This value is used for components like Icon in order to generate the href to the
     * icon sprites.
     */
    assetsSrc: PropTypes.string,
    /**
     * This prop should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
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
