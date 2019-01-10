##### sidebar simple

    const dashboard = require('../../../assets/icons/dashboard.svg');
    const application = require('../../../assets/icons/application.svg');
    const messages = require('../../../assets/icons/messages.svg');
    const charts = require('../../../assets/icons/charts.svg');
    const puzzle = require('../../../assets/icons/puzzle.svg');

    const sidebarContainerStyles ={
        width: '88px',
        borderBottomLeftRadius: '0.875rem',
    }

    const DashboardIcon = ()=>{
        return(
            <img src={dashboard} />
        );
    };

    const ApplicationIcon = ()=>{
        return(
            <img src={application} />
        );
    };

    const PuzzleIcon = () => {
        return(
            <img src={puzzle} />
        );
    };

    const MessagesIcon = () => {
        return(
            <img src={messages} />
        );
    };
    
    const ChartsIcon = () => {
         return(
            <img src={charts} />
        );
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
                        icon={<DashboardIcon />}
                        name="Dashboard"
                        label="Dashboard" />

                    <SidebarItem
                        icon={<ApplicationIcon />}
                        name="Aplications"
                        label="Aplications" />

                    <SidebarItem
                        icon={<PuzzleIcon />}
                        name="Components"
                        label="Components" />
                    <SidebarItem
                        icon={<MessagesIcon />}
                        name="Messages"
                        label="Messages" />
                    <SidebarItem
                        icon={<ChartsIcon />}
                        name="Charts"
                        label="Charts" />

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
    