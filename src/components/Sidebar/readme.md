##### sidebar simple

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faClock, faCog, faFolderOpen } = require('@fortawesome/free-solid-svg-icons');

    const sidebarContainerStyles ={
        width: '88px',
        borderBottomLeftRadius: '0.875rem',
    }

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
                <Sidebar
                    selectedItem={selectedItem}
                    onSelect={this.handleOnSelect}
                    id="sidebar-1"
                    >

                    <SidebarItem
                        icon={<FontAwesomeIcon icon={faClock} />}
                        name="GettingStarted"
                        label="Getting Started" />

                    <SidebarItem
                        icon={<FontAwesomeIcon icon={faCog} />}
                        name="Components"
                        label="Components" />

                    <SidebarItem
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                        name="Experiences"
                        label="Experiences" />

                </Sidebar>
            );
        }
    }
    
    <div>
      <GlobalHeader src="images/user/user3.jpg" />
      <div className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_medium"
      style={sidebarContainerStyles} >
      <SimpleSidebar />
      </div>
    </div>
