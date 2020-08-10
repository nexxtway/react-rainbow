import React from 'react';
import PropTypes from 'prop-types';
import Done from './icons/done';
import Error from './icons/error';

export default function MessageIcon({ variant }) {
    if (variant === 'error') {
        return <Error className="nexxtway-message_icon" />;
    }
    return <Done className="nexxtway-message_icon" />;
}

MessageIcon.propTypes = {
    variant: PropTypes.string,
};

MessageIcon.defaultProps = {
    variant: undefined,
};
