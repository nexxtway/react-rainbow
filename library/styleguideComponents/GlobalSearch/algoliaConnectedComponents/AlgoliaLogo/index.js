import React from 'react';
import PropTypes from 'prop-types';
import AlgoliaIcon from './algoliaIcon';

export default function AlgoliaLogo(props) {
    const { className, style } = props;
    return (
        <div className={className} style={style}>
            <span className="rainbow-m-right_small">Search by</span>{' '}
            <a
                href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=react-instantsearch.netlify.com&amp;utm_campaign=poweredby"
                target="_blank"
                className="ais-PoweredBy-link"
                aria-label="Algolia"
                rel="noopener noreferrer"
            >
                <AlgoliaIcon />
            </a>
        </div>
    );
}

AlgoliaLogo.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

AlgoliaLogo.defaultProps = {
    className: '',
    style: {},
};
