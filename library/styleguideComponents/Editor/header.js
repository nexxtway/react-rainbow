import React from 'react';
import windowsActionsSvg from '../../../assets/images/windows-actions.svg';
import './styles.css';

function Header() {
    return (
        <div className="slds-react-editor-header">
            <img src={windowsActionsSvg} alt="widnows actions img" />
        </div>
    );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
