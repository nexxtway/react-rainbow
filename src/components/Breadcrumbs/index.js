import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * Breadcrumbs are used to note the path of a record and help
 * the user to navigate back to the parent.
 * @category Layout
 */
export default function Breadcrumbs(props) {
    const { children, className, style } = props;

    return (
        <nav aria-label="Breadcrumbs" style={style} className={className}>
            <ol className="rainbow-breadcrumbs">{children}</ol>
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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Breadcrumbs.defaultProps = {
    className: undefined,
    style: undefined,
    children: [],
};
