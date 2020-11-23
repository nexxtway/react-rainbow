# A InternalTooltip on diferent positions:

```js
/* eslint-disable import/extensions, import/no-unresolved */
import React, { useRef, useState } from 'react';
import { ButtonIcon, RadioGroup } from 'react-rainbow-components';
import styled from 'styled-components';
import  InternalTooltip from '../InternalTooltip';
import useDefaultTooltipConnector from './hooks/useDefaultTooltipConnector';

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
    { value: 'top', label: 'Top Center' },
    { value: 'right', label: 'Right Center' },
    { value: 'left', label: 'Left Center' },
    { value: 'bottom', label: 'Bottom Center' },
];

function Example() {
    const triggerRef = useRef();
    const tooltipRef = useRef();
    const [preferredPosition, setPreferredPosition] = useState('top');

    const {
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        isVisible,
    } = useDefaultTooltipConnector({ tooltipRef, triggerRef: () => triggerRef.current.htmlElementRef });

    return (
        <Container>
            <ButtonIcon
                onFocus={onFocus}
                onBlur={onBlur}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={triggerRef}
                variant="brand"
                size="small"
                icon={<InfoIcon />}
            />
            <InternalTooltip
                triggerElementRef={() => triggerRef.current.htmlElementRef}
                isVisible={isVisible}
                preferredPosition={preferredPosition}
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
            <RadioGroup
                label="Preferred Position"
                options={options}
                onChange={event => setPreferredPosition(event.target.value)}
                value={preferredPosition}
            />
        </Container>
    )
}

    <Example />

```

# InternalTooltip with Copy to Clipboard:

```js
/* eslint-disable import/extensions, import/no-unresolved */
import React, { useRef, useState, useEffect } from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import useScrollingIntent from '@rainbow-modules/hooks/lib/useScrollingIntent';
import  InternalTooltip from '../InternalTooltip';

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
    const [isCopied, setCopied] = useState(false);
    const triggerRef = useRef();
    const tooltipRef = useRef();
    const [isVisible, setVisible] = useState(false);
    const text = isCopied ? 'Copied' : 'Click to copy';

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setVisible(false);
                setCopied(false);
            }, 3000);
        }
    }, [isCopied]);

    useScrollingIntent({
        callback: () => setVisible(false),
        isListening: isVisible,
        triggerElementRef: () => triggerRef.current.htmlElementRef,
    });

    const onMouseEnter = () => {
        setVisible(true);
    };

    const onMouseLeave = () => {
        if (!isCopied) {
            setVisible(false);
        }
    };

    return (
        <Container>
            <ButtonIcon
                onClick={() => setCopied(true)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={triggerRef}
                variant="border-filled"
                icon={<FontAwesomeIcon icon={faClipboard} />}
            />
            <InternalTooltip triggerElementRef={() => triggerRef.current.htmlElementRef} isVisible={isVisible} ref={tooltipRef}>
                <Text>
                    {text}
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
import React, { useRef } from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import styled from 'styled-components';
import  InternalTooltip from '../InternalTooltip';
import useDefaultTooltipConnector from './hooks/useDefaultTooltipConnector';

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
    const triggerRef = useRef();
    const tooltipRef = useRef();

    const {
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        isVisible,
    } = useDefaultTooltipConnector({ tooltipRef, triggerRef: () => triggerRef.current.htmlElementRef });

    return (
        <Container>
            <Title>Rainbow Comunity</Title>
            <ButtonIcon
                onFocus={onFocus}
                onBlur={onBlur}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={triggerRef}
                variant="brand"
                size="small"
                icon={<InfoIcon />}
            />
            <InternalTooltip
                triggerElementRef={() => triggerRef.current.htmlElementRef}
                isVisible={isVisible}
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
import React, { useRef } from 'react';
import { Input, Button } from 'react-rainbow-components';
import styled from 'styled-components';
import  InternalTooltip from '../InternalTooltip';
import useDefaultTooltipConnector from './hooks/useDefaultTooltipConnector';

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
    const companyDotRef = useRef();
    const employeesDotRef = useRef();
    const companyTooltipRef = useRef();
    const employeesTooltipRef = useRef();

    const {
        onFocus: onFocusCompanyDot,
        onBlur: onBlurCompanyDot,
        onMouseEnter: onMouseEnterCompanyDot,
        onMouseLeave: onMouseLeaveCompanyDot,
        isVisible: isVisibleCompanyTooltip,
    } = useDefaultTooltipConnector({ tooltipRef: companyTooltipRef, triggerRef: () => companyDotRef });

    const {
        onFocus: onFocusEmployeesDot,
        onBlur: onBlurEmployeesDot,
        onMouseEnter: onMouseEnterEmployeesDot,
        onMouseLeave: onMouseLeaveEmployeesDot,
        isVisible: isVisibleEmployeesTooltip,
    } = useDefaultTooltipConnector({ tooltipRef: employeesTooltipRef, triggerRef: () => employeesDotRef });

    return (
        <Container>
            <StyledInput
                placeholder="Enter your company name"
                label={
                    <InputLabel>
                        Company Name
                        <StyledDot
                            onFocus={onFocusCompanyDot}
                            onBlur={onBlurCompanyDot}
                            onMouseEnter={onMouseEnterCompanyDot}
                            onMouseLeave={onMouseLeaveCompanyDot}
                            ref={companyDotRef}
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
                            onFocus={onFocusEmployeesDot}
                            onBlur={onBlurEmployeesDot}
                            onMouseEnter={onMouseEnterEmployeesDot}
                            onMouseLeave={onMouseLeaveEmployeesDot}
                            ref={employeesDotRef}
                        />
                    </InputLabel>
                }
            />
            <StyledButton
                label="Confirm"
                variant="brand"
            />
            <InternalTooltip
                triggerElementRef={() => companyDotRef}
                isVisible={isVisibleCompanyTooltip}
                ref={companyTooltipRef}
            >
                <TooltipContainer>
                    <p>This field is required</p>
                </TooltipContainer>
            </InternalTooltip>
            <InternalTooltip
                triggerElementRef={() => employeesDotRef}
                isVisible={isVisibleEmployeesTooltip}
                ref={employeesTooltipRef}
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
