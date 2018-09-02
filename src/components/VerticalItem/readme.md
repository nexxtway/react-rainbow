##### vertical item

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faFolderOpen, faTh } = require('@fortawesome/free-solid-svg-icons');

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
                <VerticalNavigation selectedItem={this.state.selectedItem} onSelect={this.handleOnSelect}>
                    <VerticalSection label="REPORTS">
                        <VerticalItem name="item-1" label="Folders" icon={<FontAwesomeIcon icon={faFolderOpen} />} />
                        <VerticalItem name="item-2" label="Components" icon={<FontAwesomeIcon icon={faFolderOpen} />} />
                        <VerticalItem name="item-3" label="Apps" icon={<FontAwesomeIcon icon={faTh} />} />
                        <VerticalItem name="item-4" label="VerticalItem" href="/#/Components/VerticalItem" />
                        <VerticalItem name="item-5" label="VerticalSection" href="/#/Components/VerticalSection" />
                        <VerticalItem name="item-6" label="VerticalNavigation" href="/#/Components/VerticalNavigation" />
                    </VerticalSection>
                </VerticalNavigation>
            );
        }
    }

    <div>
        <GlobalHeader src="images/avatar2.jpg" />
        <div className="slds-large-size_1-of-3 slds-medium-size_1-of-2 slds-small-size_1-of-1 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
            <SimpleVerticalNavigation />
        </div>
    </div>
