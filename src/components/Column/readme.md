##### simple Column

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faPencilAlt,
        faStore,
        faPlus,
        faBell,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const data = [
        {
            name: 'Leandro Torres',
            company: '90milesbridge',
            email: 'leandro@gmail.com',
            status: 'verified',
        },
        {
            name: 'Jose Torres',
            company: 'Google',
            email: 'jose@gmail.com',
            status: 'verified',
        },
        {
            name: 'Reinier',
            company: '90milesbridge',
            email: 'reinier@gmail.com',
            status: 'verified',
        },
        {
            name: 'Sara',
            company: '90milesbridge',
            email: 'sara@gmail.com',
            status: 'verified',
        },
        {
            name: 'Tahimi',
            company: '90milesbridge',
            email: 'tahimi@gmail.com',
            status: 'verified',
        },
    ];

    const badgeStyles = { color: '#1de9b6' };
    
    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    const tableStyles = { paddingBottom: 46 };

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <Table data={data} style={tableStyles}>
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
