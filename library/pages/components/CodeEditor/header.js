/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import windowsActionsSvg from '../../../../assets/images/windows-actions.svg';
import CopyToClipboard from '../../../styleguideComponents/CopyToClipboard';
import './styles.css';

export default function Header({ code }) {
    return (
        <div className="react-rainbow-code-editor-header">
            <img src={windowsActionsSvg} alt="widnows actions img" className="rainbow-m-left_x-small" />
            <CopyToClipboard code={code} />
        </div>
    );
}

Header.propTypes = {
    code: PropTypes.string.isRequired,
};
