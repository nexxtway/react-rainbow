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
                    <div aria-labelledby="primary" id="primaryTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky.
                    </div>
                );
            } else if (selected === 'recents') {
                return (
                    <div aria-labelledby="recents" id="recentsTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                        Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                    </div>
                );
            }
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                    Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                </div>
            );
        }

        render() {
            const { selected } = this.state;

            return (
                <div style={tabsContainerStyles} className="rainbow-p-bottom_xx-large">
                    <GlobalHeader>
                        <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                    </GlobalHeader>
                    <div className="rainbow-p-around_large rainbow-align-content_space-between rainbow-background-color_gray-1">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">This is the header</h3>
                        <ButtonGroup>
                            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faCog} />} disabled />
                            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faEllipsisV} />} disabled />
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                        <Tabset 
                            id="tabset-1"
                            onSelect={this.handleOnSelect}
                            activeTabName={selected}
                            className="rainbow-background-color_gray-1 rainbow-p-horizontal_x-large">

                                <Tab 
                                    label="PRIMARY"
                                    name="primary"
                                    id="primary"
                                    ariaControls="primaryTab" />

                                <Tab
                                    label="RECENTS"
                                    name="recents"
                                    id="recents"
                                    ariaControls="recentsTab" />

                                <Tab
                                    label="SHARED"
                                    name="shared"
                                    id="shared"
                                    ariaControls="sharedTab" />

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
                    <div aria-labelledby="primary" id="primaryTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky.
                    </div>
                );
            } else if (selected === 'recents') {
                return (
                    <div aria-labelledby="recents" id="recentsTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                        Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                    </div>
                );
            }
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                    Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                </div>
            );
        }

        render() {
            const { selected } = this.state;
            return (
                <div style={tabsContainerStyles} className="rainbow-p-bottom_xx-large">
                    <GlobalHeader>
                        <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                    </GlobalHeader>
                    <div className="rainbow-p-around_large rainbow-align-content_space-between rainbow-background-color_gray-1">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">This is the header</h3>
                        <ButtonGroup>
                            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faCog} />} disabled  />
                            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faEllipsisV} />} disabled  />
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                        <Tabset 
                            id="tabset-2"
                            onSelect={this.handleOnSelect}
                            activeTabName={selected}
                            className="rainbow-background-color_gray-1 rainbow-p-horizontal_x-large">
                            
                                <Tab
                                    name="primary"
                                    label={<span><FontAwesomeIcon icon={faFolderOpen} /> PRIMARY</span>} />

                                <Tab
                                    name="recents"
                                    label={<span><FontAwesomeIcon icon={faClock} /> RECENTS</span>} />

                                <Tab
                                    name="shared"
                                    label={<span><FontAwesomeIcon icon={faStar} /> SHARED</span>} />

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
                    <div aria-labelledby="primary" id="primaryTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky.
                    </div>
                );
            } else if (selected === 'recents') {
                return (
                    <div aria-labelledby="recents" id="recentsTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                        Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                    </div>
                );
            }
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                    Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                </div>
            );
        }

        render() {
            const { selected } = this.state;
            return (
                <div style={tabsContainerStyles} className="rainbow-p-bottom_xx-large">
                    <GlobalHeader>
                        <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                    </GlobalHeader>
                    <div className="rainbow-p-around_large rainbow-align-content_space-between rainbow-background-color_gray-1">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">This is the header</h3>
                        <ButtonGroup>
                            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faCog} />} disabled />
                            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faEllipsisV} />} disabled />
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                        <Tabset
                            id="tabset-3"
                            onSelect={this.handleOnSelect}
                            activeTabName={selected}
                            className="rainbow-background-color_gray-1 rainbow-p-horizontal_x-large">

                                <Tab
                                    name="primary"
                                    label={<span><FontAwesomeIcon icon={faFolderOpen} /> PRIMARY</span>}
                                    disabled />

                                <Tab
                                    name="recents" 
                                    label={<span><FontAwesomeIcon icon={faClock} /> RECENTS</span>} />

                                <Tab
                                    name="shared"
                                    label={<span><FontAwesomeIcon icon={faStar} /> SHARED</span>}
                                    disabled />
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
    const { faCog, faEllipsisV, faEnvelope, faArrowLeft, faDollarSign } = require('@fortawesome/free-solid-svg-icons');
    const { faUser, faCreditCard } = require('@fortawesome/free-regular-svg-icons');
    const { faPaypal } = require('@fortawesome/free-brands-svg-icons');

    const cardContainerStyles = {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        width: '500px',
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
                    <div aria-labelledby="cardPayment" id="cardPaymentTab" className="rainbow-flex_column rainbow-p-top_medium rainbow-p-horizontal_xx-large">
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
                        <div className="rainbow-flex rainbow-justify_end rainbow-m-top_large">
                            <Button variant="outline-brand">
                                <FontAwesomeIcon icon={faArrowLeft} className="rainbow-m-right_x-small" />
                                Go Back
                            </Button>
                            <Button className="rainbow-m-left_small" variant="brand">
                                <FontAwesomeIcon icon={faDollarSign} className="rainbow-m-right_small" />
                                Pay 25usd
                            </Button>
                        </div>
                    </div>
                );
            }
            return (
                <div aria-labelledby="paypalPayment" id="paypalPaymentTab" className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-justify_center rainbow-p-horizontal_large rainbow-p-top_xx-large rainbow-p-bottom_xx-large">
                    <FontAwesomeIcon icon={faPaypal} size="4x" className="rainbow-color_brand rainbow-m-top_large rainbow-m-bottom_medium" />
                    <p className="rainbow-m-bottom_xx-large rainbow-color_gray-3 rainbow-font-size-text_medium">You will be redirected to PayPal</p>
                    <Button variant="brand">
                        <FontAwesomeIcon icon={faDollarSign} className="rainbow-m-right_x-small" />
                        Pay 25usd
                    </Button>
                </div>
            );
        }

        render() {
            const { selected } = this.state;
            return (
                <div className="rainbow-p-bottom_xx-large">
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
                    <div className="rainbow-m-vertical_x-large rainbow-align-content_center">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_brand">Select your favorite payment method</h3>
                    </div>
                    <div className="rainbow-align-content_center">
                        <Card className="rainbow-p-bottom_x-large" style={cardContainerStyles}>
                            <Tabset 
                                id="tabset-4"
                                onSelect={this.handleOnSelect}
                                activeTabName={selected}
                                fullWidth
                                className="rainbow-background-color_gray-1">
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
