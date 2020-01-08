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

<div className="rainbow-p-vertical_x-large rainbow-p-left_medium">
    <div className="rainbow-m-horizontal_medium">
        <Avatar assistiveText="Jane Doe" initials="JD" title="Jane Doe" />
    </div>
</div>
```

##### fallback user initials with specific color

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';

<div className="rainbow-p-vertical_x-large rainbow-p-left_medium">
    <div className="rainbow-m-horizontal_medium">
        <Avatar
            assistiveText="Jane Doe"
            initials="JD"
            title="Jane Doe"
            color="#f00"
        />
    </div>
</div>
```

##### fallback user icon

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';

<div className="rainbow-p-vertical_x-large rainbow-p-left_medium">
    <div className="rainbow-m-horizontal_medium">
        <Avatar
            icon={<img src="icons/user.svg" alt="icon" />}
            assistiveText="user icon"
            title="user icon"
        />
    </div>
</div>
```

##### fallback user initials inverse

```js
import React from 'react';
import { Avatar } from 'react-rainbow-components';

const avatarContainerStyles = {
    borderRadius: '0 0 0.875rem 0.875rem',
};

<div
    className="rainbow-p-vertical_x-large rainbow-p-left_medium rainbow-background-color_dark-1"
    style={avatarContainerStyles}
>
    <div className="rainbow-m-horizontal_medium">
        <Avatar assistiveText="Jane Doe" initials="JD" title="Jane Doe" initialsVariant="inverse" />
    </div>
</div>
```
