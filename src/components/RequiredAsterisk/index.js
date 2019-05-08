import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function RequiredAsterisk({ required }) {
    if (required) {
        return (
            <abbr className="rainbow-required-asterisk" title="required">
                *{' '}
            </abbr>
        );
    }
    return null;
}

RequiredAsterisk.propTypes = {
    required: PropTypes.bool.isRequired,
};
