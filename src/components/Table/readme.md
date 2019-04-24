##### simple Table

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

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <Table data={data}>
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>


##### Table with sorting

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faPencilAlt,
        faStore,
        faPlus,
        faBell,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const badgeStyles = { color: '#1de9b6' };
    const tableContainerStyles = { height: 300 };

    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    class TableExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                sortedBy: undefined,
                sortDirection: 'asc',
                data: [
                    {
                        name: 'Leandro Torres',
                        company: '90milesbridge',
                        email: 'leandro@gmail.com',
                        status: 'verified',
                        id: '1234qwerty',
                    },
                    {
                        name: 'Reinier',
                        company: '90milesbridge',
                        email: 'reinier@gmail.com',
                        status: 'verified',
                        id: '1234asdfgh',
                    },
                    {
                        name: 'Jose Torres',
                        company: 'Google',
                        email: 'jose@gmail.com',
                        status: 'verified',
                        id: '1234zxcvbn',
                    },
                    {
                        name: 'Sara',
                        company: '90milesbridge',
                        email: 'sara@gmail.com',
                        status: 'verified',
                        id: '5678qwerty',
                    },
                    {
                        name: 'Tahimi',
                        company: '90milesbridge',
                        email: 'tahimi@gmail.com',
                        status: 'verified',
                        id: '5678asdfgh',
                    },
                    {
                        name: 'Alejandro',
                        company: 'Google',
                        email: 'alejandro@gmail.com',
                        status: 'verified',
                        id: '5678zxcvbn',
                    },
                    {
                        name: 'Carlos',
                        company: 'Oracle',
                        email: 'carlos@gmail.com',
                        status: 'verified',
                        id: '9012qwerty',
                    },
                    {
                        name: 'Luis',
                        company: 'Google',
                        email: 'luis@gmail.com',
                        status: 'verified',
                        id: '9012asdfgh',
                    },
                ],
            };
            this.handleOnSort = this.handleOnSort.bind(this);
        }

        handleOnSort(event, field, nextSortDirection) {
            const { data, sortedBy, sortDirection } = this.state;

            let newData = [...data];

            const key = (x) => x[field];
            const reverse = nextSortDirection === 'asc' ? 1 : -1;;

            const sortedData = newData.sort((a, b) => {
                a = key(a);
                b = key(b);
                return reverse * ((a > b) - (b > a));
            });

            this.setState({ data: sortedData, sortedBy: field, sortDirection: nextSortDirection });
        }

        render() {
            const { data, sortDirection, sortedBy } = this.state;
            return (
                <div className="rainbow-p-bottom_xx-large">
                    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                        <ButtonGroup className="rainbow-m-right_medium">
                            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
                        </ButtonGroup>
                    </GlobalHeader>
                    <div style={tableContainerStyles}>
                        <Table
                            keyField="id"
                            data={data}
                            onSort={this.handleOnSort}
                            sortDirection={sortDirection}
                            sortedBy={sortedBy}>

                            <Column header="Name" field="name" sortable />
                            <Column header="Status" field="status" component={StatusBadge} />
                            <Column header="Company" field="company" />
                            <Column header="Email" field="email" sortable />
                        </Table>
                    </div>
                </div>
            );
        }
    }

    <TableExample />


