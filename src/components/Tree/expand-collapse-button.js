import React from 'react';
import propTypes from 'prop-types';
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
    hasChildren: propTypes.bool.isRequired,
    isExpanded: propTypes.bool.isRequired,
};

export default ExpandCollapseButton;
