import React from 'react';
import PropTypes from 'prop-types';
import rainbowLogo from './../../../assets/images/rainbow-logo.svg';
import './styles.css';

export default function Logo({ version }) {
    return (
        <section>
            <div className="react-rainbow_logo-container">
                <img className="react-rainbow_logo-icon" src={rainbowLogo} alt="rainbow logo" />
                <div className="react-rainbow_title-version_container">
                    <div className="react-rainbow_title-container">
                        <p>rainbow</p>
                        <p className="react-rainbow_title-thin">components</p>
                    </div>
                    <p className="react-rainbow_version" aria-label="version">
                        {`Latest release: ${version}`}
                    </p>
                </div>
            </div>
            <div className="react-rainbow_divider-dotted" />
        </section>
    );
}

Logo.propTypes = {
    version: PropTypes.string.isRequired,
};

Logo.defaultProps = {
    version: '',
};
