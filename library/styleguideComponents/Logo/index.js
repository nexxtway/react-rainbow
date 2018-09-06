import React from 'react';
import PropTypes from 'prop-types';
import rainbowLogo from './../../../assets/images/rainbow-logo.svg';
import './styles.css';

export default function Logo({ version }) {
    return (
        <section>
            <div className="react-rainbow-logo-container">
                <img className="react-rainbow-logo-icon" src={rainbowLogo} alt="rainbow logo" />
                <div className="react-rainbow-title-version-container">
                    <div className="react-rainbow-title-container">
                        <p>rainbow</p>
                        <p className="react-rainbow-title-thin">components</p>
                    </div>
                    <p className="react-rainbow-version" aria-label="version">
                        {`Latest release: ${version}`}
                    </p>
                </div>
            </div>
            <div className="react-rainbow-divider-dotted" />
        </section>
    );
}

Logo.propTypes = {
    version: PropTypes.string.isRequired,
};

Logo.defaultProps = {
    version: '',
};
