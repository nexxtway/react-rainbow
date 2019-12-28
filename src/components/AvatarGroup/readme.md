##### photo-url

```js
import React from 'react';
import { Avatar, AvatarGroup } from 'react-rainbow-components';

const avatars = [
    <Avatar
        src="images/user/user1.jpg"
        assistiveText="Jose Leandro"
        title="Jose Leandro"
    />,
    <Avatar
        src="images/user/user2.jpg"
        assistiveText="Tahimi Leon"
        title="Tahimi Leon"
    />,
    <Avatar
        src="images/user/user3.jpg"
        assistiveText="Carlos Miguel"
        title="Carlos Miguel"
    />,
    <Avatar
        src="images/user/user4.jpg"
        assistiveText="Jane Doe"
        title="Jane Doe"
    />,
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        showCounter={true}
    />
</div>
```

##### fallback user initials

```js
import React from 'react';
import { Avatar, AvatarGroup } from 'react-rainbow-components';

const avatars = [
    <Avatar
        initials="JL"
        assistiveText="Jose Leandro"
        title="Jose Leandro"
    />,
    <Avatar
        initials="TL"
        assistiveText="Tahimi Leon"
        title="Tahimi Leon"
    />,
    <Avatar
        initials="CM"
        assistiveText="Carlos Miguel"
        title="Carlos Miguel"
    />,
    <Avatar
        initials="JD"
        assistiveText="Jane Doe"
        title="Jane Doe"
    />,
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        showCounter={true}
    />
</div>
```

##### fallback user icon

```js
import React from 'react';
import { Avatar, AvatarGroup } from 'react-rainbow-components';

const avatars = [
    <Avatar
        icon={<img src="icons/user.svg" alt="icon" />}
        assistiveText="Jose Leandro"
        title="Jose Leandro"
    />,
    <Avatar
        icon={<img src="icons/user.svg" alt="icon" />}
        assistiveText="Tahimi Leon"
        title="Tahimi Leon"
    />,
    <Avatar
        icon={<img src="icons/user.svg" alt="icon" />}
        assistiveText="Carlos Miguel"
        title="Carlos Miguel"
    />,
    <Avatar
        icon={<img src="icons/user.svg" alt="icon" />}
        assistiveText="Jane Doe"
        title="Jane Doe"
    />,
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        showCounter={true}
    />
</div>
```

##### fallback user initials inverse

```js
import React from 'react';
import { Avatar, AvatarGroup } from 'react-rainbow-components';

const avatarContainerStyles = {
    borderRadius: '0 0 0.875rem 0.875rem',
};

const avatars = [
    <Avatar
        initials="JL"
        assistiveText="Jose Leandro"
        title="Jose Leandro"
        initialsVariant="inverse"
    />,
    <Avatar
        initials="TL"
        assistiveText="Tahimi Leon"
        title="Tahimi Leon"
        initialsVariant="inverse"
    />,
    <Avatar
        initials="CM"
        assistiveText="Carlos Miguel"
        title="Carlos Miguel"
        initialsVariant="inverse"
    />,
    <Avatar
        initials="JD"
        assistiveText="Jane Doe"
        title="Jane Doe"
        initialsVariant="inverse"
    />,
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center rainbow-background-color_dark-1">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
        style={avatarContainerStyles}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        style={avatarContainerStyles}
        showCounter={true}
    />
</div>
```

##### photo-url sizes

```js
import React from 'react';
import { Avatar, AvatarGroup } from 'react-rainbow-components';

const avatars = [
    <Avatar
        src="images/user/user1.jpg"
        assistiveText="Jose Leandro"
        title="Jose Leandro"
    />,
    <Avatar
        src="images/user/user2.jpg"
        assistiveText="Tahimi Leon"
        title="Tahimi Leon"
    />,
    <Avatar
        src="images/user/user3.jpg"
        assistiveText="Carlos Miguel"
        title="Carlos Miguel"
    />,
    <Avatar
        src="images/user/user4.jpg"
        assistiveText="Jane Doe"
        title="Jane Doe"
    />,
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center">
    <h1 className="rainbow-font-size-text_medium rainbow-m-left_large rainbow-color_gray-4">
            x-small
    </h1>
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
        size="x-small"
    />
    <h1 className="rainbow-font-size-text_medium rainbow-m-left_large rainbow-color_gray-4">
            small
    </h1>
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
        size="small"
    />
    <h1 className="rainbow-font-size-text_medium rainbow-m-left_large rainbow-color_gray-4">
            medium
    </h1>
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
        size="medium"
    />
    <h1 className="rainbow-font-size-text_medium rainbow-m-left_large rainbow-color_gray-4">
            large
    </h1>
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
        size="large"
    />
</div>
```
