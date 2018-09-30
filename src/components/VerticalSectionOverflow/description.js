import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from './../RenderIf';

export default function Description({ description, isExpanded }) {
    const getClassNames = () => classnames('rainbow-vertical-section-overflow_action-description', {
        'rainbow-vertical-section-overflow_action-description--expanded': isExpanded,
    });

    return (
        <RenderIf isTrue={!!description}>
            <span className={getClassNames()}>
                {description}
            </span>
        </RenderIf>
    );
}

Description.propTypes = {
    description: PropTypes.node,
    isExpanded: PropTypes.bool.isRequired,
};

Description.defaultProps = {
    description: '',
};
