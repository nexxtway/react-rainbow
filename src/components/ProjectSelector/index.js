import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import rainbowLogo from '../../../assets/images/rainbow-logo.svg';
import ButtonIcon from '../ButtonIcon';
import RightArrow from './rightArrow';
import './styles.css';
import RenderIf from '../RenderIf';

export default class ProjectSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleArrowCLick = this.handleArrowCLick.bind(this);
    }

    getContainerClassNames() {
        const { isOpen } = this.state;
        return classnames('react-rainbow-selector', { 'react-rainbow-selector--open': isOpen });
    }

    handleArrowCLick() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className={this.getContainerClassNames()}>
                <div className="react-rainbow-selector_selected-item-section">
                    <div className="react-rainbow-selector_item">
                        <img src={rainbowLogo} alt="react-rainbow" />
                        <div className="react-rainbow-selector_item-text">
                            <span className="react-rainbow-selector_item-text_header">react-rainbow components</span>
                            <span className="react-rainbow-selector_item-text_subheader">version 0.8.20</span>
                        </div>
                    </div>
                    <ButtonIcon icon={<RightArrow />} size="small" onClick={this.handleArrowCLick} />
                </div>
                <RenderIf isTrue={isOpen}>
                    <div className="react-rainbow-selector_divider" />
                    <div className="react-rainbow-selector_item">
                        <img src={rainbowLogo} alt="react-rainbow" />
                        <div className="react-rainbow-selector_item-text">
                            <span className="react-rainbow-selector_item-text_header">react-prismic cms</span>
                            <span className="react-rainbow-selector_item-text_subheader">version 0.2.20</span>
                        </div>
                    </div>
                    <div className="react-rainbow-selector_item">
                        <img src={rainbowLogo} alt="react-rainbow" />
                        <div className="react-rainbow-selector_item-text">
                            <span className="react-rainbow-selector_item-text_header">react-rainbow-styleguide</span>
                            <span className="react-rainbow-selector_item-text_subheader">version 0.1.20</span>
                        </div>
                    </div>
                </RenderIf>
            </div>
        );
    }
}

ProjectSelector.propTypes = {};

ProjectSelector.defaultProps = {};
