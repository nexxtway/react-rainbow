import React from 'react';
import PropTypes from 'prop-types';

/**
* Use breadcrumbs to note the path of a record and help
* the user to navigate back to the parent.
*/
export default function Breadcrumbs(props) {
    const {
        children,
        className,
        style,
    } = props;

    return (
        <nav aria-label="Breadcrumbs" style={style} className={className}>
            <ol className="slds-breadcrumb slds-list_horizontal slds-wrap">
                { children }
            </ol>
        </nav>
    );
}

Breadcrumbs.propTypes = {
    /** This is what will be displayed inside the breadcrumbs. It is a list of
     Breadcrumb component childrens */
    children: PropTypes.node,
     /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
     /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Breadcrumbs.defaultProps = {
    children: null,
    className: undefined,
    style: {},
};
