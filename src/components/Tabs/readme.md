##### Tabs

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

    class TabsExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = { selected: 'issues' };
            this.handleOnSelect = this.handleOnSelect.bind(this);
        }

        handleOnSelect(event, selected) {
            this.setState({ selected });
        }

        render() {
            const { selected } = this.state;
            return (
                <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                    <Tabs id="tabset-1" onSelect={this.handleOnSelect} activeTabName={selected}>
                        <Tab label={<span><FontAwesomeIcon icon={faCog} /> Github issues</span>} name="issues" />
                        <Tab label="Pull Request" name="pr" />
                        <Tab label="Merge Request" name="mr" disabled />
                    </Tabs>
                </div>
            );
        }
    }

    <TabsExample />
