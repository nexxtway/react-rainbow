import React from 'react';
import PropTypes from 'prop-types';
import windowsActionsSvg from '../../../assets/images/windows-actions.svg';
import ButtonIcon from '../../../src/components/ButtonIcon';
import './styles.css';

function Header({ iconName, onClick, onBlur }) {
    return (
        <div className="slds-react-editor-header">
            <img src={windowsActionsSvg} alt="widnows actions img" className="slds-m-left--x-small" />
            <ButtonIcon
                iconName={iconName}
                className="slds-m-around--none slds-p-right_x-small"
                onClick={onClick}
                onBlur={onBlur}
                assistiveText="copy to clipboard"
                variant="inverse" />
        </div>
    );
}

Header.propTypes = {
    iconName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
};

export default Header;
