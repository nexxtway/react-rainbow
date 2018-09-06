##### vertical navigation

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
                        <VerticalItem name="item-1" label="Recent" />
                        <VerticalItem name="item-2" label="Created by Me" />
                        <VerticalItem name="item-3" label="Private Reports" />
                        <VerticalItem name="item-4" label="Public Reports" />
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
        <GlobalHeader src="images/avatar2.jpg" />
        <div className="slds-large-size_1-of-3 slds-medium-size_1-of-2 slds-small-size_1-of-1 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
            <SimpleVerticalNavigation />
        </div>
    </div>


##### compact vertical navigation with href

    class CompactVerticalNavigation extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedItem: '',
            };
            this.handleOnSelect = this.handleOnSelect.bind(this);
        }

        handleOnSelect(e, selectedItem) {
            return this.setState({ selectedItem });
        }

        render() {
            return (
                <VerticalNavigation compact selectedItem={this.state.selectedItem} onSelect={this.handleOnSelect}>
                    <VerticalSection label="COMPONENTS">
                        <VerticalItem name="item-1" label="Avatar" href="/#/Components/Avatar" />
                        <VerticalItem name="item-2" label="Button" href="/#/Components/Button" />
                        <VerticalItem name="item-3" label="ButtonMenu" href="/#/Components/ButtonMenu" />
                        <VerticalItem name="item-4" label="Card" href="/#/Components/Card" />
                        <VerticalItem name="item-5" label="VerticalNavigation" href="/#/Components/VerticalNavigation" />
                    </VerticalSection>
                </VerticalNavigation>
            );
        }
    }

    <div>
        <GlobalHeader />
        <div className="slds-large-size_1-of-3 slds-medium-size_1-of-2 slds-small-size_1-of-1 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
            <CompactVerticalNavigation />
        </div>
    </div>

##### vertical navigation with icons

    class VerticalNavigationWithIcons extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedItem: 'item 5',
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
                        <VerticalItem name="item-1" label="Recent" />
                        <VerticalItem name="item-2" label="Created by Me" />
                    </VerticalSection>
                    <VerticalSection label="Folders">
                        <VerticalItem
                            name="item-3"
                            label="Created by Me"
                            iconName="utility:opened_folder" />
                        <VerticalItem
                            name="item-4"
                            label="Shared with Me"
                            iconName="utility:opened_folder" />
                        <VerticalItem
                            name="item-5"
                            label="Apps"
                            iconName="utility:apps" />
                    </VerticalSection>
                </VerticalNavigation>
            );
        }
    }

    <div>
        <GlobalHeader />
        <div className="slds-large-size_1-of-3 slds-medium-size_1-of-2 slds-small-size_1-of-1 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
            <VerticalNavigationWithIcons />
        </div>
    </div>

##### vertical navigation with notifications

    class VerticalNavigationWithNofifications extends React.Component {
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
                        <VerticalItem name="item-1" label="Recent" />
                        <VerticalItem
                            name="item-2"
                            label="Created by Me"
                            notification={<Badge label="NEW" variant="default" />}
                        />
                        <VerticalItem name="item-3" label="Private Reports" />
                        <VerticalItem name="item-4" label="Public Reports" />
                    </VerticalSection>
                    <VerticalSection label="Folders">
                        <VerticalItem
                            name="item-5"
                            label="Created by Me"
                            notification={<Badge label="5" variant="inverse" />}
                        />
                        <VerticalItem name="item-6" label="Shared with Me" />
                        <VerticalItem name="item-7" label="Apps" />
                    </VerticalSection>
                </VerticalNavigation>
            );
        }
    }

    <div>
        <GlobalHeader />
        <div className="slds-large-size_1-of-3 slds-medium-size_1-of-2 slds-small-size_1-of-1 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
            <VerticalNavigationWithNofifications />
        </div>
    </div>


##### shaded vertical navigation

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
                <VerticalNavigation shaded selectedItem={this.state.selectedItem} onSelect={this.handleOnSelect}>
                    <VerticalSection label="REPORTS">
                        <VerticalItem name="item-1" label="Recent" />
                        <VerticalItem name="item-2" label="Created by Me" />
                        <VerticalItem name="item-3" label="Private Reports" />
                        <VerticalItem name="item-4" label="Public Reports" />
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
        <GlobalHeader />
        <div className="slds-large-size_1-of-3 slds-medium-size_1-of-2 slds-small-size_1-of-1 slds-color__background_gray-3 slds-p-vertical_medium slds-border_right">
            <ShadedVerticalNavigation />
        </div>
    </div>

##### vertical navigation expandable

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog, faChevronDown } = require('@fortawesome/free-solid-svg-icons');

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
                <VerticalNavigation selectedItem={this.state.selectedItem} onSelect={this.handleOnSelect}>
                    <VerticalSection label="REPORTS">
                        <VerticalItem name="item-1" label="Recent" />
                        <VerticalItem name="item-2" label="Created by Me" />
                        <VerticalItem name="item-3" label="Private Reports" />
                    </VerticalSection>
                    <VerticalSectionOverflow
                        title="Folders"
                        description="Folders created, shared..."
                        leftIcon={<FontAwesomeIcon icon={faCog} />}
                        rightIcon={<FontAwesomeIcon icon={faChevronDown} />}>

                        <VerticalItem name="item-4" label="Folder created by Me" />
                        <VerticalItem name="item-5" label="Folder shared with Me" />
                    </VerticalSectionOverflow>
                    <VerticalSectionOverflow expanded title="Documents" description="Documents created, shared...">
                        <VerticalItem name="item-6" label="Document created by Me" />
                        <VerticalItem name="item-7" label="Document shared with Me" />
                    </VerticalSectionOverflow>
                </VerticalNavigation>
            );
        }
    }

    <div>
        <GlobalHeader />
        <div className="slds-large-size_1-of-3 slds-medium-size_1-of-2 slds-small-size_1-of-1 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
            <ShadedVerticalNavigation />
        </div>
    </div>
