import React from 'react';
import { Dropdown, Button, Menu, MenuItem } from './../../../../entry';

export default class SimpleDropdown extends React.Component {
    render() {
        return (
            <Dropdown trigger={ <Button>Dropdown</Button> } showArrow={ true } ref={ ref => this.dropdown = ref }>
                <Menu>
                    <MenuItem onClick={ e => this.handleItemClick(e) }>Menu Item One</MenuItem>
                    <MenuItem>Menu Item Two</MenuItem>
                    <MenuItem>Menu Item Three</MenuItem>
                    <MenuItem>Menu Item Four</MenuItem>
                </Menu>
            </Dropdown>
        );
    }

    handleItemClick(e) {
        this.dropdown.close();
    }
}