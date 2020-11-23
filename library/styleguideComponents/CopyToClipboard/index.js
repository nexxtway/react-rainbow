/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from '../../../src/components/ButtonIcon';

export default class CopyToClipboard extends Component {
    constructor(props) {
        super(props);
        this.state = { icon: faClipboard };
        this.handleCopyToClipboardClick = this.handleCopyToClipboardClick.bind(this);
    }

    handleCopyToClipboardClick() {
        const { text } = this.props;
        copy(text);
        this.setState({ icon: faClipboardCheck });
        setTimeout(() => {
            this.setState({ icon: faClipboard });
        }, 1000);
    }

    render() {
        const { variant } = this.props;
        const { icon } = this.state;
        return (
            <ButtonIcon
                onClick={this.handleCopyToClipboardClick}
                assistiveText="copy to clipboard"
                size="medium"
                variant={variant}
                icon={<FontAwesomeIcon icon={icon} />}
            />
        );
    }
}

CopyToClipboard.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string,
};

CopyToClipboard.defaultProps = {
    variant: 'inverse',
};
