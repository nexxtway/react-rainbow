import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactGA from '.././../ga';
import RenderIf from '../../../src/components/RenderIf';
import ButtonIcon from '../../../src/components/ButtonIcon';
import ComponentsPage from '../../pages/ComponentsPage';
import ProjectSelector from '../ProjectSelector';
import GitterChat from '../GitterChat';
import chat from './../../../assets/icons/chat.svg';
import './styles.css';

// analytics
function trackPageview() {
    ReactGA.pageview(window.location.hash);
}

export default class StyleGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarHiddenInSmallScreen: true,
        };
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount() {
        // analytics
        if (window.location.hash === '') {
            ReactGA.pageview('/#/GettingStarted');
        } else {
            ReactGA.pageview(window.location.hash);
        }
        window.addEventListener('hashchange', trackPageview);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', trackPageview);
    }

    getSideBarClassNames() {
        const { isSidebarHiddenInSmallScreen } = this.state;
        return classnames('react-rainbow-styleguide-sidebar', {
            'class-for-set-display-none-in-media-query': isSidebarHiddenInSmallScreen,
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
                {/* <RenderIf isTrue={isSidebarHiddenInSmallScreen}>
                    <div
                        className="react-rainbow-styleguide_backdrop"
                        role="presentation"
                        onClick={toggleSidebar}
                    />
                </RenderIf> */}
                <ProjectSelector />
                <aside className={this.getSideBarClassNames()}>{toc}</aside>
                <main className="react-rainbow-main-content">
                    <RenderIf isTrue={window.location.hash !== '#/Components'}>{children}</RenderIf>
                    <RenderIf isTrue={window.location.hash === '#/Components'}>
                        <ComponentsPage
                            components={components}
                            onToggleSidebar={this.toggleSidebar}
                        />
                    </RenderIf>
                </main>
                <ButtonIcon
                    className="react-rainbow-styleguide-open-chat-button"
                    shaded
                    variant="brand"
                    size="large"
                    icon={<img src={chat} alt="chat icon" />}
                />
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
