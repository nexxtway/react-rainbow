import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from './../RenderIf';

export default function Description({ description, isExpanded }) {
    const getClassNames = () => classnames('rainbow-nav-vertical-overflow__action-description', {
        'rainbow-nav-vertical-overflow__action-description-expanded': isExpanded,
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
    description: PropTypes.node.isRequired,
    isExpanded: PropTypes.bool.isRequired,
};
