/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../src/components/Button';
import './styles.css';

export default class CustomPathline extends Component {
    constructor(props) {
        super(props);
        this.state = { icon: faClipboard };
        this.handleCopyToClipBoardButtonClick = this.handleCopyToClipBoardButtonClick.bind(this);
    }

    handleCopyToClipBoardButtonClick() {
        const { children } = this.props;
        copy(children);
        this.setState({ icon: faClipboardCheck });
        setTimeout(() => {
            this.setState({ icon: faClipboard });
        }, 1000);
    }

    render() {
        const { name } = this.props;
        const { icon } = this.state;

        return (
            <div className="slds-grid">
                <span>
                    <span className="react-rainbow-text-color-violet">import </span>
                    <span className="react-rainbow-text-color-gray">{name}</span>
                    <span className="react-rainbow-text-color-violet"> from </span>
                    <span className="react-rainbow-text-color-green">{`'react-slds/components/${name}';`}</span>
                </span>
                <Button
                    className="rainbow-m-left_xx-small"
                    onClick={this.handleCopyToClipBoardButtonClick}>

                    <FontAwesomeIcon icon={icon} />
                </Button>
            </div>
        );
    }
}

CustomPathline.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
