/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function HeaderTitle({ title }) {
    if (typeof title === 'string') {
        return (
            <h2>
                <a href="javascript:void(0);" className="rainbow-card_header-link">
                    <span className="rainbow-card_title">{title}</span>
                </a>
            </h2>
        );
    }
    return title;
}

HeaderTitle.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};
HeaderTitle.defaultProps = {
    title: null,
};
