/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { Provider } from 'react-redux';
import Application from './../../../src/components/Application';
import ReactGA from '.././../ga';
import RenderIf from '../../../src/components/RenderIf';
import ButtonIcon from '../../../src/components/ButtonIcon';
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

const StyleButtonIcon = styled(ButtonIcon)`
    svg {
        width: 36px !important;
        height: 35px !important;
        color: #fff;
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
            <Provider>
                <div className="react-rainbow-styleguide-container rainbow-position-align_start">
                    <ProjectSelector />
                    <Ribbon />
                    <aside className={this.getSideBarClassNames()}>
                        {toc}
                        <a
                            href="https://twitter.com/ReactRainbow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="react-rainbow-styleguide_twitter-link"
                        >
                            <TwitterIcon style={twitterIconStyle} />
                        </a>
                    </aside>
                    <div
                        className={this.getBackdropClassNames()}
                        role="presentation"
                        onClick={this.toggleSidebar}
                    />
                    <main className="react-rainbow-main-content">
                        <RenderIf isTrue={window.location.hash !== '#/Components'}>
                            {children}
                        </RenderIf>
                        <RenderIf isTrue={window.location.hash === '#/Components'}>
                            <ComponentsPage components={components} />
                        </RenderIf>
                    </main>
                    <ButtonIcon
                        className="react-rainbow-styleguide_hamburger-button"
                        icon={<BarsIcon />}
                        size="large"
                        onClick={this.toggleSidebar}
                    />
                    <StyleButtonIcon
                        className="react-rainbow-styleguide-open-chat-button"
                        shaded
                        variant="brand"
                        size="large"
                        icon={<ChatIcon />}
                    />
                    <GitterChat
                        room="react-rainbow-components/community"
                        activationElement=".react-rainbow-styleguide-open-chat-button"
                    />
                </div>
            </Provider>
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
