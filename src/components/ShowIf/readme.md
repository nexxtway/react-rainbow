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