import React, { Component } from 'react';
import Sidebar from '../../../src/components/Sidebar';
import SidebarItem from '../../../src/components/SidebarItem';
import ExperiencesIcon from './icons/experiencesIcon';
import PuzzleIcon from './icons/puzzleIcon';
import StartupIcon from './icons/startupIcon';

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
            </Sidebar>
        );
    }
}

