import React from 'react';
import PropTypes from 'prop-types';
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

    render() {
        const { children, toc, isSidebarHidden, toogleSidebar } = this.props;
        const components = toc.props.sections[1].components;

        return (
            <div className="react-rainbow-styleguide-container rainbow-position-align_start">
                {/* <RenderIf isTrue={!isSidebarHidden}>
                    <div
                        className="react-rainbow-styleguide_backdrop"
                        role="presentation"
                        onClick={toogleSidebar}
                    />
                </RenderIf> */}
                <ProjectSelector />
                <aside className="react-rainbow-styleguide-sidebar">{toc}</aside>
                <main className="react-rainbow-main-content">
                    <RenderIf isTrue={window.location.hash !== '#/Components'}>{children}</RenderIf>
                    <RenderIf isTrue={window.location.hash === '#/Components'}>
                        <ComponentsPage components={components} />
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
    toogleSidebar: PropTypes.func.isRequired,
    isSidebarHidden: PropTypes.bool.isRequired,
};
