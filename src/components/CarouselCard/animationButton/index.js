import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from './playIcon';
import PauseIcon from './pauseIcon';
import StyledAutoplayButton from '../styled/autoplayButton';

export default function AnimationButton({ isAnimationPaused, onClick }) {
    const getIcon = () => {
        if (isAnimationPaused) {
            return <PlayIcon />;
        }
        return <PauseIcon />;
    };

    const getAssistiveText = () => {
        if (isAnimationPaused) {
            return 'Start auto-play';
        }
        return 'Stop auto-play';
    };

    return (
        <StyledAutoplayButton
            variant="border-filled"
            size="small"
            icon={getIcon()}
            onClick={onClick}
            ariaPressed={isAnimationPaused}
            assistiveText={getAssistiveText()}
        />
    );
}

AnimationButton.propTypes = {
    isAnimationPaused: PropTypes.bool,
    onClick: PropTypes.func,
};

AnimationButton.defaultProps = {
    isAnimationPaused: true,
    onClick: () => {},
};
