import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';
import styled from 'styled-components';
import ButtonIcon from '../../../src/components/ButtonIcon';
import Application from './../../../src/components/Application';
import ReactGA from '.././../ga';
import RenderIf from '../../../src/components/RenderIf';
import ComponentsPage from '../../pages/ComponentsPage';
import ProjectSelector from '../ProjectSelector';
import GitterChat from '../GitterChat';
import ChatIcon from '../../exampleComponents/Icons/chat';
import TwitterIcon from '../../exampleComponents/Icons/twitter';
import Ribbon from '../RibbonRenderer';
import BarsIcon from './barsIcon';

import './styles.css';

// analytics
function trackPageview() {
    ReactGA.pageview(window.location.hash);
}

const twitterIconStyle = {
    width: '18px',
    height: '15px',
    color: '#ffffff',
};

export const GitterButtonIcon = styled(ButtonIcon)`
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 64px;
    height: 64px;
    z-index: 6000;

    @media (max-width: 800px) {
        bottom: 12px;
        right: 12px;
    }

    svg {
        width: 36px !important;
        height: 35px !important;
        color: #fff;
    }
`;

export const HamburgerButtonIcon = styled(ButtonIcon)`
    position: fixed;
    top: 8px;
    right: 8px;
    z-index: 6000;
    display: none;

    @media (max-width: 800px) {
        display: inline-block;
    }
`;

export const TwitterLink = styled.a`
    height: 32px;
    width: 32px;
    border-radius: 32px;
    background-color: #d7dae8;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.05s ease;
    position: absolute;
    bottom: 24px;
    left: 34px;

    &:hover,
    &:focus,
    &:active {
        background-color: rgb(29, 161, 242);
        transition: all 0.05s ease;
        border-radius: 36px;
        height: 36px;
        width: 36px;
        bottom: 22px;
        left: 32px;
    }
`;

class StyleGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarHiddenInSmallScreen: true,
        };
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    componentDidMount() {
        // analytics
        if (window.location.hash === '') {
            ReactGA.pageview('/#/GettingStarted');
        } else {
            ReactGA.pageview(window.location.hash);
        }
        window.addEventListener('hashchange', this.handleUrlChange);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.handleUrlChange);
    }

    getSideBarClassNames() {
        const { isSidebarHiddenInSmallScreen } = this.state;
        return classnames('react-rainbow-styleguide-sidebar', {
            'react-rainbow-styleguide_hidden-sidebar': isSidebarHiddenInSmallScreen,
        });
    }

    getBackdropClassNames() {
        const { isSidebarHiddenInSmallScreen } = this.state;
        return classnames('react-rainbow-styleguide_backdrop', {
            'react-rainbow-styleguide_hidden-content': isSidebarHiddenInSmallScreen,
        });
    }

    handleUrlChange() {
        trackPageview();
        this.setState({
            isSidebarHiddenInSmallScreen: true,
        });
    }

    toggleSidebar() {
        const { isSidebarHiddenInSmallScreen } = this.state;
        this.setState({
            isSidebarHiddenInSmallScreen: !isSidebarHiddenInSmallScreen,
        });
    }

    render() {
        const { children, toc } = this.props;
        const components = toc.props.sections[1].components;

        return (
            <div className="react-rainbow-styleguide-container rainbow-position-align_start">
                <ProjectSelector />
                <Ribbon />
                <aside className={this.getSideBarClassNames()}>
                    {toc}
                    <TwitterLink
                        href="https://twitter.com/ReactRainbow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon style={twitterIconStyle} />
                    </TwitterLink>
                </aside>
                <div
                    className={this.getBackdropClassNames()}
                    role="presentation"
                    onClick={this.toggleSidebar}
                />
                <main className="react-rainbow-main-content">
                    <RenderIf isTrue={window.location.hash !== '#/Components'}>{children}</RenderIf>
                    <RenderIf isTrue={window.location.hash === '#/Components'}>
                        <ComponentsPage components={components} />
                    </RenderIf>
                </main>
                <HamburgerButtonIcon
                    icon={<BarsIcon />}
                    size="large"
                    onClick={this.toggleSidebar}
                />
                <GitterButtonIcon shaded variant="brand" size="large" icon={<ChatIcon />} />
                <GitterChat
                    room="react-rainbow-components/community"
                    activationElement=".react-rainbow-styleguide-open-chat-button"
                />
            </div>
        );
    }
}

StyleGuide.propTypes = {
    children: PropTypes.node.isRequired,
    toc: PropTypes.object.isRequired,
};

export default function LibraryWrapper(props) {
    return (
        <Application>
            <StyleGuide {...props} />
        </Application>
    );
}
