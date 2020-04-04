import React, { Component } from 'react';
import Sidebar from '../../../src/components/Sidebar';
import SidebarItem from '../../../src/components/SidebarItem';
import BadgeOverlay from '../../../src/components/BadgeOverlay';
import Application from '../../../src/components/Application';
import ExperiencesIcon from './icons/experiencesIcon';
import PuzzleIcon from './icons/puzzleIcon';
import StartupIcon from './icons/startupIcon';
import DesignIcon from './icons/designIcon';
import ConsoleIcon from './icons/consoleIcon';
import isNotComponentPage from './../utils';
import './styles.css';

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

const theme = {
    rainbow: {
        palette: {
            warning: '#F9C42A',
        },
    },
};

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
            <Application theme={theme}>
                <Sidebar selectedItem={selectedItem} onSelect={this.handleOnSelect}>
                    <SidebarItem
                        icon={<StartupIcon />}
                        name="GettingStarted"
                        label="Getting Started"
                        href="/#/GettingStarted"
                    />
                    <SidebarItem
                        icon={<PuzzleIcon />}
                        name="Components"
                        label="Components"
                        href="/#/Components"
                    />
                    <BadgeOverlay
                        className="rainbow-library_sidebar-item-container"
                        position="top-left"
                        value="Beta"
                        variant="warning"
                        overlap="circle"
                    >
                        <SidebarItem
                            className="rainbow-library_sidebar-item"
                            icon={<ConsoleIcon />}
                            name="Customization"
                            label="Customization"
                            href="/#/Customization"
                        />
                    </BadgeOverlay>
                    <SidebarItem
                        icon={<ExperiencesIcon />}
                        name="Experiences"
                        label="Experiences"
                        href="/#/Experiences"
                    />
                    <SidebarItem
                        icon={<DesignIcon />}
                        name="Designs"
                        label="Designs"
                        href="/#/Designs"
                    />
                </Sidebar>
            </Application>
        );
    }
}
