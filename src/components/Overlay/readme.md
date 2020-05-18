##### Using Overlay with default position resolver:

```js
import { ButtonIcon } from 'react-rainbow-components';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import RenderIf from '../RenderIf';

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

const Component = () => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <ButtonIcon
                variant="neutral"
                icon={<PlusIcon />}
                ref={ref}
                onClick={handleClick}
            />
            <Overlay
                isVisible={isOpen}
                render={() => {
                    return (
                        <Dropdown>
                            <Images />
                            <Text>
                                Paris
                            </Text>
                        </Dropdown>);
                }}
                triggerElementRef={() => ref.current.buttonRef}
            />

        </>
    );
}

<Container>
    <div className="rainbow-flex rainbow-justify_spread">
        <Component />
        <Component />
    </div>
    <div className="rainbow-flex rainbow-justify_spread">
        <Component />
        <Component />
    </div>

</Container>
```

##### Using Overlay with custom position resolver:

```js
import { Button, ButtonIcon } from 'react-rainbow-components';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import RenderIf from '../RenderIf';

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
    background: ${props => props.theme.rainbow.palette.background.main};
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
    width: 400px;
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
    margin: 8px 24px 0 12px;
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

const Component = () => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Container>
            <Cell>
                <Day>May 5</Day>
                <Event
                    ref={ref}
                    onClick={handleClick}
                    type="button">
                    Nexxtway Event
                </Event>
                <Overlay
                    isVisible={isOpen}
                    render={() => {
                        return (
                            <Dropdown>
                                <Header>
                                    <ButtonIcon icon={<TrashBorderIcon />} />
                                    <ButtonIcon icon={<PencilBorderIcon />} className="rainbow-m-left_small" />
                                    <ButtonIcon icon={<CloseIcon />} className="rainbow-m-left_small" />
                                </Header>
                                <div  className="rainbow-flex rainbow-m-around_medium">
                                    <Icon />
                                    <div>
                                        <Title>
                                            Nexxtway Event
                                        </Title>
                                        <Description>
                                            May 5, 2020
                                        </Description>
                                    </div>
                                </div>
                                <Body>
                                    React Rainbow is a collection of components that will reliably help you build your application in a snap. Give it a hack and let us know what you think.
                                </Body>
                            </Dropdown>);
                    }}
                    triggerElementRef={() => ref}
                    positionResolver={(opts) => {
                        const { trigger, viewport, content } = opts;
                        if (trigger.leftBottomAnchor.y + content.height + 5 <= viewport.height) {
                            return {
                                top: trigger.leftBottomAnchor.y + 5,
                                left: trigger.leftBottomAnchor.x,
                            };
                        }
                        return {
                            top: trigger.leftUpAnchor.y - 5 - content.height,
                            left: trigger.leftBottomAnchor.x,
                        };
                    }}
                />
            </Cell>
        </Container>
    );
}

<Component />
```
