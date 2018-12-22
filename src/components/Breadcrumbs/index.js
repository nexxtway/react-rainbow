import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/** @category Layout */
export default function Breadcrumbs(props) {
    const {
        children,
        className,
        style,
    } = props;

    return (
        <nav aria-label="Breadcrumbs" style={style} className={className}>
            <ol className="rainbow-breadcrumbs">
                { children }
            </ol>
        </nav>
    );
}

Breadcrumbs.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**
    * This prop that should not be visible in the documentation.
    * @ignore
    */
    children: PropTypes.node,
};

Breadcrumbs.defaultProps = {
    className: undefined,
    style: undefined,
    children: null,
};
