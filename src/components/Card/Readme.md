Card Expample 1:

        <Card
            iconName="custom:custom72"
            title="Card Header"
            footer="Card Footer"
            actions={<Button variant="brand" label="New" />} >
                Anything can go in the Card Body
        </Card>

Card expamples 2:

            <div className="slds-card-wrapper">
            <Card
                iconName="standard:contact"
                title="Contacts"
                footer="Card Footer"
                actions={<Button variant="neutral" label="Add" />} >
            </Card>
            <Card
                isLoading
                className="slds-card_boundary"
                iconName="utility:spinner"
                title="Card is loading"
                actions={<Button disabled variant="neutral" label="Add" />} >
            </Card>
            </div>