##### modal base empty

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

    class EmptyModal extends React.Component {
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
                        id="button-1"
                        variant="neutral"
                        label="Open Modal"
                        onClick={this.handleOnClick} />
                    <Modal
                       id="modal-1"
                       isOpen={this.state.isOpen}
                       onRequestClose={this.handleOnClose}>
                       <img
                           src="images/illustrations/Illustration-rainbow-1.svg"
                           className="rainbow-p-vertical_x-large rainbow-m_auto rainbow-align-content_center"
                           alt="landscape with rainbows, birds and colorful balloons" />
                    </Modal>
                </div>
            );
        }
    }

    const { faPlus, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');

    <div>
        <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <div className="rainbow-m-right_medium">
                <EmptyModal />
            </div>
            <ButtonGroup>
                <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
            </ButtonGroup>
        </GlobalHeader>
    </div>

##### modal with header

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

    class ModalWHeader extends React.Component {
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
                <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
                        <Button
                            variant="neutral"
                            label="Modal with header"
                            onClick={this.handleOnClick} />
                    </GlobalHeader>
                    <Modal
                       isOpen={this.state.isOpen}
                       onRequestClose={this.handleOnClose}
                       title="Modal Header" >
                       <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                        Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                       </p>
                    </Modal>
                </div>
            );
        }
    }

    <ModalWHeader />

##### modal with footer

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

    class ModalWFooter extends React.Component {
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
                <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
                        <Button
                            id="button-2"
                            variant="neutral"
                            label="Modal with footer"
                            onClick={this.handleOnClick} />
                    </GlobalHeader>
                    <Modal
                        id="modal-2"
                        isOpen={this.state.isOpen}
                        onRequestClose={this.handleOnClose}
                        title="Modal Header"
                        footer={
                            <div className="rainbow-flex rainbow-justify_end">
                                <Button className="rainbow-m-right_large" label="Cancel" variant="neutral" />
                                <Button label="Save" variant="brand" />
                            </div>
                       } >
                       <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                        Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                       </p>
                    </Modal>
                </div>
            );
        }
    }

    <ModalWFooter />

##### modal with footer directional

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCog } = require('@fortawesome/free-solid-svg-icons');

    class ModalWFooterDirectional extends React.Component {
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
                <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
                        <Button
                            variant="neutral"
                            label="Modal with footer"
                            onClick={this.handleOnClick} />
                    </GlobalHeader>
                    <Modal
                       isOpen={this.state.isOpen}
                       onRequestClose={this.handleOnClose}
                       title="Modal Header"
                       footer={
                            <div className="rainbow-flex rainbow-justify_spread">
                                <Button label="Previous" variant="neutral" />
                                <Button label="Save" variant="brand" />
                            </div>
                       } >
                       <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                        Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                       </p>
                    </Modal>
                </div>
            );
        }
    }

    <ModalWFooterDirectional />

##### modal with variant size

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faTasks, faShareAlt, faAngleDown } = require('@fortawesome/free-solid-svg-icons');
    const { faHeart } = require('@fortawesome/free-regular-svg-icons');

    const iconContainerStyles = {
        width: '2.5rem',
        height: '2.5rem',
    };

    class ModalWSize extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpen: false,
                isOpenMedium: false,
                isOpenLarge: false,
            };
            this.handleOnClick = this.handleOnClick.bind(this);
            this.handleOnClickMedium = this.handleOnClickMedium.bind(this);
            this.handleOnClickLarge = this.handleOnClickLarge.bind(this);
            this.handleOnClose = this.handleOnClose.bind(this);
        }

        handleOnClick() {
            return this.setState({ isOpen: true });
        }

        handleOnClickMedium() {
            return this.setState({ isOpenMedium: true });
        }

        handleOnClickLarge() {
            return this.setState({ isOpenLarge: true });
        }

        handleOnClose() {
            return this.setState({
                    isOpen: false,
                    isOpenMedium: false,
                    isOpenLarge: false,
                });
        }

        render() {
            return (
                <div className="rainbow-m-around_large">
                    <Card
                        icon={
                            <span className="rainbow-background-color_yellow rainbow-border-radius_circle rainbow-align-content_center" style={iconContainerStyles}>
                                <FontAwesomeIcon icon={faTasks} size="lg" className="rainbow-color_white"/>
                            </span>
                        }
                        title="Task"
                        actions={<Button onClick={this.handleOnClick} variant="neutral" label="Modal small" />}
                        footer={
                            <div className="rainbow-align-content_center">
                                <ButtonGroup>
                                    <Button onClick={this.handleOnClickMedium} variant="outline-brand" label="Modal medium" />
                                    <Button onClick={this.handleOnClickLarge} variant="outline-brand" label="Modal large" />
                                </ButtonGroup>
                            </div>
                        }>

                        <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_column" >
                            <img src="images/illustrations/Illustration-rainbow-2.svg" alt="landscape with rainbows and colorful birds" />
                        </div>
                    </Card>
                    <Modal
                       isOpen={this.state.isOpen}
                       onRequestClose={this.handleOnClose}
                       title="Modal Small">
                       <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                        Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                       </p>
                    </Modal>
                    <Modal
                       isOpen={this.state.isOpenMedium}
                       onRequestClose={this.handleOnClose}
                       title="Modal Medium"
                       size="medium">
                       <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                        Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                       </p>
                    </Modal>
                    <Modal
                       isOpen={this.state.isOpenLarge}
                       onRequestClose={this.handleOnClose}
                       title="Modal Large"
                       size="large">
                       <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
                        Rainbows can be full circles. However, the observer normally sees only an arc formed by illuminated droplets above the ground, and centered on a line from the sun to the observer's eye.
                       </p>
                    </Modal>
                </div>
            );
        }
    }

    <ModalWSize />
