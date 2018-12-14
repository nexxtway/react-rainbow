#### simple Table

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faPencilAlt,
        faStore,
        faPlus,
        faBell,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const tableData = [
        {
            name: 'A',
            company: 'Google',
            email: 'a@gmail.com',
        },
        {
            name: 'B',
            company: 'Facebook',
            email: 'b@gmail.com',
        }
    ];

    const tableStyles = { paddingBottom: '46px' };

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <Table data={tableData} style={tableStyles}>
            <Column header="Name" field="name" />
            <Column header="Company" field="company" />
            <Column header="email" field="email" />
        </Table>
    </div>
