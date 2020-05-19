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

    handleOnSelect(e, selectedItem) {
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
