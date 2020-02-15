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
            icon={<img src="icons/user.svg" alt="icon" />}
            assistiveText="user icon"
            title="user icon"
        />
        <Avatar
            className="rainbow-m-around_x-small"
            icon={<img src="icons/user.svg" alt="icon" />}
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

<<<<<<< HEAD
<InverseContainer className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
=======
const StyledAvatarContainer = styled.div.attrs(props => {
    if(props.theme.rainbow.palette.isDark) {
        return {background: '#f9fafc'};
    }
    return { background: '#303030' };
})`
    background-color: ${props => props.background};
    border-radius: 0 0 0.875rem 0.875rem;
`;

<StyledAvatarContainer className="rainbow-p-vertical_x-large rainbow-p-left_medium">
>>>>>>> c21e1eb0fb67908612d1f4d5a91b44d28d7911b5
    <div className="rainbow-m-horizontal_medium">
        <Avatar assistiveText="Jane Doe" initials="JD" title="Jane Doe" initialsVariant="inverse" />
    </div>
</InverseContainer>
```
