import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from './header';

function VerticalSection(props) {
    const {
        label,
        className,
        style,
        children,
    } = props;

    const getClassNames = () => classnames('slds-nav-vertical__section', className);

    return (
        <div className={getClassNames()} style={style}>
            <Header label={label} />
            <ul>
                {children}
            </ul>
        </div>
    );
}

VerticalSection.propTypes = {
    /** The heading text for this section. */
    label: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
    * This prop that should not be visible in the documentation.
    * @ignore
    */
    children: PropTypes.node,
};

VerticalSection.defaultProps = {
    label: null,
    className: '',
    style: {},
    children: null,
};

export default VerticalSection;
