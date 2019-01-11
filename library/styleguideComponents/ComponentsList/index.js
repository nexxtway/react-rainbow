import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import SidebarItem from '../Sidebar/sidebarItem';
import ExperiencesIcon from './icons/experiencesIcon';
import PuzzleIcon from './icons/puzzleIcon';
import StartupIcon from './icons/startupIcon';
import DesignIcon from './icons/designIcon';
import isNotComponentPage from './../utils';

const name = window.location.href.split('#/')[1];
const pageName = name && name.split('/')[0];

function resolveCurrentUrl() {
    if (isNotComponentPage(pageName)) {
        return pageName;
    } else if (pageName) {
        return 'Components';
    }
    return 'GettingStarted';
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
