/* eslint-disable react/no-unescaped-entities, import/no-extraneous-dependencies */
import React, { Component } from 'react';
import Tabset from '../../../src/components/Tabset';
import Tab from '../../../src/components/Tab';
import RenderIf from '../../../src/components/RenderIf';
import CodeEditor from '../components/CodeEditor';
import CarbonAds from '../components/CarbonAds';
import Playground from 'rsg-components/Playground';
import './styles.css';

const defaultTheme = `1	const theme = {
        rainbow: {
            palette: {
                brand: '#f8752d',
            		success: ‘’,
    				…
        	  },
        },
      };
    `;

export default class CustomizationPage extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTabName: 'theming' };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(e, tabName) {
        this.setState({ activeTabName: tabName });
    }

    render() {
        const { examples, name, exampleMode, codeRevision } = this.props;
        const { activeTabName } = this.state;
        return (
            <div className="react-rainbow-customization_top-container">
                <Tabset
                    className="react-rainbow-customization_top-container-tabset"
                    activeTabName={activeTabName}
                    onSelect={this.handleTabChange}
                >
                    <Tab
                        name="theming"
                        label="THEMING"
                        className="react-rainbow-customization_top-container-tab"
                    />
                    <Tab
                        name="components"
                        label="COMPONENTS"
                        className="react-rainbow-customization_top-container-tab"
                    />
                    <Tab
                        name="default-theme"
                        label="DEFAULT THEME"
                        className="react-rainbow-customization_top-container-tab"
                    />
                </Tabset>
                <section className="react-rainbow-customization_container">
                    <RenderIf isTrue={activeTabName === 'theming'}>
                        <div>
                            <h2 className="react-rainbow-customization_section-heading-2">
                                Customize React Rainbow with your own palette. You can change the
                                main colors on your palette brand, success, warning, error and more…
                            </h2>
                            <h2 className="react-rainbow-customization_section-heading-2">
                                Overview
                            </h2>
                            <h3 className="react-rainbow-customization_section-heading">
                                The theme specifies the color of the components, darkness of the
                                surfaces, level of shadow, appropriate opacity of texts elements,
                                etc. Themes let you apply a consistent tone to your app. It allows
                                you to customize all design aspects of your project in order to meet
                                the specific needs of your business or brand. To promote greater
                                consistency between apps, light and dark theme types are available
                                to choose from. By default, components use the light theme type.
                            </h3>
                            <h2 className="react-rainbow-customization_section-heading-2">
                                Application
                            </h2>
                            <h3 className="react-rainbow-customization_section-heading">
                                If you wish to customize the theme, you need to use the{' '}
                                {'<Application />'} component in order to inject a theme into your
                                application. However, this is optional; React Rainbow components
                                come with a default theme. Application relies on the context feature
                                of React to pass the theme down to the components, so you need to
                                make sure that Application is a parent of the components you are
                                trying to customize. You can learn more about this in the API
                                section
                            </h3>
                            <br />

                            <Playground
                                code={examples[1].content}
                                evalInContext={examples[1].evalInContext}
                                key={`${codeRevision}/1`}
                                name={name}
                                index={1}
                                settings={examples[1].settings}
                                exampleMode={exampleMode}
                            />

                            <h2 className="react-rainbow-customization_section-heading-2">API</h2>
                            <h3 className="react-rainbow-customization_section-heading">
                                Generate a theme base on the options received.
                            </h3>
                            <br />
                            <CodeEditor code={defaultTheme} />
                            <h3 className="react-rainbow-customization_section-heading">Palette</h3>
                            <h3 className="react-rainbow-customization_section-heading">
                                The palette enables you to modify the color of the components to
                                suit your brand.
                            </h3>
                            <h3 className="react-rainbow-customization_section-heading">
                                Intentions:
                            </h3>
                            <h3 className="react-rainbow-customization_section-heading">
                                A color intention is a mapping of a palette to a given intention
                                within your application. The theme exposes the following color
                                intentions:
                            </h3>
                            <ul className="react-rainbow-customization_ul">
                                <li className="react-rainbow-rainbow-components_list-element">
                                    brand: used to represent the predominant color of your brand.
                                </li>
                                <li className="react-rainbow-rainbow-components_list-element">
                                    error: used to represent interface elements that the user should
                                    be made aware of.
                                </li>
                                <li className="react-rainbow-rainbow-components_list-element">
                                    warning: used to represent potentially dangerous actions or
                                    important messages.
                                </li>
                                <li className="react-rainbow-rainbow-components_list-element">
                                    success: used to indicate the successful completion of an action
                                    that user triggered.
                                </li>
                                <li className="react-rainbow-rainbow-components_list-element">
                                    mainBackground: used to represent primary interface elements for
                                    a user.
                                </li>
                            </ul>
                            <h3 className="react-rainbow-customization_section-heading">
                                The default palette uses the ….
                            </h3>

                            <h3 className="react-rainbow-customization_section-heading">Example</h3>
                            <br />
                            <Playground
                                code={examples[3].content}
                                evalInContext={examples[3].evalInContext}
                                key={`${codeRevision}/3`}
                                name={name}
                                index={3}
                                settings={examples[3].settings}
                                exampleMode={exampleMode}
                            />
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'components'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <div className="react-rainbow-customization_section-heading-container">
                                <div className="rainbow-m-right_medium">
                                    <h2 className="react-rainbow-getting-started_section-heading-2">
                                        Customizing components
                                    </h2>
                                    <h2 className="react-rainbow-getting-started_section-heading-2">
                                        You can easily customize the appearance of a React Rainbow
                                        component.
                                    </h2>
                                    <h3 className="react-rainbow-getting-started_section-heading">
                                        As components can be used in different contexts, there are
                                        several approaches to this. Going from the narrowest
                                        use-case to the broadest, these are:
                                    </h3>
                                    <ul className="react-rainbow-customization_ul">
                                        <li className="react-rainbow-rainbow-components_list-element">
                                            Global theme variation
                                        </li>
                                        <li className="react-rainbow-rainbow-components_list-element">
                                            Nesting the theme
                                        </li>
                                    </ul>
                                </div>
                                <CarbonAds className="react-rainbow-customization_carbon-ad" />
                            </div>
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'default-theme'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <div className="react-rainbow-customization_section-heading-container">
                                <div className="rainbow-m-right_medium">
                                    <h2 className="react-rainbow-getting-started_section-heading-2">
                                        Here's what the theme object looks like with the default
                                        values.
                                    </h2>
                                    <h3 className="react-rainbow-customization_section-heading">
                                        Explore the default theme object:
                                    </h3>
                                </div>
                                <CarbonAds className="react-rainbow-customization_carbon-ad" />
                            </div>
                            <CodeEditor code={defaultTheme} />
                        </div>
                    </RenderIf>
                </section>
            </div>
        );
    }
}
