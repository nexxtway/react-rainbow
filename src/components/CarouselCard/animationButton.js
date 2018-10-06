import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from './playIcon';
import PauseIcon from './pauseIcon';
import ButtonIcon from '../ButtonIcon';

export default function AnimationButton({ stopAnimation, onClick }) {
    const getAnimationButtonIcon = () => {
        if (stopAnimation) {
            return <PlayIcon />;
        }
        return <PauseIcon />;
    };

    const getAnimationButtonAssistiveText = () => {
        if (stopAnimation) {
            return 'Start auto-play';
        }
        return 'Stop auto-play';
    };

    return (
        <ButtonIcon
            variant="border"
            size="small"
            icon={getAnimationButtonIcon()}
            onClick={onClick}
            assistiveText={getAnimationButtonAssistiveText()} />
    );
}

AnimationButton.propTypes = {
    stopAnimation: PropTypes.bool,
    onClick: PropTypes.func,
};

AnimationButton.defaultProps = {
    stopAnimation: true,
    onClick: () => {},
};
