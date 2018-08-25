import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import windowsActionsSvg from '../../../../assets/images/windows-actions.svg';
import ButtonIcon from '../../../../src/components/ButtonIcon';
import './styles.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { iconName: 'utility:copy_to_clipboard' };
        this.handleCopyToClipboardClick = this.handleCopyToClipboardClick.bind(this);
    }
    handleCopyToClipboardClick() {
        const { code } = this.props;
        copy(code);
        this.setState({ iconName: 'utility:check' });
        setTimeout(() => {
            this.setState({ iconName: 'utility:copy_to_clipboard' });
        }, 1000);
    }

    render() {
        const { iconName } = this.state;
        return (
            <div className="slds-react-editor-header">
                <img src={windowsActionsSvg} alt="widnows actions img" className="slds-m-left--x-small" />
                <ButtonIcon
                    iconName={iconName}
                    className="slds-m-around--none"
                    onClick={this.handleCopyToClipboardClick}
                    variant="inverse"
                    assistiveText="copy to clipboard" />
            </div>
        );
    }
}

Header.propTypes = {
    code: PropTypes.string.isRequired,
};
