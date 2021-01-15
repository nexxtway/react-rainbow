import React from 'react';
import PropTypes from 'prop-types';
import Button from './styled/button';
import Spinner from '../Spinner';
import SpinnerContainer from './styled/spinnerContainer';
import RightArrow from './icons/rightArrow';
import DownArrow from './icons/downArrow';

function getIcon(isExpanded) {
    if (isExpanded) {
        return <DownArrow />;
    }
    return <RightArrow />;
}

export default function ExpandCollapseButton(props) {
    const { isExpanded, isLoading, onClick } = props;
    if (isLoading) {
        return (
            <SpinnerContainer>
                <Spinner variant="brand" type="arc" size="xx-small" />
            </SpinnerContainer>
        );
    }
    return <Button size="x-small" icon={getIcon(isExpanded)} onClick={onClick} tabIndex={-1} />;
}

ExpandCollapseButton.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
