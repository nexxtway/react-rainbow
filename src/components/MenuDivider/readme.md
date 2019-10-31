##### MenuDivider base

```js
import React from 'react';
import { ButtonMenu, MenuItem, MenuDivider } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <ButtonMenu
            menuAlignment="right"
            menuSize="small"
            label="Divider"
            icon={<FontAwesomeIcon icon={faCog} />}
        >
            <MenuItem label="Menu Item Header" variant="header" />
            <MenuItem label="Menu Item Base" />
            <MenuItem label="Menu Item Base" />
            <MenuDivider variant="space" />
            <MenuItem label="Menu Item Base" />
            <MenuItem label="Menu Item Base" />
            <MenuDivider />
            <MenuItem label="Other Menu Item Base" />
        </ButtonMenu>
    </GlobalHeader>
</div>
```
