/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import windowsActionsSvg from '../../../assets/images/windows-actions.svg';
import Button from '../../../src/components/Button';
import './styles.css';

function Header({ icon, onClick }) {
    return (
        <div className="react-rainbow-editor-header">
            <img src={windowsActionsSvg} alt="widnows actions img" className="rainbow-m-left_x-small" />
            <Button
                className="rainbow-m-around_none rainbow-p-right_x-small"
                onClick={onClick}
                assistiveText="copy to clipboard"
                variant="inverse">

                <FontAwesomeIcon icon={icon} />
            </Button>
        </div>
    );
}

Header.propTypes = {
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Header;
