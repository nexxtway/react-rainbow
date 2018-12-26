import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from './.././../ga';
import RenderIf from './../../../src/components/RenderIf';
import ComponentsPage from './ComponentsPage';
import ProjectSelector from '../ProjectSelector';
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
            toc,
        } = this.props;
        const components = toc.props.sections[1].components;

        return (
            <div className="react-rainbow-styleguide-container rainbow-position-align_start">
                <ProjectSelector />
                <aside className="react-rainbow-styleguide-sidebar">
                    {toc}
                </aside>
                <main className="react-rainbow-main-content">
                    <RenderIf isTrue={window.location.hash !== '#/Components'}>
                        {children}
                    </RenderIf>
                    <RenderIf isTrue={window.location.hash === '#/Components'}>
                        <ComponentsPage components={components} />
                    </RenderIf>
                </main>
            </div>
        );
    }
}

StyleGuide.propTypes = {
    children: PropTypes.node.isRequired,
    toc: PropTypes.object.isRequired,
};
