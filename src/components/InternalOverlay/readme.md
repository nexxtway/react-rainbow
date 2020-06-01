##### Using InternalOverlay with default position resolver:

```js
import { ButtonIcon } from 'react-rainbow-components';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import RenderIf from '../RenderIf';
import useOutsideClick from '../../libs/hooks/useOutsideClick';
import useWindowResize from '../../libs/hooks/useWindowResize';

const Container = styled.div`
    height: 240px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Dropdown = styled.div`
    width: 220px;
    height: 220px;
    border: solid 1px ${props => props.theme.rainbow.palette.border.divider};
    border-radius: 0.875rem;
    background: ${props => props.theme.rainbow.palette.background.main};
    box-shadow: ${props => props.theme.rainbow.shadows.shadow_2};
    transition: all 0.1s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.h1`
    color: ${props => props.theme.rainbow.palette.text.label};
    padding: 0.5rem 0;
    font-size: 16px;
    margin-top: 4px;
`;

const Images = styled(ParisIcon)`
    width: 60%;
    height: 60%;
`;

const StyledPlusIcon = styled(PlusIcon)`
    pointer-events: none;
`;

const Component = (props) => {
    const { id, buttonId } = props;
    const triggerRef = useRef(null);
    const dropdownRef = useRef();
    const iconRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const handleOutsideClick = event => {
        if (event.target !== triggerRef.current.buttonRef.current) {
            stopListeningOutsideClick();
            setIsOpen(false);
        }        
    }
    const handleClick = (event) => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            startListeningOutsideClick();
        }        
    };
    const startListening = () => {
        startListeningOutsideClick();
    }
    const [startListeningOutsideClick, stopListeningOutsideClick] = useOutsideClick(dropdownRef, handleOutsideClick);
    useWindowResize(() => setIsOpen(false), isOpen);
    return (
        <>
            <ButtonIcon
                id={buttonId}
                variant="neutral"
                icon={<StyledPlusIcon />}
                ref={triggerRef}
                onClick={handleClick}
            />
            <InternalOverlay
                isVisible={isOpen}
                render={() => {
                    return (
                        <Dropdown id={id} ref={dropdownRef}>
                            <Images />
                            <Text>
                                Paris
                            </Text>
                        </Dropdown>);
                }}
                triggerElementRef={() => triggerRef.current.buttonRef}
            />

        </>
    );
}

<Container>
    <div className="rainbow-flex rainbow-justify_spread">
        <Component id="overlay-1" buttonId="button-icon-element" />
        <Component />
    </div>
    <div className="rainbow-flex rainbow-justify_spread">
        <Component />
        <Component />
    </div>

</Container>
```

##### Using InternalOverlay with custom position resolver:

```js
import { Button, ButtonIcon } from 'react-rainbow-components';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import RenderIf from '../RenderIf';
import useOutsideClick from '../../libs/hooks/useOutsideClick';
import useWindowResize from '../../libs/hooks/useWindowResize';

const Container = styled.div`
    height: 240px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cell = styled.div`
    border: solid 1px ${props => props.theme.rainbow.palette.border.divider};
    height: 120px;
    width: 200px;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Day = styled.h1`
    color: ${props => props.theme.rainbow.palette.text.main};
    font-size: 16px;
    text-align: end;
    margin: 8px 12px 0 0;
`;

const Event = styled.button`
    background: ${props => props.theme.rainbow.palette.brand.main};
    color: white;
    border: none;
    margin: 8px;
    border-radius: 4px;
    cursor: pointer;
    text-align: start;

    &:focus {
        outline: 0;
        box-shadow: ${props => props.theme.rainbow.shadows.brand};
    }
`;

const Dropdown = styled.div`
    width: 440px;
    border: solid 1px ${props => props.theme.rainbow.palette.border.divider};
    border-radius: 0.875rem;
    padding: 0.5rem;
    background: ${props => props.theme.rainbow.palette.background.main};
    box-shadow: ${props => props.theme.rainbow.shadows.shadow_2};
    transition: all 0.1s linear;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    align-self: flex-end;
`;

const Icon = styled.div`
    background: ${props => props.theme.rainbow.palette.brand.main};
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 12px 24px 0 8px;
`;

const Title = styled.h1`
    color: ${props => props.theme.rainbow.palette.text.main};
    font-size: 24px;
    margin: 0;
`;

const Description = styled.h2`
    color: ${props => props.theme.rainbow.palette.text.main};
    font-size: 16px;
`;

const Body = styled.p`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 14px;
    margin: 0 24px 24px 24px;
`;

const positionResolver = (opts) => {
    const { trigger, viewport, content } = opts;
    if (trigger.rightBottomAnchor.x + content.width + 15 <= viewport.width) {
        if (trigger.rightBottomAnchor.y - content.height >= 0) {
            return {
                top: trigger.rightBottomAnchor.y - content.height + 25,
                left: trigger.rightBottomAnchor.x + 15,
            }
        }
        return {
            top: trigger.rightBottomAnchor.y,
            left: trigger.rightBottomAnchor.x + 15,
        }
    }
    if (trigger.leftBottomAnchor.x - content.width - 15 >= 0) {
        if (trigger.rightBottomAnchor.y - content.height >= 0) {
            return {
                top: trigger.rightBottomAnchor.y - content.height + 25,
                left: trigger.leftBottomAnchor.x - content.width - 15,
            }
        }
        return {
            top: trigger.rightBottomAnchor.y,
            left: trigger.leftBottomAnchor.x - content.width - 15,
        }
    }
    return {
        top: trigger.leftUpAnchor.y - 5 - content.height,
        left: trigger.leftUpAnchor.x - content.width/2 + (trigger.rightUpAnchor.x - trigger.leftUpAnchor.x)/2,
    };
};

const Component = () => {
    const triggerRef = useRef(null);
    const dropdownRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const handleOutsideClick = event => {
        stopListeningOutsideClick();
        if (event.target !== triggerRef.current) {
            setIsOpen(false);
        }
    }
    const handleClick = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            startListeningOutsideClick();
        }        
    };
    const [startListeningOutsideClick, stopListeningOutsideClick] = useOutsideClick(dropdownRef, handleOutsideClick);
    useWindowResize(() => setIsOpen(false), isOpen);
    
    return (
        <Container>
            <Cell>
                <Day>May 5</Day>
                <Event
                    ref={triggerRef}
                    onClick={handleClick}
                    type="button">
                    React Rainbow Event
                </Event>
                <InternalOverlay
                    isVisible={isOpen}
                    render={() => {
                        return (
                            <Dropdown ref={dropdownRef}>
                                <Header>
                                    <ButtonIcon icon={<TrashBorderIcon />} />
                                    <ButtonIcon icon={<PencilBorderIcon />} className="rainbow-m-left_small" />
                                    <ButtonIcon icon={<CloseIcon />} className="rainbow-m-left_small" />
                                </Header>
                                <div  className="rainbow-flex rainbow-m-around_medium">
                                    <Icon />
                                    <div>
                                        <Title>
                                            React Rainbow Event
                                        </Title>
                                        <Description>
                                            Wednesday, May 5 ⋅ 11:00 – 11:30am
                                        </Description>
                                    </div>
                                </div>
                                <Body>
                                    React Rainbow is a collection of components that will reliably help you build your application in a snap.
                                </Body>
                            </Dropdown>);
                    }}
                    triggerElementRef={() => triggerRef}
                    positionResolver={positionResolver}
                />
            </Cell>
        </Container>
    );
}

<Component />
```
