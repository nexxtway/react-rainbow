import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';

export default function ChipContent(props) {
    const { label, icon } = props;
    return (
        <span className="rainbow-lookup_chip-content">
            <RenderIf isTrue={!!icon}>
                <span className="rainbow-lookup_chip-content_icon">{icon}</span>
            </RenderIf>
            <span className="rainbow-lookup_chip-content_label">{label}</span>
        </span>
    );
}

ChipContent.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
};

ChipContent.defaultProps = {
    label: undefined,
    icon: undefined,
};
