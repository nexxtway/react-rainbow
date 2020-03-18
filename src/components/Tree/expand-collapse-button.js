import React from 'react';
import PropTypes from 'prop-types';
import Button from './styled/button';
import RightArrow from './icons/rightArrow';
import DownArrow from './icons/downArrow';

function getIcon(isExpanded) {
    if (isExpanded) {
        return <DownArrow />;
    }
    return <RightArrow />;
}

export default function ExpandCollapseButton(props) {
    const { hasChildren, isExpanded, onClick } = props;
    if (hasChildren) {
        return <Button size="x-small" icon={getIcon(isExpanded)} onClick={onClick} />;
    }
    return null;
}

ExpandCollapseButton.propTypes = {
    hasChildren: PropTypes.bool.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func.isRequired,
};
