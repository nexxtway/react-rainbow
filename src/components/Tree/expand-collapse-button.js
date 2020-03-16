import React from 'react';
import PropTypes from 'prop-types';
import Button from './styled/button';
import RightArrow from './icons/rightArrow';
import DownArrow from './icons/downArrow';

const ExpandCollapseButton = props => {
    const { hasChildren, isExpanded, onClick } = props;
    if (hasChildren) {
        if (isExpanded) {
            return <Button size="x-small" icon={<DownArrow />} onClick={onClick} />;
        }
        return <Button size="x-small" icon={<RightArrow />} onClick={onClick} />;
    }
    return null;
};

ExpandCollapseButton.propTypes = {
    hasChildren: PropTypes.bool.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func.isRequired,
};

export default ExpandCollapseButton;
