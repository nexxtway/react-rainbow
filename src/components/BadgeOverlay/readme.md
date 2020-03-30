##### BadgeOverlay base

```js
import React from 'react';
import { BadgeOverlay, ButtonIcon } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1}
    >
        <BellIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={99}
    >
        <BellIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={100}
    >
        <BellIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1000}
    >
        <BellIcon />
    </BadgeOverlay>
</div>
```

##### BadgeOverlay with variants

```js
import React from 'react';
import { BadgeOverlay, ButtonIcon } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1}
    >
        <BellIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1}
        variant='brand'
    >
        <BellIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1}
        variant='warning'
    >
        <BellIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1}
        variant='success'
    >
        <BellIcon />
    </BadgeOverlay>
</div>
```

##### BadgeOverlay with dots

```js
import React from 'react';
import { BadgeOverlay, ButtonIcon } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <BadgeOverlay
        className="rainbow-m-around_medium"
    >
        <BellIcon />
    </BadgeOverlay>
</div>
```

##### BadgeOverlay

```js
import React from 'react';
import { BadgeOverlay, Avatar, ButtonIcon } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1}
        overlap="circle"
    >
        <Avatar
            src="images/user/user2.jpg"
            assistiveText="Tahimi Leon"
            title="Tahimi Leon"
            size="medium"
        />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_medium"
        value={1}
    >
        <BellIcon />
    </BadgeOverlay>
</div>
```

##### BadgeOverlay with diferent positions

```js
import React from 'react';
import { BadgeOverlay, ButtonIcon } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <BadgeOverlay
        className="rainbow-m-around_x-large"
        value={1}
        position='top-left'
    >
        <BellIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_xx-large"
        value={1}
    >
        <PhoneIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_xx-large"
        value={1}
        position='bottom-left'
    >
        <EmailIcon />
    </BadgeOverlay>
    <BadgeOverlay
        className="rainbow-m-around_x-large"
        value={1}
        position='bottom-right'
    >
        <ShoppingCartIcon />
    </BadgeOverlay>
</div>
```

##### BadgeOverlay with option to be hidden

```js
import React, { useState } from 'react';
import { BadgeOverlay, ButtonIcon, CheckboxToggle } from 'react-rainbow-components';

const BadgeOverlayExample = () => {
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
            <BadgeOverlay
                className="rainbow-m-around_medium"
                value={1}
                isHidden={invisible}
            >
                <BellIcon />
            </BadgeOverlay>
            <CheckboxToggle
                id="checkbox-toggle-component-badgeoverlay"
                label="Hide Badge"
                value={invisible}
                onChange={handleBadgeVisibility}
            />
        </div>
    );
}

<BadgeOverlayExample />
```
