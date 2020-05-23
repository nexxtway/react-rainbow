/* eslint-disable react/no-unescaped-entities, import/no-extraneous-dependencies */
import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import styled, { ThemeContext } from 'styled-components';
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
    COLOR_GRAY_1,
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_DARK_1,
} from '../../../src/styles/colors';
import './styles.css';

const defaultTheme = `const theme = {
    rainbow: {
        palette: { 
            brand: {
                main: String,
                dark: String,
                light: String,
            },
            success: {
                main: String,
                dark: String,
                light: String,
            },
            error: {
                main: String,
                dark: String,
                light: String,
            },
            warning: {
                main: String,
            },
            background: {
                main: String,
                highlight: String,
                secondary: String,
                disabled: String,
            },
            text: {
                main: String,
                title: String,
                header: String,
                label: String,
                disabled: String,
            },
            border: {
                main: String,
                divider: String,
                disabled: String,
            },
            action: {
                active: String,
                hover: String,
            },
        },
        shadows: {
            brand: String,
            success: String,
            error: String,
            shadow_1: String,
            shadow_2: String,
            shadow_3: String,
            shadow_4: String,
            shadow_5: String,
            shadow_6: String,
            shadow_7: String,
            shadow_8: String,
            shadow_9: String,
            shadow_10: String,
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
const scrollTo = elem => window.scrollTo(0, elem.current.offsetTop - 70);

export default function CustomizationPage(props) {
    const { examples, name, exampleMode, codeRevision } = props;
    const [activeTab, setActiveTab] = useState('overview');
    const example5Ref = useRef();
    const example7Ref = useRef();
    const example9Ref = useRef();
    const theme = useContext(ThemeContext);

    return (
        <div className="react-rainbow-customization_top-container">
            <Tabset
                className="react-rainbow-customization_top-container-tabset"
                activeTabName={activeTab}
                onSelect={(e, tapName) => setActiveTab(tapName)}
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
                        <div className="rainbow-flex rainbow-flex_column rainbow-m-bottom_large">
                            <div className="react-rainbow-customization_section-heading-container">
                                <h3 className="react-rainbow-getting-started_section-heading rainbow-m-right_medium">
                                    If you are using React Rainbow on your app, sometimes you may
                                    need to customize the default styles to satisfy your UI/UX based
                                    on business or brand requirements. Either you will need to use
                                    the color of a specific business brand or a specific color
                                    palette or you will need additional support for a dark or custom
                                    theme on your app.
                                </h3>
                                <CarbonAds className="react-rainbow-customization_carbon-ad" />
                            </div>
                        </div>
                        <h2 className="react-rainbow-customization_section-heading-2">
                            How can you customize React Rainbow Components?
                        </h2>
                        <h3 className="react-rainbow-customization_section-text">
                            Customization is allowed by using our{' '}
                            <StyledBadge>{'<Application />'}</StyledBadge> component as a wrapper of
                            your entire application, the component property theme will accept an
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
                        <div className="rainbow-flex rainbow-align_end">
                            <h2 className="react-rainbow-customization_section-heading-2">
                                Theme API
                            </h2>
                            <Badge
                                className="rainbow-m-left_small rainbow-m-bottom_medium"
                                label="BETA"
                            />
                        </div>
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
                            <StyledTable data={data} keyField="name" resizeColumnDisabled>
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

                        <div className="rainbow-flex rainbow-align_end">
                            <h2 className="react-rainbow-customization_section-heading-2">
                                Theme generate API
                            </h2>
                            <Badge
                                className="rainbow-m-left_small rainbow-m-bottom_medium"
                                label="BETA"
                            />
                        </div>
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
                            exampleMode="collapse"
                        />
                    </div>
                </RenderIf>
                <RenderIf isTrue={activeTab === 'qa'}>
                    <div className="rainbow-flex rainbow-flex_column">
                        <div className="react-rainbow-customization_section-heading-container">
                            <div className="rainbow-m-right_medium">
                                <h3 className="react-rainbow-getting-started_section-heading rainbow-m-right_medium rainbow-m-bottom_medium">
                                    Here are the frequent questions and answers about how to
                                    implement the theme on React Rainbow and that you should look up
                                    before you ask in the community or create a new issue.
                                </h3>
                                <h2 className="react-rainbow-getting-started_section-heading-2">
                                    Q&A
                                </h2>
                            </div>
                            <CarbonAds className="react-rainbow-customization_carbon-ad" />
                        </div>
                        <div>
                            <a
                                className="react-rainbow-customization_link"
                                onClick={() => scrollTo(example5Ref)}
                            >
                                How customize the main color for all the components on my app?
                            </a>
                            <a
                                className="react-rainbow-customization_link"
                                onClick={() => scrollTo(example7Ref)}
                            >
                                How to do a variation with a specific color for only one component
                                on my app?
                            </a>
                            <a
                                className="react-rainbow-customization_link"
                                onClick={() => scrollTo(example9Ref)}
                            >
                                How use the colors defined on the theme on my own elements of my
                                app?
                            </a>
                        </div>
                        <section ref={example5Ref}>
                            <h3 className="react-rainbow-customization_section-heading">
                                How customize the main color for all the components on my app?
                            </h3>
                            <Playground
                                code={examples[5].content}
                                evalInContext={examples[5].evalInContext}
                                key={`${codeRevision}/5`}
                                name={name}
                                index={5}
                                settings={examples[5].settings}
                                exampleMode="collapse"
                            />
                        </section>
                        <section ref={example7Ref}>
                            <h3 className="react-rainbow-customization_section-heading">
                                How to do a variation with a specific color for only one component
                                on my app?
                            </h3>
                            <Playground
                                code={examples[7].content}
                                evalInContext={examples[7].evalInContext}
                                key={`${codeRevision}/7`}
                                name={name}
                                index={7}
                                settings={examples[7].settings}
                                exampleMode="collapse"
                            />
                        </section>
                        <section ref={example9Ref}>
                            <h3 className="react-rainbow-customization_section-heading">
                                How use the colors defined on the theme on my own elements of my
                                app?
                            </h3>
                            <Playground
                                code={examples[9].content}
                                evalInContext={examples[9].evalInContext}
                                key={`${codeRevision}/9`}
                                name={name}
                                index={9}
                                settings={examples[9].settings}
                                exampleMode="collapse"
                            />
                        </section>
                    </div>
                </RenderIf>
            </section>
        </div>
    );
}

CustomizationPage.propTypes = {
    examples: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    exampleMode: PropTypes.string.isRequired,
    codeRevision: PropTypes.number.isRequired,
};

CustomizationPage.defaultProps = {
    examples: null,
    name: undefined,
    exampleMode: undefined,
    codeRevision: undefined,
};
