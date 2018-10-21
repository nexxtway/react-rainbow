Pagination base:

    class PaginationExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activePage: 1,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(page) {
            this.setState({ activePage: page });
        }

        render() {
            const { activePage } = this.state;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <div className="rainbow-p-around_x-large rainbow-p-around_x-large">
                        <Pagination className="rainbow-m_auto" pages={7} activePage={activePage} onChange={this.handleOnChange} />
                    </div>
                </div>
            );
        }
    }

    <PaginationExample />
