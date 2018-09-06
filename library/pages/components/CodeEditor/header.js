/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import windowsActionsSvg from '../../../../assets/images/windows-actions.svg';
import Button from '../../../../src/components/Button';
import './styles.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { icon: faClipboard };
        this.handleCopyToClipboardClick = this.handleCopyToClipboardClick.bind(this);
    }

    handleCopyToClipboardClick() {
        const { code } = this.props;
        copy(code);
        this.setState({ icon: faClipboardCheck });
        setTimeout(() => {
            this.setState({ icon: faClipboard });
        }, 1000);
    }

    render() {
        const { icon } = this.state;
        return (
            <div className="react-rainbow-editor-header">
                <img src={windowsActionsSvg} alt="widnows actions img" className="rainbow-m-left_x-small" />
                <Button
                    className="rainbow-m-around_none"
                    onClick={this.handleCopyToClipboardClick}
                    variant="inverse"
                    assistiveText="copy to clipboard">

                    <FontAwesomeIcon icon={icon} />
                </Button>
            </div>
        );
    }
}

Header.propTypes = {
    code: PropTypes.string.isRequired,
};
