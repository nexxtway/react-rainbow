import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ButtonIcon from '../../../src/components/ButtonIcon';
import './styles.css';

export default class CustomPathline extends Component {
    constructor(props) {
        super(props);
        this.state = { iconName: 'utility:copy_to_clipboard' };
        this.handleCopyToClipBoardButtonClick = this.handleCopyToClipBoardButtonClick.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleCopyToClipBoardButtonClick() {
        const { children } = this.props;
        copy(children);
        this.setState({ iconName: 'utility:check' });
    }

    handleOnBlur() {
        this.setState({ iconName: 'utility:copy_to_clipboard' });
    }

    render() {
        const { name } = this.props;
        const { iconName } = this.state;
        return (
            <div className="slds-grid">
                <span>
                    <span className="slds-react-text-color-violet">import </span>
                    <span className="slds-react-text-color-gray">{name}</span>
                    <span className="slds-react-text-color-violet"> from </span>
                    <span className="slds-react-text-color-green">{`'react-slds/components/${name}';`}</span>
                </span>
                <ButtonIcon
                    iconName={iconName}
                    className="slds-m-left--xx-small"
                    onClick={this.handleCopyToClipBoardButtonClick}
                    onBlur={this.handleOnBlur} />
            </div>
        );
    }
}

CustomPathline.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
