# A InternalTooltip on diferent positions:

```js
/* eslint-disable import/extensions, import/no-unresolved */
import React, { useRef, useState } from 'react';
import { ButtonIcon, RadioGroup } from 'react-rainbow-components';
import styled from 'styled-components';
import  InternalTooltip from '../InternalTooltip';
import { useOutsideClick } from '../../libs/hooks';
import { WindowScrolling } from '../../libs/scrollController';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 40px;
`;

const TooltipContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
`;

const Header = styled.h2`
    font-size: 16px;
    font-weight: 800;
    text-align: start;
    margin-bottom: 4px;
`;

const Text = styled.p`
    font-size: 14px;
    text-align: start;
    text-overflow: ellipsis;
    margin-bottom: 4px;
`;

const options = [
    { value: 'topCenter', label: 'Top Center' },
    { value: 'rightCenter', label: 'Right Center' },
    { value: 'leftCenter', label: 'Left Center' },
    { value: 'rightCenter', label: 'Right Center' },
];

function Example() {
    const ref = useRef();
    const tooltipRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(
        tooltipRef,
        () => {
            setIsOpen(false);
        },
        isOpen,
    );

    const windowScrolling = new WindowScrolling();
    windowScrolling.startListening(() => {
        windowScrolling.stopListening();
        setIsOpen(false);
    });

    const show = () => {
        // setIsOpen(true);
        setIsOpen(true);
    }

    return (
        <Container>
            <ButtonIcon
                onClick={show}
                ref={ref}
                variant="brand"
                size="small"
                icon={<InfoIcon />}
            />
            <InternalTooltip
                triggerElementRef={() => ref.current.htmlElementRef}
                isVisible={isOpen}
                ref={tooltipRef}
            >
                <TooltipContainer>
                    <Header>What’s do you know about rainbow?</Header>
                    <Text>
                        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt.
                    </Text>
                    <Text>
                        Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Sit nulla est ex deserunt exercitation anim.
                    </Text>
                </TooltipContainer>
            </InternalTooltip>
            <RadioGroup label="Preferred Position" options={options} />
        </Container>
    )
}

    <Example />

```

# InternalTooltip with Copy to Clipboard:

```js
/* eslint-disable import/extensions, import/no-unresolved */
import React, { useRef, useState } from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import  InternalTooltip from '../InternalTooltip';
import { useOutsideClick } from '../../libs/hooks';
import { WindowScrolling } from '../../libs/scrollController';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 80px;
`;

const Text = styled.p`
    font-size: 14px;
    text-align: start;
    text-overflow: ellipsis;
    margin-bottom: 4px;
`;

function Example() {
    const ref = useRef();
    const tooltipRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(
        tooltipRef,
        () => {
            setIsOpen(false);
        },
        isOpen,
    );

    const windowScrolling = new WindowScrolling();
    windowScrolling.startListening(() => {
        windowScrolling.stopListening();
        setIsOpen(false);
    });

    const show = () => {
        // setIsOpen(true);
        setIsOpen(true);
    }

    return (
        <Container>
            <ButtonIcon
                onClick={show}
                ref={ref}
                variant="border-filled"
                icon={<FontAwesomeIcon icon={faClipboard} />}
            />
            <InternalTooltip triggerElementRef={() => ref.current.htmlElementRef} isVisible={isOpen} ref={tooltipRef}>
                <Text>
                    Copy to Clipboard
                </Text>
            </InternalTooltip>
        </Container>
    )
}

    <Example />

```

# InternalTooltip:

```js
/* eslint-disable import/extensions, import/no-unresolved */
import React, { useRef, useState } from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import styled from 'styled-components';
import  InternalTooltip from '../InternalTooltip';
import { useOutsideClick } from '../../libs/hooks';
import { WindowScrolling } from '../../libs/scrollController';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
`;

const Title = styled.h1`
    font-size: 20px;
    color: ${props => props.theme.rainbow.palette.text.main};
    font-weight: 900;
    margin-right: 20px;
