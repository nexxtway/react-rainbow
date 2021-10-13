# ShowIf base
##### To fade in and out some content, just pass a condition and a children to the component.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ShowIf, Picklist, Option } from 'react-rainbow-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

const SectionHeader = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${props => props.theme.rainbow.palette.border.divider};
    width: 100%;
    display: flex;
    align-items: center;

    &:hover {
        box-shadow: none;
        background-color: ${props => props.theme.rainbow.palette.background.secondary};
        border-radius: 12px 12px 0 0;
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.theme.rainbow.shadows.brand};
    }
`;

const FieldsContainer = styled.div`
    margin: 20px;
    max-width: 600px;
    height: 100%;
`;

const ArrowIcon = styled(ArrowDownIcon)`
    color: ${props => props.theme.rainbow.palette.brand.main};
    margin-right: 16px;
    margin-left: 4px;
`;

const LabelContainer = styled.div`
    font-weight: bold;
    font-size: 18px;
    padding: 12px 0;
`;

const Container = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid ${props => props.theme.rainbow.palette.border.divider};
    margin: 32px 0;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 12px;
`;

const HelpText = styled.p`
    margin: 16px;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

const Fields = () => {
    const [memory, setMemory] = useState();
    return (
        <>
            <Picklist
                label="Gender"
                placeholder="Select your Gender"
                labelAlignment="left"
                value={memory}
                onChange={setMemory}
            >
                <Option name="female" label="Female" />
                <Option name="male" label="Male" />
                <Option name="rather not say" label="Rather not say" />
                <Option name="custom" label="Custom" />
            </Picklist>
        </>
    )
};

const Example = () => {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className="rainbow-m-bottom_medium rainbow-flex rainbow-justify_center">
            <Container>
                <Section>
                    <SectionHeader type="button" onClick={toggleAccordion}>
                        <ArrowIcon />
                        <LabelContainer>
                            Gender
                        </LabelContainer>
                    </SectionHeader>
                    <ShowIf isTrue={active}>
                        <FieldsContainer>
                            <Fields />
                        </FieldsContainer>
                    </ShowIf>
                </Section>
                <HelpText>
                    {active ? 'Click the header to collapse' : 'Click the header to expand'}
                </HelpText>
            </Container>
        </div>
    )
}

    <Example />
```

# ShowIf with animations
##### You can pass different animation names to `inAnimation` and `outAnimation` to customize how the content is shown and hidden.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ShowIf, Picklist, Option } from 'react-rainbow-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

const SectionHeader = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${props => props.theme.rainbow.palette.border.divider};
    width: 100%;
    display: flex;
    align-items: center;

    &:hover {
        box-shadow: none;
        background-color: ${props => props.theme.rainbow.palette.background.secondary};
        border-radius: 12px 12px 0 0;
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.theme.rainbow.shadows.brand};
    }
`;

const FieldsContainer = styled.div`
    margin: 20px;
    max-width: 600px;
    height: 100%;
`;

const ArrowIcon = styled(ArrowDownIcon)`
    color: ${props => props.theme.rainbow.palette.brand.main};
    margin-right: 16px;
    margin-left: 4px;
`;

const LabelContainer = styled.div`
    font-weight: bold;
    font-size: 18px;
    padding: 12px 0;
`;

const Container = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid ${props => props.theme.rainbow.palette.border.divider};
    margin: 32px 0;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 12px;
`;

const HelpText = styled.p`
    margin: 16px;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

const Fields = () => {
    const [memory, setMemory] = useState();
    return (
        <>
            <Picklist
                label="Gender"
                placeholder="Select your Gender"
                labelAlignment="left"
                value={memory}
                onChange={setMemory}
            >
                <Option name="female" label="Female" />
                <Option name="male" label="Male" />
                <Option name="rather not say" label="Rather not say" />
                <Option name="custom" label="Custom" />
            </Picklist>
        </>
    )
};

const Example = () => {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className="rainbow-m-bottom_medium rainbow-flex rainbow-justify_center">
            <Container>
                <Section>
                    <SectionHeader type="button" onClick={toggleAccordion}>
                        <ArrowIcon />
                        <LabelContainer>
                            Gender
                        </LabelContainer>
                    </SectionHeader>
                    <ShowIf isTrue={active} inAnimation="fade" outAnimation="slide">
                        <FieldsContainer>
                            <Fields />
                        </FieldsContainer>
                    </ShowIf>
                </Section>
                <HelpText>
                    {active ? 'Click the header to collapse' : 'Click the header to expand'}
                </HelpText>
            </Container>
        </div>
    )
}

    <Example />
```
