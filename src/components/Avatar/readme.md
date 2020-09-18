##### photo-url

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
    <div className="rainbow-m-horizontal_medium">
        <Avatar
            src="images/user/user1.jpg"
            assistiveText="Jose Leandro"
            title="Jose Leandro"
            size="large"
        />
    </div>
    <div className="rainbow-m-horizontal_medium">
        <Avatar
            src="images/user/user2.jpg"
            assistiveText="Tahimi Leon"
            title="Tahimi Leon"
            size="medium"
        />
    </div>
    <div className="rainbow-m-horizontal_medium">
        <Avatar
            src="images/user/user3.jpg"
            assistiveText="Carlos Miguel"
            title="Carlos Miguel"
            size="small"
        />
    </div>
    <div className="rainbow-m-horizontal_medium">
        <Avatar
            src="images/user/user4.jpg"
            assistiveText="Jane Doe"
            title="Jane Doe"
            size="x-small"
        />
    </div>
</div>
```

##### fallback user initials

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-p-left_medium">
    <div className="rainbow-m-horizontal_small">
        <Avatar
            className="rainbow-m-around_x-small"
            assistiveText="Jane Doe"
            initials="JD"
            title="Jane Doe" />
        <Avatar
            className="rainbow-m-around_x-small"
            assistiveText="Jane Doe"
            initials="JD"
            title="Jane Doe"
            backgroundColor="#FE4849"
        />
    </div>
</div>
```

##### fallback user icon

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-p-left_medium">
    <div className="rainbow-m-horizontal_small">
        <Avatar
            className="rainbow-m-around_x-small"
            icon={<UserAvatarIcon />}
            assistiveText="user icon"
            title="user icon"
        />
        <Avatar
            className="rainbow-m-around_x-small"
            icon={<UserAvatarIcon />}
            assistiveText="user icon"
            title="user icon"
            backgroundColor="#FE4849"
        />
    </div>
</div>
```

##### fallback user initials inverse

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';

<InverseContainer className="rainbow-p-vertical_large rainbow-p-left_medium">
    <div className="rainbow-m-horizontal_medium">
        <Avatar assistiveText="Jane Doe" initials="JD" title="Jane Doe" initialsVariant="inverse" />
    </div>
</InverseContainer>
```

##### avatar with custom size

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';
import styled from 'styled-components';

const avatarStyles = { width: 110, height: 110 };

const StyledTitle = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    font-family: Lato;
    font-size: 24px;
    letter-spacing: 0.79px;
`;

const StyledLabel = styled.div`
    font-family: Lato;
    font-size: 12px;
`;

const StyledText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    font-family: Lato;
    font-size: 14px;
    line-height: 1.57;
`;

<div className="rainbow-p-vertical_x-large rainbow-p-left_xx-large rainbow-flex rainbow-flex_column">
    <div className="rainbow-m-horizontal_large rainbow-m-vertical_xx-small">
        <StyledTitle>
            Profile
        </StyledTitle>
    </div>
    <div className="rainbow-m-horizontal_large rainbow-m-vertical_xx-small rainbow-flex rainbow-inline-flex">
        <Avatar
            style={avatarStyles}
            src="images/user/user4.jpg"
            assistiveText="Jane Doe"
            title="Jane Doe"
        />
        <div className="rainbow-m-left_large rainbow-flex rainbow-flex_column rainbow-justify_spread">
            <div className="rainbow-flex rainbow-flex_column">
                <StyledLabel className="rainbow-color_gray-4">
                    Name
                </StyledLabel>
                <StyledText>
                    Jane Doe
                </StyledText>
            </div>
            <div className="rainbow-flex rainbow-flex_column">
                <StyledLabel className="rainbow-color_gray-4">
                    Company
                </StyledLabel>
                <StyledText>
                    Nexxtway
                </StyledText>
            </div>
        </div>
    </div>
</div>
```