`;

const TooltipContainer = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
`;

const Header = styled.h2`
    font-size: 16px;
    font-weight: 800;
    text-align: start;
    margin-bottom: 4px;
`;

const Text = styled.p`
    font-size: 14px;
    text-align: start;
    margin-bottom: 4px;
`;

const Link = styled.a`
    font-size: 14px;
    text-align: start;
    color: ${props => props.theme.rainbow.palette.background.main};
    text-decoration: underline;

    :hover, :active, :focus {
        color: ${props => props.theme.rainbow.palette.background.main};
    }
`;

function Example() {
    const ref = useRef();
    const tooltipRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(
        tooltipRef,
        () => {
            setIsOpen(false);
        },
        isOpen,
    );

    const windowScrolling = new WindowScrolling();
    windowScrolling.startListening(() => {
        windowScrolling.stopListening();
        setIsOpen(false);
    });

    const show = () => {
        // setIsOpen(true);
        setIsOpen(true);
    }

    return (
        <Container>
            <Title>Rainbow Comunity</Title>
            <ButtonIcon
                onClick={show}
                ref={ref}
                variant="brand"
                size="small"
                icon={<InfoIcon />}
            />
            <InternalTooltip
                triggerElementRef={() => ref.current.htmlElementRef}
                isVisible={isOpen}
                ref={tooltipRef}
            >
                <TooltipContainer>
                    <Header>What’s do you know about rainbow?</Header>
                    <Text>
                        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
                    </Text>
                    <Link
                        href="https://react-rainbow.io"
                        rel="noopener"
                        target="_blank"
                    >
                        Link to rainbow
                    </Link>
                </TooltipContainer>
            </InternalTooltip>
        </Container>
    )
}

    <Example />

```


# InternalTooltip:

```js
/* eslint-disable import/extensions, import/no-unresolved */
import React, { useRef, useState } from 'react';
import { Input, Button } from 'react-rainbow-components';
import styled from 'styled-components';
import  InternalTooltip from '../InternalTooltip';
import { useOutsideClick } from '../../libs/hooks';
import { WindowScrolling } from '../../libs/scrollController';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    max-width: 360px;
`;

const InputLabel = styled.div`
    display: flex;
    align-items: center;
`;

const StyledDot = styled.button`
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 8px;
    margin-left: 8px;
    background: ${props => props.theme.rainbow.palette.error.main};
    border: none;
    padding: 0;
`;

const StyledInput = styled(Input)`
    width: 100%;
    margin-bottom: 36px;
`;

const StyledButton = styled(Button)`
    width: 100%;
`;

const TooltipContainer = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
`;

function Example() {
    const ref = useRef();
    const tooltipRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(
        tooltipRef,
        () => {
            setIsOpen(false);
        },
        isOpen,
    );

    const windowScrolling = new WindowScrolling();
    windowScrolling.startListening(() => {
        windowScrolling.stopListening();
        setIsOpen(false);
    });

    const show = () => {
        // setIsOpen(true);
        setIsOpen(true);
    }

    return (
        <Container>
            <StyledInput
                placeholder="Enter your company name"
                label={
                    <InputLabel>
                        Company Name
                        <StyledDot
                            onClick={show}
                            ref={ref}
                        />
                    </InputLabel>
                }
            />
            <StyledInput
                placeholder="Enter the number of employees"
                label={
                    <InputLabel>
                        Number of Employees
                        <StyledDot
                            onClick={show}
                            ref={ref}
                        />
                    </InputLabel>
                }
            />
            <StyledButton
                label="Confirm"
                variant="brand"
            />
            <InternalTooltip
                triggerElementRef={() => ref.current.htmlElementRef}
                isVisible={isOpen}
                ref={tooltipRef}
            >
                <TooltipContainer>
                    <p>This field is required</p>
                </TooltipContainer>
            </InternalTooltip>
        </Container>
    )
}

    <Example />

```
