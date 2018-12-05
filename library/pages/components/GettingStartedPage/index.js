import React, { Component } from 'react';
import Tabset from '../../../../src/components/Tabset';
import Tab from '../../../../src/components/Tab';
import RenderIf from '../../../../src/components/RenderIf';
import FeatureList from '../FeatureList';
import CodeEditor from '../CodeEditor';
import './styles.css'

const HelloWorldExample =
    `import React from 'react';
    import ReactDOM from 'react-dom';
    import Button from 'react-rainbow-components/components/button';

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

export default class GettingStartedPage extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTabName: 'overview' };
        this.handleTabChange = this.handleTabChange.bind(this);
        this.topContainerStyles = {
            paddingTop: '40px',
            backgroundColor: 'whitesmoke',
            marginLeft: '-2rem',
            marginRight: '-2rem',
        };
    }

    handleTabChange(e, tabName) {
        this.setState({ activeTabName: tabName });
    }

    render() {
        const { activeTabName } = this.state;
        return (
            <div style={this.topContainerStyles}>
                <Tabset style={{ paddingLeft: '24px' }} activeTabName={activeTabName} onSelect={this.handleTabChange}>
                    <Tab name="overview" label="OVERVIEW" />
                    <Tab name="installation" label="INSTALLATION" />
                    <Tab name="usage" label="USAGE" />
                    <Tab name="contribuiting" label="CONTRIBUITING" />
                </Tabset>
                <section style={{ backgroundColor: 'white', padding: '1.25rem 2rem 0 2rem' }}>
                    <RenderIf isTrue={activeTabName === 'overview'}>
                        <h3 className="section-heading">
                            React Rainbow is a collection of components that will
                            reliably help you build your application in a snap.
                            Give it a hack and let us know what you think.
                        </h3>
                        <FeatureList />
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'installation'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <h3 className="section-heading">
                                React Rainbow Components is currently optimized for React 16.4.2
                            </h3>
                            <h2 className="section-heading-2">Install</h2>
                            <h5 className="section-heading-5">
                                React Rainbow Components is available as an
                                <a
                                    className="section-link"
                                    href="https://www.npmjs.com/package/react-rainbow-components"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    npm package
                                </a>
                            </h5>
                            <span className="section-italic">installing with npm</span>
                            <CodeEditor code="$ npm install react-rainbow-components --save" />
                            <span className="section-italic">installing with yarn</span>
                            <CodeEditor code="$ yarn add react-rainbow-components" />
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'usage'}>
                        <h3 className="section-heading">
                            There are several runnable examples in this Git repo,
                            but here's a Hello World one:
                        </h3>
                        <CodeEditor code={HelloWorldExample} />
                        <iframe
                            title="codesandbox example"
                            src="https://codesandbox.io/embed/24p8n0pnz0?hidenavigation=1&fontsize=14&view=preview"
                            style={{ width: '100%', height: 350, border: 0 }}
                        />
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'contribuiting'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <h3 className="section-heading">
                                We are excited that you are interested in
                                contributing to this project!
                            </h3>
                            <h2 className="section-heading-2"> Get your git on</h2>
                            <h5 className="section-heading-5">
                                Pull requests are very welcome,
                                but should be within the scope of the project,
                                and follow the repository's code conventions.
                                Before submitting a pull request, it's always good to file an issue,
                                so we can discuss the details of the PR.
                            </h5>
                            <h5 className="section-heading-5 rainbow-m-top_x-small">
                                Feel free to contribuite in rainbow-components available in
                                <a
                                    className="section-link"
                                    href="https://github.com/90milesbridge/react-rainbow"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    our repository in github
                                </a>
                            </h5>
                        </div>
                    </RenderIf>
                </section>
            </div>
        );
    }
}

GettingStartedPage.propTypes = {};

GettingStartedPage.defaultProps = {};
