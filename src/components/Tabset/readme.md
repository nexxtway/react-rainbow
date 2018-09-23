##### Tabset base

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');

    const tabsContainerStyles = {
        backgroundColor: 'white',
        borderRadius: '0.875rem',
    };

    class TabsetExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = { selected: 'recents' };
            this.handleOnSelect = this.handleOnSelect.bind(this);
        }

        handleOnSelect(event, selected) {
            this.setState({ selected });
        }

        getTabContent() {
            const { selected } = this.state;

            if (selected === 'primary') {
                return (
                    <div aria-labelledby="primary" id="primaryTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                        React Rainbow is a collection of components that will reliably
                        help you build your application in a snap.
                        Give it a hack and let us know what you think.
                    </div>
                );
            } else if (selected === 'recents') {
                return (
                    <div aria-labelledby="recents" id="recentsTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                        We are excited that you are interested in contributing to this project!
                    </div>
                );
            }
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                    Pull requests are very welcome, but should be within the scope of the project,
                    and follow the repository's code conventions. Before submitting a pull request,
                    it's always good to file an issue, so we can discuss the details of the PR.
                </div>
            );
        }

        render() {
            const { selected } = this.state;

            return (
                <div style={tabsContainerStyles}>
                    <GlobalHeader>
                        <ButtonGroup>
                            <ButtonMenu
                                id="button-menu"
                                menuAlignment="right"
                                menuSize="x-small"
                                buttonVariant="base"
                                icon={<FontAwesomeIcon icon={faCog} />}>

                                <MenuItem label="Menu Item One" />
                                <MenuItem label="Menu Item Two" />
                                <MenuItem label="Menu Item Three" />
                                <MenuItem label="Menu Item Four" />
                            </ButtonMenu>
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-p-top_large rainbow-p-bottom_large rainbow-p-left_x-large rainbow-p-right_large rainbow-flex rainbow-flex-row rainbow-align_center rainbow-justify_spread rainbow-background-color_gray-1">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">This is the header</h3>
                        <ButtonGroup>
                            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faCog} />} />
                            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faEllipsisV} />} />
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                        <Tabset id="tabset-1" onSelect={this.handleOnSelect} activeTabName={selected} className="rainbow-background-color_gray-1">
                            <Tab label="PRIMARY" name="primary" id="primary" ariaControls="primaryTab" />
                            <Tab label="RECENTS" name="recents" id="recents" ariaControls="recentsTab" />
                            <Tab label="SHARED" name="shared" id="shared" ariaControls="sharedTab" />
                        </Tabset>
                        {this.getTabContent()}
                    </div>
                </div>
            );
        }
    }

    <TabsetExample />

##### Tabset with icons

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog, faEllipsisV, faFolderOpen } = require('@fortawesome/free-solid-svg-icons');
    const {
        faClock,
        faStar,
    } = require('@fortawesome/free-regular-svg-icons');

    const tabsContainerStyles = {
        backgroundColor: 'white',
        borderRadius: '0.875rem',
    };


    class TabsetExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = { selected: 'recents' };
            this.handleOnSelect = this.handleOnSelect.bind(this);
        }

        handleOnSelect(event, selected) {
            this.setState({ selected });
        }

        getTabContent() {
            const { selected } = this.state;

            if (selected === 'primary') {
                return (
                    <div aria-labelledby="primary" id="primaryTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                        React Rainbow is a collection of components that will reliably
                        help you build your application in a snap.
                        Give it a hack and let us know what you think.
                    </div>
                );
            } else if (selected === 'recents') {
                return (
                    <div aria-labelledby="recents" id="recentsTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                        We are excited that you are interested in contributing to this project!
                    </div>
                );
            }
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                    Pull requests are very welcome, but should be within the scope of the project,
                    and follow the repository's code conventions. Before submitting a pull request,
                    it's always good to file an issue, so we can discuss the details of the PR.
                </div>
            );
        }

        render() {
            const { selected } = this.state;
            return (
                <div style={tabsContainerStyles}>
                    <GlobalHeader>
                        <ButtonGroup>
                            <ButtonMenu
                                id="button-menu"
                                menuAlignment="right"
                                menuSize="x-small"
                                buttonVariant="base"
                                icon={<FontAwesomeIcon icon={faCog} />}>

                                <MenuItem label="Menu Item One" />
                                <MenuItem label="Menu Item Two" />
                                <MenuItem label="Menu Item Three" />
                                <MenuItem label="Menu Item Four" />
                            </ButtonMenu>
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-p-top_large rainbow-p-bottom_large rainbow-p-left_x-large rainbow-p-right_large rainbow-flex rainbow-flex-row rainbow-align_center rainbow-justify_spread rainbow-background-color_gray-1">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">This is the header</h3>
                        <ButtonGroup>
                            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faCog} />} />
                            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faEllipsisV} />} />
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                        <Tabset id="tabset-2" onSelect={this.handleOnSelect} activeTabName={selected} className="rainbow-background-color_gray-1">
                            <Tab label={<span><FontAwesomeIcon icon={faFolderOpen} /> PRIMARY</span>} name="primary" />
                            <Tab label={<span><FontAwesomeIcon icon={faClock} /> RECENTS</span>} name="recents" />
                            <Tab label={<span><FontAwesomeIcon icon={faStar} /> SHARED</span>} name="shared" />
                        </Tabset>
                        {this.getTabContent()}
                    </div>
                </div>
            );
        }
    }

    <TabsetExample />

