import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import SidebarItem from '../Sidebar/sidebarItem';
import ExperiencesIcon from './icons/experiencesIcon';
import PuzzleIcon from './icons/puzzleIcon';
import StartupIcon from './icons/startupIcon';
import DesignIcon from './icons/designIcon';

function resolveCurrentUrl() {
    return window.location.href.split('#/')[1] || 'GettingStarted';
}

export default class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: resolveCurrentUrl(),
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { selectedItem } = this.state;

        return (
            <Sidebar
                selectedItem={selectedItem}
                onSelect={this.handleOnSelect}>
                <SidebarItem
                    icon={<StartupIcon />}
                    name="GettingStarted"
                    label="Getting Started"
                    href="/#/GettingStarted" />
                <SidebarItem
                    icon={<PuzzleIcon />}
                    name="Components"
                    label="Components"
                    href="/#/Components" />
                <SidebarItem
                    icon={<ExperiencesIcon />}
                    name="Experiences"
                    label="Experiences"
                    href="/#/Experiences" />
                <SidebarItem
                    icon={<DesignIcon />}
                    name="Designs"
                    label="Designs"
                    href="/#/Designs" />
            </Sidebar>
        );
    }
}
