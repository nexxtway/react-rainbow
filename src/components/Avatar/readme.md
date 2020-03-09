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
