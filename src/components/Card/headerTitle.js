/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderTitle({ title }) {
    if (typeof title === 'string') {
        return (
            <div className="slds-media__body">
                <h2>
                    <a href="javascript:void(0);" className="slds-card__header-link slds-truncate">
                        <span className="slds-text-heading_small">{title}</span>
                    </a>
                </h2>
            </div>
        );
    }
    return (
        <div className="slds-media__body">
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
