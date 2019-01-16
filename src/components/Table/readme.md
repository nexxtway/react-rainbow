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
                        email: 'a@gmail.com',
                        status: 'verified',
                    },
                    {
                        name: 'Reinier',
                        company: '90milesbridge',
                        email: 'b@gmail.com',
                        status: 'verified',
                    },
                    {
                        name: 'Jose Torres',
                        company: 'Google',
                        email: 'e@gmail.com',
                        status: 'verified',
                    },
                    {
                        name: 'Sara',
                        company: '90milesbridge',
                        email: 'c@gmail.com',
                        status: 'verified',
                    },
                    {
                        name: 'Tahimi',
                        company: '90milesbridge',
                        email: 'd@gmail.com',
                        status: 'verified',
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
            const { data, sortDirection } = this.state;
            return (
                <div className="rainbow-p-bottom_xx-large">
                    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                        <ButtonGroup className="rainbow-m-right_medium">
                            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
                        </ButtonGroup>
                    </GlobalHeader>
                    <Table data={data} onSort={this.handleOnSort} sortDirection={sortDirection}>
                        <Column header="Name" field="name" sortable />
                        <Column header="Status" field="status" component={StatusBadge} />
                        <Column header="Company" field="company" />
                        <Column header="Email" field="email" sortable />
                    </Table>
                </div>
            );
        }
    }

    <TableExample />
