import React, { Component, createRef } from 'react';
import Sidebar from '../../../src/components/Sidebar';
import InternalOverlay from '../../../src/components/InternalOverlay';
import SidebarItem from '../../../src/components/SidebarItem';
import Application from '../../../src/components/Application';
import ExperiencesIcon from './icons/experiencesIcon';
import PuzzleIcon from './icons/puzzleIcon';
import DesignIcon from './icons/designIcon';
import CustomWorkIcon from './icons/customWorkIcon';
import ConsoleIcon from './icons/consoleIcon';
import isNotComponentPage from './../utils';
import ContactUsForm from './contactusForm';
import { Icon, StyledButton } from './styled';

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
            isVisible: false,
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.handleOnClickCustomWorkBtn = this.handleOnClickCustomWorkBtn.bind(this);
        this.itemRef = createRef();
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    handleOnClickCustomWorkBtn() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        const { selectedItem, isVisible } = this.state;

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
                    <StyledButton onClick={this.handleOnClickCustomWorkBtn} ref={this.itemRef}>
                        <Icon className="rainbow-m-bottom_x-small" as={CustomWorkIcon} />
                        Custom Work
                    </StyledButton>
                    <InternalOverlay
                        isVisible={isVisible}
                        render={() => {
                            return (
                                <ContactUsForm
                                    onSuccessMessageSent={this.handleOnClickCustomWorkBtn}
                                />
                            );
                        }}
                        triggerElementRef={() => this.itemRef}
                    />
                </Sidebar>
            </Application>
        );
    }
}
