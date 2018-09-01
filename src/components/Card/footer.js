import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Footer({ content, isLoading }) {
    if (content && !isLoading) {
        return (
            <footer className="rainbow-card__footer">
                {content}
            </footer>
        );
    }
    return null;
}

Footer.propTypes = {
    content: PropTypes.node,
    isLoading: PropTypes.bool,
};

Footer.defaultProps = {
    content: null,
    isLoading: null,
};