##### Tabset disabled

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog, faEllipsisV, faFolderOpen } = require('@fortawesome/free-solid-svg-icons');
    const {
        faClock,
        faStar,
    } = require('@fortawesome/free-regular-svg-icons');

    const tabsContainerStyles = {
        backgroundColor: 'white',
        borderRadius: '0.875rem',
    };


    class TabsetExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = { selected: 'recents' };
            this.handleOnSelect = this.handleOnSelect.bind(this);
        }

        handleOnSelect(event, selected) {
            this.setState({ selected });
        }

        getTabContent() {
            const { selected } = this.state;

            if (selected === 'primary') {
                return (
                    <div aria-labelledby="primary" id="primaryTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                        React Rainbow is a collection of components that will reliably
                        help you build your application in a snap.
                        Give it a hack and let us know what you think.
                    </div>
                );
            } else if (selected === 'recents') {
                return (
                    <div aria-labelledby="recents" id="recentsTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large rainbow-align-text-center">
                        We are excited that you are interested in contributing to this project!
                    </div>
                );
            }
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
                    Pull requests are very welcome, but should be within the scope of the project,
                    and follow the repository's code conventions. Before submitting a pull request,
                    it's always good to file an issue, so we can discuss the details of the PR.
                </div>
            );
        }

        render() {
            const { selected } = this.state;
            return (
                <div style={tabsContainerStyles}>
                    <GlobalHeader>
                        <ButtonGroup>
                            <ButtonMenu
                                id="button-menu"
                                menuAlignment="right"
                                menuSize="x-small"
                                buttonVariant="base"
                                icon={<FontAwesomeIcon icon={faCog} />}>

                                <MenuItem label="Menu Item One" />
                                <MenuItem label="Menu Item Two" />
                                <MenuItem label="Menu Item Three" />
                                <MenuItem label="Menu Item Four" />
                            </ButtonMenu>
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-p-top_large rainbow-p-bottom_large rainbow-p-left_x-large rainbow-p-right_large rainbow-flex rainbow-flex-row rainbow-align_center rainbow-justify_spread rainbow-background-color_gray-1">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">This is the header</h3>
                        <ButtonGroup>
                            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faCog} />} />
                            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faEllipsisV} />} />
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                        <Tabset id="tabset-3" onSelect={this.handleOnSelect} activeTabName={selected} className="rainbow-background-color_gray-1">
                            <Tab label={<span><FontAwesomeIcon icon={faFolderOpen} /> PRIMARY</span>} name="primary" disabled />
                            <Tab label={<span><FontAwesomeIcon icon={faClock} /> RECENTS</span>} name="recents" />
                            <Tab label={<span><FontAwesomeIcon icon={faStar} /> SHARED</span>} name="shared" disabled />
                        </Tabset>
                        {this.getTabContent()}
                    </div>
                </div>
            );
        }
    }

    <TabsetExample />

