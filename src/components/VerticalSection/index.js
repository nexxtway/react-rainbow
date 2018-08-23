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
    /** The content body section */
    children: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

VerticalSection.defaultProps = {
    label: null,
    children: null,
    className: '',
    style: {},
};

export default VerticalSection;
