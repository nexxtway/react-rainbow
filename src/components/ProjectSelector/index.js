/* eslint-disable no-script-url */
import React, { Component } from 'react';
import classnames from 'classnames';
import rainbowLogo from '../../../assets/images/rainbow-logo.svg';
import RenderIf from '../RenderIf';
import {
    UP_KEY,
    DOWN_KEY,
    ESCAPE_KEY,
} from './../../libs/constants';
import RightArrow from './rightArrow';
import './styles.css';

export default class ProjectSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            childFocusedIndex: 0,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.keyHandlerMap = {
            [UP_KEY]: () => this.handleKeyUp(),
            [DOWN_KEY]: () => this.handleKeyDown(),
            [ESCAPE_KEY]: () => this.closeMenu(),
        };
        this.containerRef = React.createRef();
        this.references = Array(3).fill(0).map(() => React.createRef());
    }

    getContainerClassNames() {
        const { isOpen } = this.state;
        return classnames('react-rainbow-selector', { 'react-rainbow-selector--open': isOpen });
    }

    handleKeyPressed(event) {
        if (this.keyHandlerMap[event.keyCode]) {
            return this.keyHandlerMap[event.keyCode]();
        }
        return null;
    }

    handleKeyUp() {
        const { childFocusedIndex } = this.state;
        if (childFocusedIndex === 0) {
            this.focusChild(this.references.length - 1);
        } else {
            this.focusChild(childFocusedIndex - 1);
        }
    }

    handleKeyDown() {
        const { childFocusedIndex } = this.state;
        if (childFocusedIndex === this.references.length - 1) {
            this.focusChild(0);
        } else {
            this.focusChild(childFocusedIndex + 1);
        }
    }

    focusChild(index) {
        this.setState({ childFocusedIndex: index });
        return this.references[index].current.focus();
    }

    handleClick(event) {
        const isClickInsideMenu = this.containerRef.current.contains(event.target);
        if (isClickInsideMenu) {
            return null;
        }
        return this.closeMenu();
    }

    openMenu() {
        window.addEventListener('click', this.handleClick);
        setTimeout(() => this.focusChild(0), 0);
        return this.setState({
            isOpen: true,
        });
    }

    closeMenu() {
        window.removeEventListener('click', this.handleClick);
        return this.setState({
            isOpen: false,
            childFocusedIndex: -1,
        });
    }

    toggleMenu() {
        const { isOpen } = this.state;
        if (isOpen) {
            return this.closeMenu();
        }
        return this.openMenu();
    }

    render() {
        const { isOpen } = this.state;
        return (
            <ul
                className={this.getContainerClassNames()}
                role="menu"
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}>
                <li
                    className="react-rainbow-selector_selected-item-section"
                    onClick={this.toggleMenu}
                    role="menuitem">
                    <a href="javascript:void(0);" ref={this.references[0]} className="react-rainbow-selector_item">
                        <img src={rainbowLogo} alt="react-rainbow" />
                        <div className="react-rainbow-selector_item-text">
                            <span className="react-rainbow-selector_item-text_header">react-rainbow components</span>
                            <span className="react-rainbow-selector_item-text_subheader">version 0.8.20</span>
                        </div>
                    </a>
                    <RightArrow className="react-rainbow-selector_selected-item-section_arrow" />
                </li>
                <RenderIf isTrue={isOpen}>
                    <li className="react-rainbow-selector_divider" />
                    <li>
                        <a
                            href="javascript:void(0);"
                            role="menuitem"
                            ref={this.references[1]}
                            className="react-rainbow-selector_item">
                            <img src={rainbowLogo} alt="react-rainbow" />
                            <div className="react-rainbow-selector_item-text">
                                <span className="react-rainbow-selector_item-text_header">react-prismic cms</span>
                                <span className="react-rainbow-selector_item-text_subheader">version 0.2.20</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:void(0);"
                            role="menuitem"
                            ref={this.references[2]}
                            className="react-rainbow-selector_item">
                            <img src={rainbowLogo} alt="react-rainbow" />
                            <div className="react-rainbow-selector_item-text">
                                <span className="react-rainbow-selector_item-text_header">react-rainbow-styleguide</span>
                                <span className="react-rainbow-selector_item-text_subheader">version 0.1.20</span>
                            </div>
                        </a>
                    </li>
                </RenderIf>
            </ul>
        );
    }
}

ProjectSelector.propTypes = {};

ProjectSelector.defaultProps = {};
