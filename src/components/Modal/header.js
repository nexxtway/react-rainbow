import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title, id }) {
    if (typeof title === 'string') {
        return (
            <header className="rainbow-modal_header">
                <h2 id={id}>{title}</h2>
            </header>
        );
    }
    return title;
}

Header.propTypes = {
    id: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

Header.defaultProps = {
    id: undefined,
    title: undefined,
};
