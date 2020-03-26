import React from 'react';
import PropTypes from 'prop-types';
import Button from './styled/button';
import BrandSpinner from './styled/spinner';
import RightArrow from './icons/rightArrow';
import DownArrow from './icons/downArrow';

function getIcon(isExpanded) {
    if (isExpanded) {
        return <DownArrow />;
    }
    return <RightArrow />;
}

function getButton(isExpanded, isLoading, onClick) {
    const spinner = <BrandSpinner variant="brand" size="x-small" />;
    return !isExpanded && isLoading ? (
        <Button size="x-small" variant="base" icon={spinner} disabled />
    ) : (
        <Button size="x-small" icon={getIcon(isExpanded)} onClick={onClick} />
    );
}

export default function ExpandCollapseButton(props) {
    const { hasChildren, isExpanded, isLoading, onClick } = props;

    if (hasChildren) {
        return getButton(isExpanded, isLoading, onClick);
    }
    return null;
}

ExpandCollapseButton.propTypes = {
    hasChildren: PropTypes.bool.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
