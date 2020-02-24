/* eslint-disable react/no-unescaped-entities, import/no-extraneous-dependencies */
import React, { useState, useContext } from 'react';
import Tabset from '../../../src/components/Tabset';
import Tab from '../../../src/components/Tab';
import Table from '../../../src/components/Table';
import Column from '../../../src/components/Column';
import Badge from '../../../src/components/Badge';
import RenderIf from '../../../src/components/RenderIf';
import CodeEditor from '../components/CodeEditor';
import CarbonAds from '../components/CarbonAds';
import Playground from 'rsg-components/Playground';
import {
    COLOR_WHITE,
    COLOR_GRAY_2,
    COLOR_GRAY_1,
    COLOR_GRAY_4,
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_DARK_1,
} from '../../../src/styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import './styles.css';

const defaultTheme = `const theme = {
        rainbow: {
            palette: { 
                brand: {
                    main: "#01b6f5",
                    dark: "rgb(0, 163, 220)",
                    light: "rgb(204, 240, 253)",
                },
                success: {
                    main: "#1de9b6",
                    dark: "rgb(26, 209, 163)",
                    light: "rgb(209, 250, 240)",
                },
                error: {
                    main: "#fe4849",
                    dark: "rgb(228, 64, 65)",
                    light: "rgb(254, 218, 218)",
                },
                warning: {
                    main: "#fc0",
                },
                background: {
                    main: "#fff",
                    highlight: "#e3e5ed",
                    secondary: "#f9fafc",
                    disabled: "#EFF1F5",
                },
                text: {
                    main: "#061c3f",
                    title: "#576574",
                    header: "#a4a7b5",
                    label: "#576574",
                    disabled: "#e3e5ed",
                },
                border: {
                    main: "#a4a7b5",
                    divider: "#e3e5ed",
                    disabled: "#e3e5ed",
                },
                action: {
                    active: "#EFF1F5",
                    hover: "#EFF1F5",
                },
            },
            shadows: {
                brand: "0 0 2px #01b6f5",
                success: "0 0 2px #1de9b6",
                error: "0 0 2px #fe4849",
                shadow_1: "0 0 2px 0 #a4a7b5",
                shadow_2: "0 2px 4px 0 #e3e5ed",
                shadow_3: "0 0 1px 0 #a4a7b5",
                shadow_4: "0 1px 2px 0 #e3e5ed",
                shadow_5: "0 0 3px #EFF1F5",
                shadow_6: "0 2px 12px 0 #e3e5ed",
                shadow_7: "0 0 0 4px #e3e5ed",
            },
        },
    };
`;

const data = [
    {
        name: 'brand',
        type: 'string',
        required: '',
        default: COLOR_BRAND,
        description: 'Represent the predominant color of your brand.',
    },
    {
        name: 'error',
        type: 'string',
        required: '',
        default: COLOR_ERROR,
        description: 'Represent interface elements that the user should be made aware of.',
    },
    {
        name: 'warning',
        type: 'string',
        required: '',
        default: COLOR_WARNING,
        description: 'Represent potentially dangerous actions or important messages.',
    },
    {
        name: 'success',
        type: 'string',
        required: '',
        default: COLOR_SUCCESS,
        description: 'Indicate the successful completion of an action that user triggered.',
    },
    {
        name: 'mainBackground',
        type: 'string',
        required: '',
        default: COLOR_WHITE,
        description: 'Used to represent primary interface elements for an app.',
    },
];

const StyledPanel = styled.div`
    border: 1px solid ${props => props.theme.rainbow.palette.border.divider};
    border-radius: 14px;
    padding-bottom: 12px;
`;

const StyledDefaultBadge = styled(Badge)`
    ${props => {
        const contrastColor = props.theme.rainbow.palette.getContrastText(props.color);
        return `
            color: ${contrastColor};
            background-color: ${props.color};
            border-color: ${props.theme.rainbow.palette.border.divider};
        `;
    }}
`;

const DefaultBadge = ({ value }) => (
    <StyledDefaultBadge label={value} variant="brand" color={value} />
);

const StyledBadge = styled.span`
    color: ${COLOR_DARK_1};
    background-color: ${COLOR_GRAY_1};
    border: 1px solid ${COLOR_GRAY_1};
    padding: 0.1rem 0.25rem 0.1rem 0.25rem;
    margin: 0 0.15rem;
    border-radius: 4px;
    font-family: Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 14px;
`;

const StyledTable = styled(Table)`
    font-family: Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 12px;
`;

export default function CustomizationPage(props) {
    const { examples, name, exampleMode, codeRevision } = props;
    const [activeTab, setActiveTab] = useState('overview');
    const theme = useContext(ThemeContext);

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
                            Customization is allowed by using our{' '}
                            <StyledBadge>{'<Application />'}</StyledBadge> component as a wrapper of
                            your entire application, the property theme it will accept an object
                            where you can specify your palette of colors.
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

                        <StyledPanel>
                            <h3 className="react-rainbow-customization_section-text rainbow-m-vertical_medium rainbow-m-horizontal_small">
                                <FontAwesomeIcon
                                    className="rainbow-m-right_small"
                                    icon={faList}
                                    color={theme.rainbow.palette.brand.main}
                                />{' '}
                                Props
                            </h3>
                            <StyledTable data={data} keyField="name">
                                <Column header="Prop Name" field="name" defaultWidth={160} />
                                <Column header="Type" field="type" defaultWidth={80} />
                                <Column header="Required" field="required" defaultWidth={120} />
                                <Column
                                    header="Default"
                                    field="default"
                                    defaultWidth={130}
                                    component={DefaultBadge}
                                />
                                <Column header="Description" field="description" />
                            </StyledTable>
                        </StyledPanel>

                        <br />

                        <h2 className="react-rainbow-customization_section-heading-2">
                            Theme generate API
                        </h2>
                        <h3 className="react-rainbow-customization_section-text">
                            You might wonder how all the components colors are being set based on
                            five colors
                            <StyledBadge>brand</StyledBadge> <StyledBadge>success</StyledBadge>{' '}
                            <StyledBadge>warning</StyledBadge> <StyledBadge>error</StyledBadge> and{' '}
                            <StyledBadge>mainBackground</StyledBadge>
                        </h3>
                        <h3 className="react-rainbow-customization_section-text rainbow-m-bottom_medium">
                            Well, we do compute the rest of the color we use in our internal
                            implementation based on accessibility standards and also we expose those
                            generated values to you through the react context because you might want
                            to make use of those values in order to be consistent with the colors of
                            your app.
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
