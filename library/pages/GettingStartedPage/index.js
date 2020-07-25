/* eslint-disable react/no-unescaped-entities, import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Tabset from '../../../src/components/Tabset';
import Tab from '../../../src/components/Tab';
import RenderIf from '../../../src/components/RenderIf';
import FeatureList from '../components/FeatureList';
import CodeEditor from '../components/CodeEditor';
import CarbonAds from '../components/CarbonAds';
import githublogo from './github.svg';
import './styles.css';

const HelloWorldExample = `import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-rainbow-components';

function App() {
    return (
        <Button
            label="Hello World!"
            variant="brand"
            onClick={() => alert('Hello World!')}
        />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
`;

function getReactVersion() {
    // eslint-disable-next-line no-undef
    const version = reactVersion;
    if (version && typeof version === 'string') {
        return version[0] === '^' ? version.slice(1) : version;
    }
    return '16.8.0';
}

export default class GettingStartedPage extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTabName: 'overview' };
        this.handleTabChange = this.handleTabChange.bind(this);
        this.reactV = getReactVersion();
    }

    handleTabChange(e, tabName) {
        this.setState({ activeTabName: tabName });
    }

    render() {
        const { activeTabName } = this.state;
        return (
            <div className="react-rainbow-getting-started_top-container">
                <Tabset
                    className="react-rainbow-getting-started_top-container-tabset"
                    activeTabName={activeTabName}
                    onSelect={this.handleTabChange}
                >
                    <Tab
                        name="overview"
                        label="OVERVIEW"
                        className="react-rainbow-getting-started_top-container-tab"
                    />
                    <Tab
                        name="installation"
                        label="INSTALLATION"
                        className="react-rainbow-getting-started_top-container-tab react-rainbow-getting-started_top-container-tab_shortened"
                    />
                    <Tab
                        name="usage"
                        label="USAGE"
                        className="react-rainbow-getting-started_top-container-tab"
                    />
                    <Tab
                        name="contributing"
                        label="CONTRIBUTING"
                        className="react-rainbow-getting-started_top-container-tab react-rainbow-getting-started_top-container-tab_shortened"
                    />
                </Tabset>
                <section className="react-rainbow-getting-started_container">
                    <RenderIf isTrue={activeTabName === 'overview'}>
                        <div className="react-rainbow-getting-started_section-heading-container">
                            <h3 className="react-rainbow-getting-started_section-heading rainbow-m-right_medium">
                                React Rainbow is a collection of components that will reliably help
                                you build your application in a snap. Give it a hack and let us know
                                what you think.
                            </h3>
                            <CarbonAds className="react-rainbow-getting-started_carbon-ad" />
                        </div>
                        <FeatureList />
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'installation'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <div className="react-rainbow-getting-started_section-heading-container">
                                <div className="rainbow-m-right_medium">
                                    <h3 className="react-rainbow-getting-started_section-heading">
                                        {`React Rainbow Components is currently optimized for React ${
                                            this.reactV
                                        }`}
                                    </h3>
                                    <h2 className="react-rainbow-getting-started_section-heading-2">
                                        Install
                                    </h2>
                                    <h5 className="react-rainbow-getting-started_section-heading-5">
                                        React Rainbow Components is available as an
                                        <a
                                            className="react-rainbow-getting-started_section-link"
                                            href="https://www.npmjs.com/package/react-rainbow-components"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            npm package
                                        </a>
                                    </h5>
                                    <span className="react-rainbow-getting-started_section-italic">
                                        installing with npm
                                    </span>
                                </div>
                                <CarbonAds className="react-rainbow-getting-started_carbon-ad" />
                            </div>
                            <CodeEditor code="$ npm install react-rainbow-components --save" />
                            <span className="react-rainbow-getting-started_section-italic">
                                installing with yarn
                            </span>
                            <CodeEditor code="$ yarn add react-rainbow-components" />
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'usage'}>
                        <div className="react-rainbow-getting-started_section-heading-container rainbow-align_center rainbow-m-bottom_medium">
                            <h3 className="react-rainbow-getting-started_section-heading rainbow-m-right_medium">
                                There are several runnable examples in this Git repo, but here's a
                                Hello World one:
                            </h3>
                            <CarbonAds className="react-rainbow-getting-started_carbon-ad" />
                        </div>
                        <CodeEditor code={HelloWorldExample} />
                        <iframe
                            title="codesandbox example"
                            src="https://codesandbox.io/embed/24p8n0pnz0?hidenavigation=1&fontsize=14&view=preview"
                            className="react-rainbow-getting-started_example"
                        />
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'contributing'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <div className="react-rainbow-getting-started_section-heading-container">
                                <div className="rainbow-m-right_medium">
                                    <h3 className="react-rainbow-getting-started_section-heading">
                                        We are excited that you are interested in contributing to
                                        this project!
                                    </h3>
                                    <h2 className="react-rainbow-getting-started_section-heading-2">
                                        Managing Node/Yarn versions with Volta
                                    </h2>
                                    <h5 className="react-rainbow-getting-started_section-heading-5">
                                        Our project runs with specific Node/Yarn versions contrains,
                                        as a good practice you should consider to install Volta that
                                        it will take care of managing seamlessly Node/Yarn versions
                                        for you.
                                    </h5>
                                    <a
                                        className="rainbow-link rainbow-m-left_xx-small react-rainbow-getting-started_issue-link"
                                        href="https://docs.volta.sh/guide/getting-started"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Getting started with Volta
                                    </a>
                                </div>
                                <CarbonAds className="react-rainbow-getting-started_carbon-ad" />
                            </div>
                            <h2 className="react-rainbow-getting-started_section-heading-2">
                                Get your git on
                            </h2>
                            <h5 className="react-rainbow-getting-started_section-heading-5">
                                You can help us improve React Rainbow Components, the first step to
                                begin collaborating is to create an issue before submitting a pull
                                request, it's always good to file an issue, so we can discuss the
                                details of your approach or suggestion.
                            </h5>
                            <a
                                className="rainbow-link rainbow-m-left_xx-small react-rainbow-getting-started_issue-link"
                                href="https://github.com/nexxtway/react-rainbow/issues/new/choose"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={githublogo}
                                    alt="github logo"
                                    className="react-rainbow-getting-started_github-icon rainbow-m-right_x-small"
                                />
                                Create an Issue here
                            </a>
                            <h3 className="react-rainbow-getting-started_section-heading-3">
                                Discussions
                            </h3>
                            <h5 className="react-rainbow-getting-started_section-heading-5">
                                While using our components on your project and/or collaborating with
                                the development of any of the the react-rainbow-components, you have
                                suggestions for improvements, implementation questions, or any
                                issues that may merit discussion. We recommend creating a
                                “Discussions” issue type in Github.
                            </h5>
                            <a
                                className="rainbow-link rainbow-m-left_xx-small react-rainbow-getting-started_issue-link"
                                href="https://github.com/nexxtway/react-rainbow/issues/new?assignees=&labels=discussion&template=discussion.md&title="
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={githublogo}
                                    alt="github logo"
                                    className="react-rainbow-getting-started_github-icon rainbow-m-right_x-small"
                                />
                                Create a Discussion here
                            </a>
                            <h3 className="react-rainbow-getting-started_section-heading-3">
                                Start contributing
                            </h3>
                            <h5 className="react-rainbow-getting-started_section-heading-5">
                                Feel free to contribute in rainbow-components available in
                                <a
                                    className="rainbow-link rainbow-m-left_xx-small"
                                    href="https://github.com/nexxtway/react-rainbow"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    our repository in github
                                </a>
                            </h5>
                            <h5 className="react-rainbow-getting-started_section-heading-5 rainbow-m-top_small">
                                Pull requests are very welcome, but should be within the scope of
                                the project. Before making your contribution go through the
                                following steps:
                            </h5>
                            <h5 className="react-rainbow-getting-started_section-heading-5 rainbow-m-vertical_small rainbow-m-left_small">
                                1. Fork the React Rainbow Components repository on Github. <br />
                                2. Clone your fork to your local machine{' '}
                                <span className="react-rainbow-font-code">
                                    git clone git@github.com:[yourname]/react-rainbow.git
                                </span>{' '}
                                <br />
                                3. Create a branch{' '}
                                <span className="react-rainbow-font-code">
                                    {' '}
                                    git checkout -b my-topic-branch{' '}
                                </span>{' '}
                                <br />
                                4. Make your changes, lint, then push to GitHub with{' '}
                                <span className="react-rainbow-font-code">
                                    git push origin my-topic-branch{' '}
                                </span>{' '}
                                <br />
                                5. Visit GitHub and make your pull request.
                            </h5>
                            <a
                                className="rainbow-link rainbow-m-left_xx-small react-rainbow-getting-started_issue-link rainbow-m-bottom_large"
                                href="https://github.com/nexxtway/react-rainbow/blob/master/CONTRIBUTING.md"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                See more details about how to collaborate?
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="rainbow-m-left_small"
                                />
                            </a>
                        </div>
                    </RenderIf>
                </section>
            </div>
        );
    }
}
