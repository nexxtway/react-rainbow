##### VerticalItem

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faFolderOpen, faTh } = require('@fortawesome/free-solid-svg-icons');

const containerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

class SimpleVerticalNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 1',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection label="REPORTS">
                    <VerticalItem
                        name="item-1"
                        label="Folders"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                    <VerticalItem
                        name="item-2"
                        label="Components"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                    <VerticalItem
                        name="item-3"
                        label="Apps"
                        icon={<FontAwesomeIcon icon={faTh} />}
                    />
                    <VerticalItem
                        name="item-4"
                        label="VerticalItem"
                        href="/#/Components/VerticalItem"
                    />
                    <VerticalItem
                        name="item-5"
                        label="VerticalNavigation"
                        href="/#/Components/VerticalNavigation"
                    />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user2.jpg" />
    <div
        className="rainbow-background-color_white rainbow-p-vertical_small"
        style={containerStyles}
    >
        <SimpleVerticalNavigation />
    </div>
</div>;
```
