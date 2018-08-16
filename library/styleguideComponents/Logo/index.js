import React from 'react';
import PropTypes from 'prop-types';
import reactLogo from './image/react.svg';
import lightningLogo from './image/lightning.svg';
import './styles.css';

export default function Logo({ title, version }) {
    return (
        <div className="react-slds-logo slds-align_absolute-center slds-p-horizontal_x-small">
            <div className="slds-text-align_center">
                <p className="slds-text-color_inverse slds-text-heading_small">{title}</p>
                <div className="slds-m-top_medium slds-m-bottom_small">
                    <img src={reactLogo} alt="react logo" />
                    <span className="slds-text-heading_medium slds-text-color_inverse-weak slds-m-horizontal_xx-small slds-align-middle">
                        +
                    </span>
                    <img src={lightningLogo} alt="lightning logo" />
                </div>
                <p aria-label="version" className="slds-text-color_inverse slds-text-body_small">
                    {`Latest release: ${version}`}
                </p>
            </div>
        </div>
    );
}

Logo.propTypes = {
    title: PropTypes.node.isRequired,
    version: PropTypes.string.isRequired,
};

Logo.defaultProps = {
    version: '',
};