##### Table with Selectable Rows

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faPencilAlt,
        faStore,
        faPlus,
        faBell,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const badgeStyles = { color: '#1de9b6' };
    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;
    const data = [
        {
            name: 'Leandro Torres',
            company: 'nexxtway',
            email: 'leandro@gmail.com',
            status: 'verified',
            id: '1234qwerty',
        },
        {
            name: 'Jose Torres',
            company: 'Google',
            email: 'jose@gmail.com',
            status: 'verified',
            id: '1234asdfgh',
        },
        {
            name: 'Reinier',
            company: '90milesbridge',
            email: 'reinier@gmail.com',
            status: 'verified',
            id: '1234zxcvbn',
        },
        {
            name: 'Sara',
            company: '90milesbridge',
            email: 'sara@gmail.com',
            status: 'verified',
            id: '5678qwerty',
        },
        {
            name: 'Tahimi',
            company: 'nexxtway',
            email: 'tahimi@gmail.com',
            status: 'verified',
            id: '5678asdfgh',
        },
        {
            name: 'Leo',
            company: 'nexxtway',
            email: 'leo@gmail.com',
            status: 'verified',
            id: '5678zxcvbn',
        },
        {
            name: 'Tahimi Leon',
            company: 'nexxtway',
            email: 'leon@nexxtway.com',
            status: 'verified',
            id: '9012qwerty',
        },
    ];

    class TableExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                isLoading: true,
            };
        }

        componentDidMount() {
            setTimeout(() => this.setState({
                isLoading: false,
                data,
            }), 2000);
        }

        render() {
            const { data, isLoading } = this.state;
            return (
                <div className="rainbow-p-bottom_xx-large">
                    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                        <ButtonGroup className="rainbow-m-right_medium">
                            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
                        </ButtonGroup>
                    </GlobalHeader>
                    <Table id="table-5" keyField="id" showCheckboxColumn isLoading={isLoading} data={data} onRowSelection={(data) => console.log(data)}>
                        <Column header="Name" field="name" />
                        <Column header="Status" field="status" component={StatusBadge} />
                        <Column header="Company" field="company" />
                        <Column header="Email" field="email" />
                    </Table>
                </div>
            );
        }
    }

    <TableExample />


##### Table with a limited number of Selectable Rows

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
            company: 'nexxtway',
            email: 'leandro@gmail.com',
            status: 'verified',
            id: '1234qwerty',
        },
        {
            name: 'Jose Torres',
            company: 'Google',
            email: 'jose@gmail.com',
            status: 'verified',
            id: '1234asdfgh',
        },
        {
            name: 'Reinier',
            company: '90milesbridge',
            email: 'reinier@gmail.com',
            status: 'verified',
            id: '1234zxcvbn',
        },
        {
            name: 'Sara',
            company: '90milesbridge',
            email: 'sara@gmail.com',
            status: 'verified',
            id: '5678qwerty',
        },
        {
            name: 'Tahimi',
            company: 'nexxtway',
            email: 'tahimi@gmail.com',
            status: 'verified',
            id: '5678asdfgh',
        },
        {
            name: 'Leo',
            company: 'nexxtway',
            email: 'leo@gmail.com',
            status: 'verified',
            id: '5678zxcvbn',
        },
        {
            name: 'Tahimi Leon',
            company: 'nexxtway',
            email: 'leon@nexxtway.com',
            status: 'verified',
            id: '9012qwerty',
        },
    ];

    const badgeStyles = { color: '#1de9b6' };

    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <Table id="table-7" keyField="id" showCheckboxColumn data={data} maxRowSelection={4} selectedRows={['1234qwerty', '1234zxcvbn']} onRowSelection={(data) => console.log(data)}>
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>


##### Table with Selectable Rows by radio buttons

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
            company: 'nexxtway',
            email: 'leandro@gmail.com',
            status: 'verified',
            id: '1234qwerty',
        },
        {
            name: 'Jose Torres',
            company: 'Google',
            email: 'jose@gmail.com',
            status: 'verified',
            id: '1234asdfgh',
        },
        {
            name: 'Reinier',
            company: '90milesbridge',
            email: 'reinier@gmail.com',
            status: 'verified',
            id: '1234zxcvbn',
        },
        {
            name: 'Sara',
            company: '90milesbridge',
            email: 'sara@gmail.com',
            status: 'verified',
            id: '5678qwerty',
        },
        {
            name: 'Tahimi',
            company: 'nexxtway',
            email: 'tahimi@gmail.com',
            status: 'verified',
            id: '5678asdfgh',
        },
    ];

    const badgeStyles = { color: '#1de9b6' };

    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <Table id="table-9" keyField="id" showCheckboxColumn data={data} maxRowSelection={1} onRowSelection={(data) => console.log(data)}>
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>


##### Table Loading

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

    ];

    const badgeStyles = { color: '#1de9b6' };

    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <Table isLoading data={data}>
            <Column header="Name" field="name" />
            <Column header="Status" field="status" component={StatusBadge} />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>


##### Table Empty

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faPencilAlt,
        faStore,
        faPlus,
        faBell,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const tableContainerStyles = { height: 300 };

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <Table style={tableContainerStyles}>
            <Column header="Name" field="name" />
            <Column header="Company" field="company" />
            <Column header="Email" field="email" />
        </Table>
    </div>
