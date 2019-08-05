##### ImportRecordsFlow base:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

    const containerStyles = {height: 360};

    const schema = {
        collection: 'users',
        attributes: {
            name: {},
            email: {},
            phone: {},
        },
    };

    class ImportRecordsFlowModal extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpen: false,
            };
            this.handleOnClick = this.handleOnClick.bind(this);
            this.handleOnClose = this.handleOnClose.bind(this);
        }

        handleOnClick() {
            return this.setState({ isOpen: true });
        }

        handleOnClose() {
            return this.setState({ isOpen: false });
        }

        render() {
            return (
                <div>
                    <Button
                        variant="neutral"
                        onClick={this.handleOnClick}>
                        <UploadIcon className="rainbow-m-right_x-small" />
                        Import
                    </Button>
                    <ImportRecordsFlow
                       isOpen={this.state.isOpen}
                       onRequestClose={this.handleOnClose}
                       schema={schema}
                       onComplete={(data) => console.log(data)}
                    />
                </div>
            );
        }
    }

    const { faPlus, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');

    <div style={containerStyles}>
        <GlobalHeader>
            <div className="rainbow-m-right_medium">
                <ImportRecordsFlowModal />
            </div>
            <ButtonGroup>
                <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
            </ButtonGroup>
        </GlobalHeader>
    </div>
