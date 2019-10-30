##### button menu base

```js
import React from 'react';
import { ButtonGroup, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <ButtonGroup>
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                buttonVariant="base"
                icon={<FontAwesomeIcon icon={faCog} />}
            >
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuItem label="Menu Item Four" />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>;
```

##### button menu with divider

```js
import React from 'react';
import {
    ButtonGroup,
    ButtonMenu,
    MenuItem,
    ButtonIcon,
    MenuDivider,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faCog,
    faPaste,
    faPlus,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user3.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <ButtonGroup>
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faPaste} />}
                variant="border-filled"
                disabled
            />
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faCog} />}
            >
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />

                <MenuDivider variant="space" />
                <MenuItem label="Menu Item Four" />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>;
```

##### button menu with subheaders

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <ButtonGroup>
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonIcon icon={<FontAwesomeIcon icon={faEdit} />} variant="border-filled" disabled />
            <ButtonMenu
                id="button-menu"
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>;
```

##### button menu with icons

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAlignCenter,
    faAlignLeft,
    faAlignRight,
    faAnchor,
    faPlus,
    faFutbol,
    faBullhorn,
    faStore,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        src="images/user/user3.jpg"
    >
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonMenu
                id="button-menu-1"
                menuSize="x-small"
                menuAlignment="right"
                icon={<FontAwesomeIcon icon={faStore} />}
            >
                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faFutbol} />}
                    iconPosition="right"
                />

                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faAnchor} />}
                    iconPosition="right"
                />

                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faBullhorn} />}
                    iconPosition="right"
                />
            </ButtonMenu>
            <ButtonMenu
                id="button-menu-2"
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >
                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faAlignCenter} />}
                    iconPosition="left"
                />

                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faAlignLeft} />}
                    iconPosition="left"
                />

                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faAlignRight} />}
                    iconPosition="left"
                />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>;
```

##### button menu position variants

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faShareAlt, faPlus, faBell, faSlidersH } from '@fortawesome/free-solid-svg-icons';

<div>
    <GlobalHeader
        className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large"
        src="images/user/user2.jpg"
    >
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonMenu
                menuAlignment="left"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faCog} />}
            >
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
            </ButtonMenu>
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faSlidersH} />}
                variant="border-filled"
                disabled
            />
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faShareAlt} />}
                variant="border-filled"
                disabled
            />
        </ButtonGroup>
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            buttonVariant="base"
            icon={<FontAwesomeIcon icon={faBell} />}
        >
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="rainbow-m-horizontal_large rainbow-p-top_xx-large rainbow-m-bottom_large rainbow-grid   rainbow-grid_align-end">
        <ButtonMenu
            menuAlignment="bottom"
            buttonVariant="brand"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faPlus} />}
        >
            <MenuItem label="Menu Positioned Bottom" />
            <MenuItem label="Menu Positioned Bottom" />
            <MenuItem label="Menu Positioned Bottom" />
        </ButtonMenu>
    </div>
</div>;
```

##### button menu width variants

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome');
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

<div>
    <GlobalHeader className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
            <ButtonMenu
                menuSize="xx-small"
                menuAlignment="right"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
            </ButtonMenu>
        </ButtonGroup>
        <div className="rainbow-m-right_medium">
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faStore} />}
            >
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
            </ButtonMenu>
        </div>
        <ButtonMenu menuAlignment="right" menuSize="small" icon={<FontAwesomeIcon icon={faBell} />}>
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="rainbow-m-horizontal_large rainbow-p-top_xx-large rainbow-m-bottom_large rainbow-flex">
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
            <ButtonMenu
                menuAlignment="left"
                menuSize="large"
                icon={<FontAwesomeIcon icon={faPlus} />}
            >
                <MenuItem label="Menu large" />
                <MenuItem label="Menu large" />
                <MenuItem label="Menu large" />
            </ButtonMenu>
        </ButtonGroup>
        <ButtonMenu
            menuSize="medium"
            menuAlignment="left"
            icon={<FontAwesomeIcon icon={faPencilAlt} />}
        >
            <MenuItem label="Menu medium" />
            <MenuItem label="Menu medium" />
            <MenuItem label="Menu medium" />
        </ButtonMenu>
    </div>
</div>
```

##### button menu with disabled items

```js
import React from 'react';
import { ButtonGroup, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <ButtonGroup>
            <ButtonMenu
                id="button-menu-disabled-items"
                menuAlignment="right"
                menuSize="x-small"
                buttonVariant="base"
                icon={<FontAwesomeIcon icon={faCog} />}
            >
                <MenuItem label="Menu Item One" />
                <MenuItem disabled label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuItem label="Menu Item Four" />
                <MenuItem disabled label="Menu Item Five" />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>;
```

##### button menu loading

```js
import React from 'react';
import { ButtonGroup, ButtonMenu } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        src="images/user/user3.jpg"
    >
        <ButtonGroup>
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                label="Custom Apps"
                isLoading
                icon={<FontAwesomeIcon icon={faBell} />}
            />
        </ButtonGroup>
    </GlobalHeader>
</div>;
```
