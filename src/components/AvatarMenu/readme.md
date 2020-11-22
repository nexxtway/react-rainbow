##### avatar menu base

```js
import React from 'react';
import { Avatar, AvatarMenu, MenuDivider, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledUserFullnameContainer = styled.p.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledUserEmailContainer = styled.p.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.label};
`;;

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader hideAvatar className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <AvatarMenu
                className="rainbow-m-horizontal_medium"
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
                        <StyledUserFullnameContainer className="rainbow-font-size-text_medium">Tahimi</StyledUserFullnameContainer>
                        <StyledUserEmailContainer className="rainbow-font-size-text_small">
                            janedoe@gmail.com
                        </StyledUserEmailContainer>
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
        </GlobalHeader>
    </div>
```

##### Various AvatarMenu

```js
import React from 'react';
import { AvatarMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledAvatarIcon = styled(AvatarIcon)`
    width: 100%;
    height: 100%;
`;

const StyledUserAvatarIcon = styled(UserAvatarIcon)`
    width: 50%;
    height: 50%;
`;

    <div className="rainbow-m-vertical_xx-large rainbow-p-vertical_large rainbow-align-content_center">
        <AvatarMenu
            className="rainbow-m-horizontal_large"
            id="avatar-menu"
            src="images/user/user2.jpg"
            assistiveText="Tahimi Leon"
            menuAlignment="right"
            menuSize="x-small"
            avatarSize="large"
            title="Tahimi Leon"
        >
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
        <AvatarMenu
            className="rainbow-m-horizontal_large"
            id="avatar-menu"
            assistiveText="Tahimi Leon"
            menuAlignment="right"
            menuSize="x-small"
            avatarSize="large"
            title="Tahimi Leon"
            icon={<StyledAvatarIcon />}
        >
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
        <AvatarMenu
            className="rainbow-m-horizontal_large"
            id="avatar-menu"
            assistiveText="Tahimi Leon"
            menuAlignment="right"
            menuSize="x-small"
            avatarSize="large"
            title="Tahimi Leon"
            icon={<StyledUserAvatarIcon />}
        >
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
```
