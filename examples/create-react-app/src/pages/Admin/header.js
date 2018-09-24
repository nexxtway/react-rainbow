/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Input from 'react-rainbow-components/components/Input';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import Avatar from 'react-rainbow-components/components/Avatar';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faBullhorn,
    faRocket,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {
    faBell,
    faUser,
} from '@fortawesome/free-regular-svg-icons';

export default function Header() {
    return (
        <header className="rainbow-flex rainbow-align_center rainbow-p-vertical_small rainbow-p-horizontal_large rainbow-admin_header rainbow-background-color_white">
            <img src="./assets/images/rainbow-logo.svg" alt="rainbow logo" className="rainbow-admin_header-logo" />
            <Input
                className="rainbow-m-left_x-large rainbow-admin_header-search"
                placeholder="Search"
                icon={<FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />} />
            <section className="rainbow-flex rainbow-align_center rainbow-admin_header-actions">
                <ButtonGroup>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faRocket} />} variant="border-filled" disabled />
                    <ButtonIcon icon={<FontAwesomeIcon icon={faBullhorn} />} variant="border-filled" />
                    <ButtonMenu menuAlignment="right" menuSize="x-small" icon={<FontAwesomeIcon icon={faAngleDown} />}>
                        <MenuItem label="Charts" />
                        <MenuItem label="Insights" />
                        <MenuItem label="Customers" />
                    </ButtonMenu>
                </ButtonGroup>
                <ButtonIcon className="rainbow-m-horizontal_small" icon={<FontAwesomeIcon icon={faBell} />} />
                <Avatar
                    icon={<FontAwesomeIcon icon={faUser} />}
                    assistiveText="user icon"
                    title="user icon" />
            </section>
        </header>
    );
}
