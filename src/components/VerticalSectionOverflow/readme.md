##### VerticalSectionOverflow

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faChevronDown, faTh, faFolderOpen } = require('@fortawesome/free-solid-svg-icons');

const containerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

class ShadedVerticalNavigation extends React.Component {
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
                <VerticalSectionOverflow label="Folders" description="Folders created, shared...">
                    <VerticalItem
                        name="item-3"
                        label="Apps"
                        icon={<FontAwesomeIcon icon={faTh} />}
                    />
                    <VerticalItem
                        name="item-4"
                        label="Folder shared with Me"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                </VerticalSectionOverflow>

                <VerticalSectionOverflow label="Recents" description="Folders created, shared...">
                    <VerticalItem name="item-1" label="Shared with Me" />
                    <VerticalItem name="item-2" label="Created by Me" />
                </VerticalSectionOverflow>

                <VerticalSectionOverflow
                    label="Documents"
                    description="Document created, shared..."
                >
                    <VerticalItem name="item-5" label="Recents" />
                    <VerticalItem name="item-6" label="Folder created by Me" />
                    <VerticalItem name="item-7" label="Folder shared with Me" />
                </VerticalSectionOverflow>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader />
    <div
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_x-large"
        style={containerStyles}
    >
        <ShadedVerticalNavigation />
    </div>
</div>;
```
