import React from 'react';
import propTypes from 'prop-types';

const ExpandCollapseButton = props => {
    const { hasChildren, isExpanded } = props;
    if (hasChildren) {
        if (isExpanded) {
            return <button>-</button>;
        }
        return <button>+</button>;
    }
    return null;
};

ExpandCollapseButton.propTypes = {
    hasChildren: propTypes.bool.isRequired,
    isExpanded: propTypes.bool.isRequired,
};

export default ExpandCollapseButton;
