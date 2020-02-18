/* eslint-disable react/no-unescaped-entities, import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Tabset from '../../../src/components/Tabset';
import Tab from '../../../src/components/Tab';
import RenderIf from '../../../src/components/RenderIf';
import CodeEditor from '../components/CodeEditor';
import CarbonAds from '../components/CarbonAds';
import Playground from 'rsg-components/Playground';
import './styles.css';

const defaultTheme = `const theme = {
        rainbow: {
            palette: {
                add the normalize API
        	},
        },
      };
    `;

export default function CustomizationPage(props) {
    const { examples, name, exampleMode, codeRevision } = props;
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="react-rainbow-customization_top-container">
            <Tabset
                className="react-rainbow-customization_top-container-tabset"
                activeTabName={activeTab}
                onSelect={(e, name) => setActiveTab(name)}
            >
                <Tab
                    name="overview"
                    label="OVERVIEW"
                    className="react-rainbow-customization_top-container-tab"
                />
                <Tab
                    name="qa"
                    label="Q&A"
                    className="react-rainbow-customization_top-container-tab"
                />
            </Tabset>
            <section className="react-rainbow-customization_container">
                <RenderIf isTrue={activeTab === 'overview'}>
                    <div>
                        <div className="rainbow-flex rainbow-flex_column rainbow-m-bottom_xx-large">
                            <div className="react-rainbow-customization_section-heading-container">
                                <h3 className="react-rainbow-getting-started_section-heading rainbow-m-right_medium">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </h3>
                                <CarbonAds className="react-rainbow-customization_carbon-ad" />
                            </div>
                        </div>
                        <h2 className="react-rainbow-customization_section-heading-2">
                            How you can customize React Rainbow Components?
                        </h2>
                        <h3 className="react-rainbow-customization_section-text">
                            Customization is allowed by using our {'<Application />'} component as a
                            wrapper of your entire application, the property theme it will accept an
                            object where you can specify your palette of colors.
                        </h3>

                        <br />

                        <h3 className="react-rainbow-customization_section-heading">Example</h3>
                        <Playground
                            code={examples[1].content}
                            evalInContext={examples[1].evalInContext}
                            key={`${codeRevision}/1`}
                            name={name}
                            index={1}
                            settings={examples[1].settings}
                            exampleMode={exampleMode}
                        />

                        <br />

                        <h2 className="react-rainbow-customization_section-heading-2">Theme API</h2>
                        <h3 className="react-rainbow-customization_section-heading">Palette</h3>
                        <h3 className="react-rainbow-customization_section-text">
                            The palette enables you to modify the color of the components.
                        </h3>

                        <br />

                        <h3 className="react-rainbow-customization_section-text">
                            Table with props
                        </h3>

                        <br />

                        <h2 className="react-rainbow-customization_section-heading-2">
                            Theme generate API
                        </h2>
                        <h3 className="react-rainbow-customization_section-text">
                            You might wonder how all the components colors are being set based on
                            five colors brand success warning error and mainBackground . Well, we do
                            compute the rest of the color we use in our internal implementation
                            based on accessibility standards and also we expose those generated
                            values to you through the react context because you might want to make
                            use of those values in order to be consistent with the colors of your
                            app.
                        </h3>

                        <CodeEditor code={defaultTheme} />

                        <h3 className="react-rainbow-customization_section-heading">Example</h3>
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
                <RenderIf isTrue={activeTab === 'qa'}>
                    <div className="rainbow-flex rainbow-flex_column">
                        <div className="react-rainbow-customization_section-heading-container">
                            <div className="rainbow-m-right_medium">
                                <h2 className="react-rainbow-getting-started_section-heading-2">
                                    Q&A
                                </h2>
                            </div>
                            <CarbonAds className="react-rainbow-customization_carbon-ad" />
                        </div>
                        <ul>
                            <li className="react-rainbow-customization_section-text">
                                Theme variation on all the components at the same time.
                            </li>
                            <li className="react-rainbow-customization_section-text">
                                Theme variation for a specific component.
                            </li>
                            <li className="react-rainbow-customization_section-text">
                                Theme variation for your own UI
                            </li>
                        </ul>
                    </div>
                </RenderIf>
            </section>
        </div>
    );
}
