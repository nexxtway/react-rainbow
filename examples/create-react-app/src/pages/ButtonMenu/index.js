import React from 'react';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import MenuDivider from 'react-rainbow-components/components/MenuDivider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faCog,
    faCaretDown,
    faTable,
    faCogs,
    faAddressBook,
} from '@fortawesome/free-solid-svg-icons';

export default function ButtonMenuExample() {
    return (
        <div>
            <ButtonMenu
                className="rainbow-m-horizontal_medium"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faCaretDown} />}
            >
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuDivider variant="space" />
                <MenuItem label="Menu Item Four" />
            </ButtonMenu>
            <ButtonMenu
                className="rainbow-m-horizontal_medium"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faUser} />}
            >
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
            </ButtonMenu>
            <ButtonMenu
                className="rainbow-m-horizontal_medium"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faCog} />}
            >
                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faTable} />}
                    iconPosition="right"
                />

                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faCogs} />}
                    iconPosition="right"
                />

                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faAddressBook} />}
                    iconPosition="right"
                />
            </ButtonMenu>
        </div>
    );
}
