import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from '../../../src/components/Sidebar';
import SidebarItem from '../../../src/components/SidebarItem';
import Application from '../../../src/components/Application';
import ExperiencesIcon from './icons/experiencesIcon';
import PuzzleIcon from './icons/puzzleIcon';
import StartupIcon from './icons/startupIcon';
import DesignIcon from './icons/designIcon';
import ConsoleIcon from './icons/consoleIcon';
import isNotComponentPage from './../utils';

const name = window.location.href.split('#/')[1];
const pageName = name && name.split('/')[0];

const Icon = styled(StartupIcon)`
    width: 26px;
    height: 26px;
`;

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
                        icon={<Icon />}
                        name="GettingStarted"
                        label="Getting Started"
                        href="/#/GettingStarted"
                    />
                    <SidebarItem
                        icon={<Icon as={PuzzleIcon} />}
                        name="Components"
                        label="Components"
                        href="/#/Components"
                    />
                    <SidebarItem
                        icon={<Icon as={ConsoleIcon} />}
                        name="Customization"
                        label="Customization"
                        href="/#/Customization"
                    />
                    <SidebarItem
                        icon={<Icon as={ExperiencesIcon} />}
                        name="Experiences"
                        label="Experiences"
                        href="/#/Experiences"
                    />
                    <SidebarItem
                        icon={<Icon as={DesignIcon} />}
                        name="Designs"
                        label="Designs"
                        href="/#/Designs"
                    />
                </Sidebar>
            </Application>
        );
    }
}
