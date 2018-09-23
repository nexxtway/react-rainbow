import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Header({ title, id }) {
    if (typeof title === 'string') {
        return (
            <div className="rainbow-modal_header">
                <h2 id={id}>{title}</h2>
            </div>
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
