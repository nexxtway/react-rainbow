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
                    <ShowIf isTrue={active} inAnimation="fade" outAnimation="slideVertical">
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

# ShowIf horizontal slide
##### This example show how to use the `ShowIf` component to slide content horizontally

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ShowIf, Button, Card } from 'react-rainbow-components';

const Item = styled(Card)`
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 200px;
`;

const ItemsContainer = styled.div`
    display: flex;
    width: 400px;
`;

const Example = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="rainbow-flex_column rainbow-justify_center">
            <div className="rainbow-m-around_medium rainbow-flex rainbow-justify_center">
                <Button
                    label="Toggle"
                    variant="neutral"
                    onClick={() => setActive(!active)}
                />
            </div>
            <div className="rainbow-m-bottom_medium rainbow-flex rainbow-justify_center">
                <ItemsContainer>
                    <ShowIf
                        isTrue={active}
                        inAnimation="slideHorizontal"
                        outAnimation="slideHorizontal"
                    >
                        <Item>
                            <img
                                src="images/illustrations/Illustration-rainbow-1.svg"
                                className="rainbow-m_auto rainbow-align-content_center"
                                alt="landscape with rainbows, birds and colorful balloons"
                            />
                        </Item>
                    </ShowIf>
                    <ShowIf
                        isTrue={!active}
                        inAnimation="slideHorizontal"
                        outAnimation="slideHorizontal"
                    >
                        <Item>
                            A rainbow is a meteorological phenomenon that is caused by reflection,
                            refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky.
                        </Item>
                    </ShowIf>
                </ItemsContainer>
            </div>
        </div>
    )
}

    <Example />
```

# ShowIf vertical slide
##### The following example shows how to animate an item appearing from the bottom

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ShowIf, Button } from 'react-rainbow-components';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`;

const SnackbarContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center
    padding-bottom: 0.5rem;
`;

const SnackbarContent = styled.div`
    width: 200px;
    height: 2rem;
    background-color: #2A3039;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.275rem;
`;

const HelpText = styled.p`
    margin: 16px;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

const Snackbar = ({ isVisible }) => (
    <SnackbarContainer>
        <HelpText>Click the button</HelpText>
        <ShowIf
            isTrue={isVisible}
            inAnimation="slideVertical"
            outAnimation="slideVertical"
        >
            <SnackbarContent>
                This is a snackbar.
            </SnackbarContent>
        </ShowIf>
    </SnackbarContainer>
);

const Example = () => {
    const [active, setActive] = useState(false);

    return (
        <Container>
            <div className="rainbow-m-around_medium rainbow-flex rainbow-justify_center">
                <Button
                    label={active ? 'Hide Snackbar' : 'Show Snackbar'}
                    variant="neutral"
                    onClick={() => setActive(!active)}
                />
            </div>
            <Snackbar isVisible={active} />
        </Container>
    );
}

    <Example />
```
