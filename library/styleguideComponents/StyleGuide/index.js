import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from './.././../ga';
import Logo from './../Logo';
import RenderIf from './../../../src/components/RenderIf';
import ComponentsPage from './ComponentsPage';
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
        const {
            children,
            title,
            toc,
            version,
        } = this.props;
        const components = toc.props.sections[1].components;

        return (
            <div className="react-rainbow-styleguide-container rainbow-position-align_start">
                <aside className="react-rainbow-sidebar">
                    <Logo title={title} version={version} />
                    {toc}
                </aside>
                <main className="react-rainbow-main-content">
                    <RenderIf isTrue={window.location.hash !== '#/ComponentsPage'}>
                        {children}
                    </RenderIf>
                    <RenderIf isTrue={window.location.hash === '#/ComponentsPage'}>
                        <ComponentsPage components={components} />
                    </RenderIf>
                </main>
            </div>
        );
    }
}

StyleGuide.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    toc: PropTypes.object.isRequired,
    version: PropTypes.string,
};

StyleGuide.defaultProps = {
    version: '',
};
