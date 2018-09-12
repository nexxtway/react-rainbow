import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';

export default function RequiredAsterisk({ required }) {
    return (
        <RenderIf isTrue={!!required}>
            <abbr className="rainbow-textarea--required" title="required">* </abbr>
        </RenderIf>
    );
}

RequiredAsterisk.propTypes = {
    required: PropTypes.bool.isRequired,
};
