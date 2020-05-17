Using Overlay with default position resolver:

```js
import { Button } from 'react-rainbow-components';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import RenderIf from '../RenderIf';

const Container = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: white;
`;

const Component = () => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Button 
                label="Click here!" 
                ref={ref}
                onClick={handleClick}
            />
            <Overlay
                isVisible={isOpen}
                render={() => {
                    return <Container>Content! Foo</Container>;
                }}
                triggerElementRef={() => ref.current.buttonRef}
            />
        </div>        
    );
}

<Component />
```

Using Overlay with custom position resolver:

```js
import { Button } from 'react-rainbow-components';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import RenderIf from '../RenderIf';

const Container = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: white;
`;

const Component = () => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Button 
                label="Click here!" 
                ref={ref}
                onClick={handleClick}
            />
            <Overlay
                isVisible={isOpen}
                render={() => {
                    return <Container>Content! Foo</Container>;
                }}
                triggerElementRef={() => ref.current.buttonRef}
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
        </div>        
    );
}

<Component />
```
