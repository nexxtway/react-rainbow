##### Sidebar simple

```js
import React from 'react';
import { Sidebar, SidebarItem } from 'react-rainbow-components';
import styled from 'styled-components';

const SideBarContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    width: 120px;
    border-bottom-left-radius: 0.875rem;
`;

class SimpleSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'GettingStarted',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { selectedItem } = this.state;

        return (
            <Sidebar selectedItem={selectedItem} onSelect={this.handleOnSelect} id="sidebar-1">
                <SidebarItem icon={<DashboardPurpleIcon />} name="Dashboard" label="Dashboard" />
                <SidebarItem icon={<ApplicationIcon />} name="Aplications" label="Aplications" />
                <SidebarItem icon={<PuzzleIcon />} name="Components" label="Components" />
                <SidebarItem icon={<MessagesIcon />} name="Messages" label="Messages" />
                <SidebarItem icon={<ChartsIcon />} name="Charts" label="Charts" />
            </Sidebar>
        );
    }
}

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <SideBarContainer className="rainbow-p-top_small rainbow-p-bottom_medium">
            <SimpleSidebar />
        </SideBarContainer>
    </div>
```

##### Sidebar with dynamic content

```js
import React, { useState } from 'react';
import { Sidebar, SidebarItem, RenderIf } from 'react-rainbow-components';
import styled from 'styled-components';

const SideBarContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    width: 120px;
    border-bottom-left-radius: 0.875rem;
`;

const StyledDynamicContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.label};
    font-size: large;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
`;

function DynamicContent(prop) {
    return <h1>You have clicked on {prop.selectedItem}</h1>;
}

function SimpleSidebar() {
    const [selectedItem, setSelectedItem] = useState('');

    const handleOnSelect = (event, value) => {
        return setSelectedItem(value);
    };

        return (
            <div>
                <Sidebar selectedItem={selectedItem} onSelect={handleOnSelect} id="sidebar-1">
                    <SidebarItem icon={<DashboardPurpleIcon />} name="Dashboard" label="Dashboard" />
                    <SidebarItem icon={<ApplicationIcon />} name="Aplications" label="Aplications" />
                    <SidebarItem icon={<PuzzleIcon />} name="Components" label="Components" />
                    <SidebarItem icon={<MessagesIcon />} name="Messages" label="Messages" />
                    <SidebarItem icon={<ChartsIcon />} name="Charts" label="Charts" />
                </Sidebar>
                <StyledDynamicContent>
                    <RenderIf isTrue={selectedItem}>
                        <DynamicContent selectedItem={selectedItem} />
                    </RenderIf>
                </StyledDynamicContent>
            </div>
        );
}

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <SideBarContainer className="rainbow-p-top_small rainbow-p-bottom_medium">
            <SimpleSidebar />
        </SideBarContainer>
    </div>
```
