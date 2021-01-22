/* eslint-disable no-script-url */
import React, { Component } from 'react';
import classnames from 'classnames';
import { DOWN_KEY, ESCAPE_KEY, UP_KEY } from '../../../src/libs/constants';
import rainbowLogo from '../../../assets/images/rainbow-logo.svg';
import reactPrismicLogo from '../../../assets/images/react-prismic.svg';
import RenderIf from '../../../src/components/RenderIf';
import MenuDivider from '../../../src/components/MenuDivider';
import RightArrow from './rightArrow';
import './styles.css';
import getLibraryVersion from './get-library-version';

export default class ProjectSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            childFocusedIndex: 0,
            componentLibraryVersion: '0.0',
            prismicLibraryVersion: '0.0',
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
        this.references = Array(1)
            .fill(0)
            .map(() => React.createRef());
    }

    componentDidMount() {
        getLibraryVersion(
            'https://api.github.com/repos/nexxtway/react-rainbow/contents/package.json',
        ).then(version => {
            this.setState({ componentLibraryVersion: version });
        });
        getLibraryVersion(
            'https://api.github.com/repos/reiniergs/react-prismic-cms/contents/package.json',
        ).then(version => {
            this.setState({ prismicLibraryVersion: version });
        });
    }

    getContainerClassNames() {
        const { isOpen } = this.state;
        return classnames('react-rainbow-selector', { 'react-rainbow-selector--open': isOpen });
    }

    getTabIndex() {
        const { isOpen } = this.state;
        if (isOpen) {
            return -1;
        }
        return 0;
    }

    handleKeyPressed(event) {
        if (this.keyHandlerMap[event.keyCode]) {
            return this.keyHandlerMap[event.keyCode]();
        }
        return null;
    }

    handleKeyUp() {
        const { childFocusedIndex } = this.state;
        if (this.references.length < 2) {
            return null;
        }
        if (childFocusedIndex === 0) {
            return this.focusChild(this.references.length - 1);
        }
        return this.focusChild(childFocusedIndex - 1);
    }

    handleKeyDown() {
        const { childFocusedIndex } = this.state;
        if (this.references.length < 2) {
            return null;
        }
        if (childFocusedIndex === this.references.length - 1) {
            return this.focusChild(0);
        }
        return this.focusChild(childFocusedIndex + 1);
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
        const { componentLibraryVersion, prismicLibraryVersion } = this.state;
        return (
            <ul
                className={this.getContainerClassNames()}
                role="menu"
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}
            >
                <li
                    className="react-rainbow-selector_selected-item-section"
                    onClick={this.toggleMenu}
                    role="menuitem"
                >
                    <a
                        href="javascript:void(0);"
                        className="react-rainbow-selector_item"
                        tabIndex={this.getTabIndex()}
                    >
                        <img
                            src={rainbowLogo}
                            alt="react-rainbow"
                            className="react-rainbow-selector_item-image"
                        />
                        <div className="react-rainbow-selector_item-text">
                            <span className="react-rainbow-selector_item-text_header">
                                react-rainbow-components
                            </span>
                            <span className="react-rainbow-selector_item-text_subheader">
                                version {componentLibraryVersion}
                            </span>
                        </div>
                    </a>
                    <RightArrow isExpanded={isOpen} />
                </li>
                <RenderIf isTrue={isOpen}>
                    <MenuDivider className="react-rainbow-selector_divider" />
                    <li>
                        <a
                            href=" https://react-prismic-cms.web.app/"
                            role="menuitem"
                            ref={this.references[0]}
                            onMouseEnter={() => this.focusChild(0)}
                            className="react-rainbow-selector_item"
                        >
                            <img
                                src={reactPrismicLogo}
                                alt="react-rainbow"
                                className="react-rainbow-selector_item-image"
                            />
                            <div className="react-rainbow-selector_item-text">
                                <span className="react-rainbow-selector_item-text_header">
                                    react-prismic-cms
                                </span>
                                <span className="react-rainbow-selector_item-text_subheader">
                                    version {prismicLibraryVersion}
                                </span>
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
