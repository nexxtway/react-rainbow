import React from 'react';
import PropTypes from 'prop-types';

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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** This is what will be displayed inside the breadcrumbs. It is a list of
     Breadcrumb component childrens */
    children: PropTypes.node,
};

Breadcrumbs.defaultProps = {
    className: undefined,
    style: {},
    children: null,
};