##### Tabset with fullWidth

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog, faEllipsisV, faEnvelope, faArrowLeft, faArrowRight } = require('@fortawesome/free-solid-svg-icons');
    const { faUser, faCreditCard } = require('@fortawesome/free-regular-svg-icons');
    const { faPaypal } = require('@fortawesome/free-brands-svg-icons');

    const tabsContainerStyles = {
        borderRadius: '0.875rem',
    };


    class TabsetExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = { selected: 'card' };
            this.handleOnSelect = this.handleOnSelect.bind(this);
            this.formContainerStyles = {
                borderRight: '0.0625rem #e3e5ed solid',
                borderLeft: '0.0625rem #e3e5ed solid',
                borderBottom: '0.0625rem #e3e5ed solid',
                borderBottomLeftRadius: '0.875rem',
                borderBottomRightRadius: '0.875rem'
            };
        }

        handleOnSelect(event, selected) {
            this.setState({ selected });
        }

        getPaymentForm() {
            const { selected } = this.state;

            if (selected === 'card') {
                return (
                    <div aria-labelledby="cardPayment" id="cardPaymentTab" className="rainbow-flex rainbow-flex_column rainbow_vertical-strtech rainbow-p-horizontal_xx-large">
                        <Input
                            className="rainbow-m-top_large"
                            label="First Name"
                           style={{ color: '#e3e5ed' }} placeholder="Enter your first name"
                            icon={<FontAwesomeIcon icon={faUser} style={{ color: '#e3e5ed' }} />}
                            required />
                        <Input
                            className="rainbow-m-top_large"
                            label="Email Address"
                            placeholder="Enter your email address"
                            icon={<FontAwesomeIcon icon={faEnvelope} style={{ color: '#e3e5ed' }} />}
                            required />
                        <Input
                            className="rainbow-m-top_large"
                            label="Card Number"
                            placeholder="Enter your card number"
                            icon={<FontAwesomeIcon icon={faCreditCard} style={{ color: '#e3e5ed' }} />}
                            required />
                        <div className="rainbow-flex rainbow-flex_row rainbow-justify_end rainbow-m-top_large">
                            <Button variant="outline-brand">
                                <FontAwesomeIcon icon={faArrowLeft} className="rainbow-m-right_medium" />
                                Go Back
                            </Button>
                            <Button className="rainbow-m-left_x-large rainbow-m-right_x-small" variant="brand">
                                Pay 25usd
                                <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_medium" />
                            </Button>
                        </div>
                    </div>
                );
            }
            return (
                <div aria-labelledby="paypalPayment" id="paypalPaymentTab" className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-justify_center rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large">
                    <FontAwesomeIcon icon={faPaypal} size="4x" className="rainbow-color_brand rainbow-m-top_large rainbow-m-bottom_medium" />
                    <span className="rainbow-m-bottom_medium rainbow-color_gray-4">You will be redirected to PayPal</span>
                    <Button variant="brand">
                        Pay 25usd
                        <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_medium" />
                    </Button>
                </div>
            );
        }

        render() {
            const { selected } = this.state;
            return (
                <div style={tabsContainerStyles}>
                    <GlobalHeader>
                        <ButtonGroup>
                            <ButtonMenu
                                id="button-menu"
                                menuAlignment="right"
                                menuSize="x-small"
                                buttonVariant="base"
                                icon={<FontAwesomeIcon icon={faCog} />}>

                                <MenuItem label="Menu Item One" />
                                <MenuItem label="Menu Item Two" />
                                <MenuItem label="Menu Item Three" />
                                <MenuItem label="Menu Item Four" />
                            </ButtonMenu>
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-m-bottom_x-large rainbow-m-top_x-large rainbow-flex rainbow-frainbow-m-left_x-large rainbow-m-right_largelex-row rainbow-justify_center">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_brand">Select your favorite payment method</h3>
                    </div>
                    <div className="rainbow-flex rainbow-flex-column rainbow-justify_center">
                        <Card className="rainbow-p-bottom_large rainbow-m-bottom_large rainbow-square-top rainbow-payment-card">
                            <Tabset id="tabset-4" onSelect={this.handleOnSelect} activeTabName={selected} fullWidth className="rainbow-background-color_gray-1">
                                <Tab
                                    label={<span><FontAwesomeIcon icon={faCreditCard} /> PAY WITH CARD</span>}
                                    name="card"
                                    id="cardPayment"
                                    ariaControls="CardPaymentTab" />
                                <Tab
                                    label={<span><FontAwesomeIcon icon={faPaypal} /> PAY WITH PAYPAL</span>}
                                    name="paypal"
                                    id="paypalPayment"
                                    ariaControls="paypalPaymentTab" />
                           </Tabset>
                           {this.getPaymentForm()}
                        </Card>
                    </div>
                </div>
            );
        }
    }

    <TabsetExample />
