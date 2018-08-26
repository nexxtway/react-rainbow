##### example

    <Application assetsSrc="path/to/assets">
        <section>
            <header className="slds-grid slds-media_center slds-grid_align-spread slds-color__background_gray-1 slds-p-vertical_x-small slds-border_bottom react-slds-golbal-header">
                <img src="path/to/assets/react.svg" alt="react lightning logo" className="slds-m-left_medium" />
                <article className="slds-grid slds-media_center">

                    <ButtonGroup className="slds-m-right_medium">
                        <ButtonIcon iconName="utility:add" variant="border-filled" disabled />
                        <ButtonIcon iconName="utility:edit" variant="border-filled" />
                        <ButtonIcon iconName="utility:paste" variant="border-filled" />
                        <ButtonMenu menuSize="x-small" menuAlignment="right" iconName="utility:threedots_vertical">
                            <MenuItem label="Options" variant="header" />
                            <MenuItem label="Menu Item" />
                            <MenuItem label="Menu Item" />
                            <MenuItem label="Menu Item" />
                            <MenuDivider variant="space" />
                            <MenuItem 
                                label="Right Icon"
                                iconName="utility:kanban" 
                                iconPosition="right" />
                            <MenuItem 
                                label="Right Icon"
                                iconName="utility:side_list" 
                                iconPosition="right" />
                        </ButtonMenu>
                    </ButtonGroup>

                    <ButtonIcon iconName="utility:notification" variant="container" />
                    <Avatar
                        src="path/to/assets/images/avatar2.jpg"
                        variant="circle"
                        className="slds-m-horizontal_medium" />
                </article>
            </header>
            <section className="slds-m-horizontal_large slds-m-top_large slds-m-bottom_xx-large">
                <Breadcrumbs className="slds-m-bottom_large">
                    <Breadcrumb label="Parent entity" onClick={ () => alert('Breadcrumb was clicked') } />
                    <Breadcrumb label="Parent record name" />
                </Breadcrumbs>
                <Card
                    className="slds-card_boundary"
                    iconName="standard:task"
                    title="Task"
                    footer={<Button label="View All" />}
                    actions={<Button variant="neutral" label="New" />} >
                        <div className="slds-p-bottom_large" >
                            <Input
                                iconName="utility:search"
                                placeholder="Search"
                                type="search"
                                className="slds-p-around_small slds-size_1-of-3" />
                            <div className="slds-p-vertical_large slds-align_absolute-center    slds-grid_vertical" >
                                <img src="path/to/assets/images/illustrations/empty-state-tasks.svg" alt="the   wood" />
                                <h1 className="slds-p-top_large slds-text-heading_medium" >No new tasks</h1>
                            </div>
                        </div>

                </Card>
            </section>
        </section>
    </Application>
