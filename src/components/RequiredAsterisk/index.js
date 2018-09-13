import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import './styles.css';

export default function RequiredAsterisk({ required }) {
    return (
        <RenderIf isTrue={required}>
            <abbr className="rainbow-required" title="required">* </abbr>
        </RenderIf>
    );
}

RequiredAsterisk.propTypes = {
    required: PropTypes.bool.isRequired,
};
