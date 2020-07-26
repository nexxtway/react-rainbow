/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import windowsActionsSvg from '../../../assets/images/windows-actions.svg';
import CopyToClipboard from '../CopyToClipboard';
import './styles.css';

function Header({ code }) {
    return (
        <div className="react-rainbow-editor-header">
            <img
                src={windowsActionsSvg}
                alt="widnows actions img"
                className="rainbow-m-left_x-small"
            />
            <CopyToClipboard text={code} />
        </div>
    );
}

Header.propTypes = {
    code: PropTypes.string.isRequired,
};

export default Header;
