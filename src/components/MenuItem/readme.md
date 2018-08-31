##### menu items

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCoffee,
        faCheck,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large">
            <ButtonMenu menuAlignment="right" menuSize="small">
                <MenuItem label="Menu Item Header" variant="header" />
                <MenuItem label="Menu Item Base" />
                <MenuItem label="Other Menu Item Base" />
                <MenuItem label="Menu Item Base Disabled" disabled />
                <MenuDivider variant="space" />
                <MenuItem label="Menu Item with Left Icon" icon={<FontAwesomeIcon icon={faCoffee} />} />
                <MenuItem disabled label="Menu Item disabled with Left Icon" icon={<FontAwesomeIcon icon={faCheck} />} />
            </ButtonMenu>
        </GlobalHeader>
    </div>
