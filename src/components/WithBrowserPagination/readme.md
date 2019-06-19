##### A table with pagination made in the client side:

    const badgeStyles = { color: '#1de9b6' };
    const containerStyles = { height: 320, backgroundColor: '#f4f6f9', };
    const containerTableStyles = { height: 256 } ;
    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
        </GlobalHeader>
        <div style={containerStyles}>
            <WithBrowserPagination pageSize={5} component={Table} data={Users}  keyField="id" style={containerTableStyles}>
                <Column header="Name" field="name" />
                <Column header="Status" field="status" component={StatusBadge} />
                <Column header="Company" field="company" />
                <Column header="Email" field="email" />
                <Column header="Date of Birth" field="dob" />
                <Column header="City" field="city" />
            </WithBrowserPagination>
        </div>
    </div>

##### A table with fixed height and pagination made in the client side:

    const badgeStyles = { color: '#1de9b6' };
    const containerStyles = { height: 320, backgroundColor: '#f4f6f9', };
    const containerTableStyles = { height: 256 } ;
    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />

        <div style={containerStyles}>
            <WithBrowserPagination pageSize={10} component={Table} data={Users}  keyField="id" style={containerTableStyles}>
                <Column header="Name" field="name" />
                <Column header="Status" field="status" component={StatusBadge} />
                <Column header="Company" field="company" />
                <Column header="Email" field="email" />
                <Column header="Date of Birth" field="dob" />
                <Column header="City" field="city" />
            </WithBrowserPagination>
        </div>
    </div>

##### A table with pagination aling to the right made in the client side:

    const badgeStyles = { color: '#1de9b6' };
    const containerStyles = { height: 320, backgroundColor: '#f4f6f9', };
    const containerTableStyles = { height: 256 } ;
    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
        </GlobalHeader>
        <div style={containerStyles}>
            <WithBrowserPagination paginationAlignment="right" pageSize={5} component={Table} data={Users}  keyField="id" style={containerTableStyles}>
                <Column header="Name" field="name" />
                <Column header="Status" field="status" component={StatusBadge} />
                <Column header="Company" field="company" />
                <Column header="Email" field="email" />
                <Column header="Date of Birth" field="dob" />
                <Column header="City" field="city" />
            </WithBrowserPagination>
        </div>
    </div>
