Example:

    initialState = { isVisible: false };

    function HiddenItem({ isVisible }) {
        if (isVisible) {
            return <MenuItem label="item 3" onClick={() => alert('clicked item 3')} />;
        }
        return null;
    }

    <div className="slds-grid slds-p-around_large">
        <ButtonMenu>
            <MenuItem label="item 1" onClick={() => alert('clicked item 1')} />
            <MenuItem label="item 2" onClick={() => alert('clicked item 2')} />
            <HiddenItem isVisible={state.isVisible} />
            <MenuItem label="item 4" iconName="utility:user" onClick={() => alert('clicked item 4')} />
            <MenuItem label="item 5" iconName="utility:user" onClick={() => alert('clicked item 5')} />
        </ButtonMenu>
        <Button
            className="slds-m-left_large"
            label={state.isVisible ? 'Hide Third Item' : 'Show Hidden Item'}
            variant="brand"
            onClick={() => setState({ isVisible: !state.isVisible })} />
    </div>

Other Example:

    <div className="slds-grid slds-p-around_large">
        <div className="slds-m-horizontal_large">
            <ButtonMenu isLoading />
        </div>
        <div className="slds-m-horizontal_large">
            <ButtonMenu menuSize="large" menuAlignment="right">
                <MenuItem label="item 1" disabled />
                <MenuItem label="item 2" />
                <MenuItem label="users" variant="header" />
                <MenuItem label="item 3" iconName="utility:user" iconPosition="right" />
                <MenuItem label="item 4" iconName="utility:user" iconPosition="right" />
            </ButtonMenu>
        </div>
        <div className="slds-m-horizontal_large">
            <ButtonMenu menuSize="large" menuAlignment="bottom">
                <MenuItem label="Juan" iconName="utility:user" />
                <MenuItem label="Pepe" iconName="utility:user" />
                <MenuItem label="Jose" iconName="utility:user" />
                <MenuItem label="Julio" iconName="utility:user" />
                <MenuItem label="Luis" iconName="utility:user" />
            </ButtonMenu>
        </div>
    </div>
