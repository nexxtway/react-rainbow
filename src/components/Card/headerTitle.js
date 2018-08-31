/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function HeaderTitle({ title }) {
    if (typeof title === 'string') {
        return (
            <div className="rainbow-media__body">
                <h2>
                    <a href="javascript:void(0);" className="rainbow-card__header-link">
                        <span className="rainbow-text-heading_small">{title}</span>
                    </a>
                </h2>
            </div>
        );
    }
    return (
        <div className="rainbow-media__body">
            {title}
        </div>
    );
}

HeaderTitle.propTypes = {
    title: PropTypes.string,
};
HeaderTitle.defaultProps = {
    title: null,
};
