##### avatar menu base

```js
import React from 'react';
import { Avatar, AvatarMenu, MenuDivider, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    paddingBottom: '12rem',
};

<div style={containerStyles}>
    <header className="rainbow-align-content_space-between rainbow-p-vertical_small rainbow-p-horizontal_medium react-rainbow-global-header rainbow-background-color_white">
        <img src="images/rainbow-logo.svg" height="40" width="40" alt="rainbow logo" />
        <div className="rainbow-flex rainbow-align_center">
            <AvatarMenu
                id="avatar-menu"
                src="images/user/user2.jpg"
                assistiveText="Tahimi Leon"
                menuAlignment="right"
                menuSize="small"
                avatarSize="large"
                title="Tahimi Leon"
            >
                <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
                    <Avatar
                        src="images/user/user2.jpg"
                        assistiveText="Tahimi Leon"
                        title="Tahimi Leon"
                        size="medium"
                    />
                    <div className="rainbow-m-left_x-small">
                        <p className="rainbow-font-size-text_medium rainbow-color_dark-1">Tahimi</p>
                        <p className="rainbow-font-size-text_small rainbow-color_gray-3">
                            janedoe@gmail.com
                        </p>
                    </div>
                </li>
                <MenuDivider variant="space" />
                <MenuItem
                    label="Edit Profile"
                    icon={<FontAwesomeIcon icon={faPencilAlt} />}
                    iconPosition="left"
                />
                <MenuItem
                    label="Logout"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    iconPosition="left"
                />
            </AvatarMenu>
        </div>
    </header>
</div>
```
