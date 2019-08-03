Example:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

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
                        label="Open Modal"
                        onClick={this.handleOnClick}
                    />
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

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-m-right_medium">
                <ImportRecordsFlowModal />
            </div>
            <ButtonGroup>
                <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
            </ButtonGroup>
        </GlobalHeader>
    </div>

Example:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

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
                        label="Open Modal"
                        onClick={this.handleOnClick}
                    />
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

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-m-right_medium">
                <ImportRecordsFlowModal />
            </div>
            <ButtonGroup>
                <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
            </ButtonGroup>
        </GlobalHeader>
    </div>
