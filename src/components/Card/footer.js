import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ content, isLoading }) {
    if (content && !isLoading) {
        return (
            <footer className="slds-card__footer">
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
