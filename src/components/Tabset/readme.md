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
            } else if (selected === 'shared') {
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                    Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                </div>
            );
        }
        return (
                <div aria-labelledby="locked" id="sharedTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                    In a primary rainbow, the arc shows red on the outer part and violet on the inner side. This rainbow is caused by light being refracted when entering a droplet of water, then reflected inside on the back of the droplet and refracted again when leaving it.
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

                                <Tab
                                    label="LOCKED"
                                    name="locked"
                                    id="locked"
                                    ariaControls="sharedTab" />

                        </Tabset>
                        {this.getTabContent()}
                    </div>
                </div>
            );
        }
    }

    <TabsetExample />


##### Tabset fullWidth

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog, faEllipsisV, faFolderOpen, faLock } = require('@fortawesome/free-solid-svg-icons');
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
            } else if (selected === 'shared') {
            return (
                <div aria-labelledby="shared" id="sharedTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                    Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                </div>
            );
        }
        return (
                <div aria-labelledby="locked" id="sharedTab" className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3">
                    In a primary rainbow, the arc shows red on the outer part and violet on the inner side. This rainbow is caused by light being refracted when entering a droplet of water, then reflected inside on the back of the droplet and refracted again when leaving it.
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
                            fullWidth
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

                                <Tab
                                    name="locked"
                                    label={<span><FontAwesomeIcon icon={faLock} /> LOCKED</span>} />
                        </Tabset>
                        {this.getTabContent()}
                    </div>
                </div>
            );
        }
    }

    <TabsetExample />
