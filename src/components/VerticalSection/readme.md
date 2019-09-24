##### VerticalSection

```js
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
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem name="item-2" label="Created by Me" />
                </VerticalSection>
                <VerticalSection label="COMPONENTS">
                    <VerticalItem
                        name="item-3"
                        label="VerticalSection"
                        href="/#/Components/VerticalSection"
                    />
                    <VerticalItem
                        name="item-4"
                        label="VerticalNavigation"
                        href="/#/Components/VerticalNavigation"
                    />
                </VerticalSection>
                <VerticalSection label="Folders">
                    <VerticalItem name="item-5" label="Created by Me" />
                    <VerticalItem name="item-6" label="Shared with Me" />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <div
        className="rainbow-background-color_white rainbow-p-vertical_small"
        style={containerStyles}
    >
        <SimpleVerticalNavigation />
    </div>
</div>;
```
