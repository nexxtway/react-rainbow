##### button menu base

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faAngleDown,
        faEdit,
        faPaste,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large">
            <ButtonGroup>
                <ButtonIcon icon={<FontAwesomeIcon icon={faEdit} />} variant="border-filled" disabled />
                <ButtonIcon icon={<FontAwesomeIcon icon={faPaste} />} variant="border-filled" disabled />
                <ButtonMenu
                    menuAlignment="right"
                    menuSize="x-small"
                    icon={<FontAwesomeIcon icon={faAngleDown} />}>

                    <MenuItem label="Menu Item One" />
                    <MenuItem label="Menu Item Two" />
                    <MenuItem label="Menu Item Three" />
                    <MenuDivider variant="space" />
                    <MenuItem label="Menu Item Four" />
                </ButtonMenu>
            </ButtonGroup>
        </GlobalHeader>
    </div>


##### button menu with subheaders

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCogs,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large" src="images/avatar2.jpg">
            <ButtonGroup>
                <ButtonMenu
                    buttonVariant="neutral"
                    menuAlignment="right"
                    menuSize="x-small"
                    icon={<FontAwesomeIcon icon={faCogs} />}>

                    <MenuItem label="Menu header" variant="header" />
                    <MenuItem label="Menu Item One" />
                    <MenuItem label="Menu Item Two" />
                    <MenuItem label="Menu Item Three" />
                    <MenuItem label="Menu header" variant="header" />
                    <MenuItem label="Menu Item One" />
                    <MenuItem label="Menu Item Two" />
                </ButtonMenu>
            </ButtonGroup>
        </GlobalHeader>
    </div>


##### button menu with icons

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCoffee,
        faCheck,
        faUser,
        faEllipsisV,
        faBell,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large" src="images/avatar3.jpg">
            <ButtonGroup className="slds-m-right_medium">
                <ButtonMenu
                    menuSize="x-small"
                    menuAlignment="right"
                    buttonVariant="brand"
                    icon={<FontAwesomeIcon icon={faEllipsisV} />}>

                    <MenuItem
                        label="Right Icon"
                        icon={<FontAwesomeIcon icon={faCoffee} />}
                        iconPosition="right" />

                    <MenuItem
                        label="Right Icon"
                        icon={<FontAwesomeIcon icon={faCheck} />}
                        iconPosition="right" />

                    <MenuItem
                        label="Right Icon"
                        icon={<FontAwesomeIcon icon={faUser} />}
                        iconPosition="right" />

                </ButtonMenu>
            </ButtonGroup>
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                buttonVariant="success"
                icon={<FontAwesomeIcon icon={faBell} />}>

                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faCoffee} />}
                    iconPosition="left" />

                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faCheck} />}
                    iconPosition="left" />

                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faUser} />}
                    iconPosition="left" />

            </ButtonMenu>
        </GlobalHeader>
    </div>


##### button menu position variants

    <GlobalHeader className="slds-m-bottom_xx-large slds-p-bottom_xx-large" src="images/avatar2.jpg">
        <ButtonGroup className="slds-m-right_medium">
            <ButtonMenu menuAlignment="left" menuSize="x-small" label="Settings">
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
            </ButtonMenu>
        </ButtonGroup>
        <ButtonMenu menuAlignment="right" menuSize="x-small" label="Settings">
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="slds-m-horizontal_large slds-p-top_xx-large slds-m-bottom_large slds-grid slds-grid_align-end">
        <ButtonMenu menuAlignment="bottom" menuSize="x-small" label="Add">
            <MenuItem label="Menu Positioned Bottom" />
            <MenuItem label="Menu Positioned Bottom" />
            <MenuItem label="Menu Positioned Bottom" />
        </ButtonMenu>
    </div>


##### button menu width variants

    <GlobalHeader className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <ButtonGroup className="slds-m-right_medium">
            <ButtonMenu menuSize="xx-small" menuAlignment="right" label="Settings">
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
            </ButtonMenu>
        </ButtonGroup>
        <div className="slds-m-right_medium">
            <ButtonMenu menuAlignment="right" menuSize="x-small" label="Apps">
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
            </ButtonMenu>
        </div>
        <ButtonMenu menuAlignment="right" menuSize="small" label="Notification">
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="slds-m-horizontal_large slds-p-top_xx-large slds-m-bottom_large slds-grid slds-grid_align-end">
        <ButtonGroup className="slds-m-right_medium">
            <ButtonMenu menuSize="medium" menuAlignment="right" label="Add">
                <MenuItem label="Menu medium" />
                <MenuItem label="Menu medium" />
                <MenuItem label="Menu medium" />
            </ButtonMenu>
        </ButtonGroup>
        <ButtonMenu menuAlignment="right" menuSize="large" label="Custom Apps">
            <MenuItem label="Menu large" />
            <MenuItem label="Menu large" />
            <MenuItem label="Menu large" />
        </ButtonMenu>
    </div>


##### button menu loading

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large" src="images/avatar3.jpg">
            <ButtonGroup>
                <ButtonMenu
                    menuAlignment="right"
                    menuSize="x-small" label="Custom Apps"
                    isLoading
                />
            </ButtonGroup>
        </GlobalHeader>
    </div>
