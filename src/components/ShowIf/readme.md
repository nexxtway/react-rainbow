# ShowIf base
##### To fade in and out some content, just pass a condition and a children to the component.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ShowIf, Button, Card } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const Content = styled(Card)`
    padding: 2rem;
`;

const Example = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="rainbow-m-bottom_medium rainbow-p-bottom_medium">
            <GlobalHeader
                src="images/user/user2.jpg"
                className="rainbow-p-bottom_medium rainbow-m-bottom_medium"
            >
                <div className="rainbow-flex rainbow-align_right">
                    <Button label="Toggle" onClick={() => setIsVisible(!isVisible)} />
                </div>
            </GlobalHeader>
            <StyledContainer className="rainbow-m-around_small">
                <ShowIf isTrue={isVisible}>
                    <Content>
                        ShowIf
                    </Content>
                </ShowIf>
            </StyledContainer>
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
import { ShowIf, Button, Card } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const Content = styled(Card)`
    padding: 2rem;
`;

const Example = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="rainbow-m-bottom_medium rainbow-p-bottom_medium">
            <GlobalHeader
                src="images/user/user2.jpg"
                className="rainbow-p-bottom_medium rainbow-m-bottom_medium"
            >
                <div className="rainbow-flex rainbow-align_right">
                    <Button label="Toggle" onClick={() => setIsVisible(!isVisible)} />
                </div>
            </GlobalHeader>
            <StyledContainer className="rainbow-m-around_small">
                <ShowIf isTrue={isVisible} inAnimation="fade" outAnimation="slide">
                    <Content>
                        ShowIf
                    </Content>
                </ShowIf>
            </StyledContainer>
        </div>
    )
}

    <Example />
```

# Accordion example
##### The next example shows how to use the `ShowIf` component to animate an accordion.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ShowIf, Input, Picklist, Option } from 'react-rainbow-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

const SectionHeader = styled.button`
    cursor: pointer;
    outline: none;
    border: 1px solid ${props => props.theme.rainbow.palette.border.divider};
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0.5rem;
    width: 100%;

    &:hover {
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
        background-color: ${props => props.theme.rainbow.palette.background.secondary};
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.theme.rainbow.shadows.brand};
    }
`;

const FieldsContainer = styled.div`
    margin-top: 20px;
    max-width: 600px;
`;

const LabelContainer = styled.div`
    display: flex;
    padding: 12px 0;
    align-items: center;
    font-weight: bold;
`;

const Container = styled.div`
    width: 50%;
    height: 200px;
`;

const HelpText = styled.p`
    margin-top: 0.275rem;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

const Fields = () => {
    const [memory, setMemory] = useState();
    return (
        <>
            <Picklist
                label="Memory Allocated"
                labelAlignment="left"
                value={memory}
                onChange={setMemory}
            >
                <Option name="128 MB" label="128 MB" />
                <Option name="256 MB" label="256 MB" />
                <Option name="512 MB" label="512 MB" />
            </Picklist>
            <Input label="Timeout" labelAlignment="left" type="number" />
        </>
    )
};

const Example = () => {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className="rainbow-m-bottom_medium rainbow-p-bottom_xx-large rainbow-flex rainbow-justify_center">
            <Container>
                <Section className="rainbow-m-top_large">
                    <SectionHeader type="button" onClick={toggleAccordion}>
                        <LabelContainer>
                            Runtime configuration
                        </LabelContainer>
                    </SectionHeader>
                    <ShowIf isTrue={active} inAnimation="slide" outAnimation="slide">
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