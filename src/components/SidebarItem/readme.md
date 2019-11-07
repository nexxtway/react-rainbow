##### SidebarItem simple

```js
import React from 'react';
import { Sidebar, SidebarItem } from 'react-rainbow-components';
import dashboard from '../../../assets/icons/dashboard.svg';
import application from '../../../assets/icons/application.svg';
import messages from '../../../assets/icons/messages.svg';
import charts from '../../../assets/icons/charts.svg';
import puzzle from '../../../assets/icons/puzzle.svg';

const sidebarContainerStyles = {
    width: '88px',
    borderBottomLeftRadius: '0.875rem',
};

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
                <SidebarItem icon={<img src={dashboard} />} name="Dashboard" label="Dashboard" />
                <SidebarItem icon={<img src={application} />} name="Aplications" label="Aplications"/>
                <SidebarItem icon={<img src={puzzle} />} name="Components" label="Components" />
                <SidebarItem icon={<img src={messages} />} name="Messages" label="Messages" />
                <SidebarItem icon={<img src={charts} />} name="Charts" label="Charts" />
            </Sidebar>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <div
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_medium"
        style={sidebarContainerStyles}
    >
        <SimpleSidebar />
    </div>
</div>
```
