Pagination base:

    class PaginationExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activePage: 1,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
            this.content = Array(15).fill(0).map((item, index) => ({
                title: `Vegetable ${index + 1}`,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.",
            }));
        }

        getContent() {
                const { activePage } = this.state;
                const lastPage = activePage * 3;
                const firstPage = lastPage - 3;
                return this.content.slice(firstPage, lastPage).map(({ title, content }) => (
                    <Card
                        className="rainbow-m-bottom_small"
                        title={title}
                        actions={<Button variant="neutral" label="Buy" variant="outline-brand" />}>
                        <div className="rainbow-p-around_small">{content}</div>
                        </Card>
                ));
            }

        handleOnChange(event, page) {
            this.setState({ activePage: page });
        }

        render() {
            const { activePage } = this.state;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <div className="rainbow-p-around_x-large rainbow-p-around_x-large">
                        <div>
                            {this.getContent()}
                        </div>
                        <Pagination className="rainbow-m_auto" pages={5} activePage={activePage} onChange={this.handleOnChange} />
                    </div>
                </div>
            );
        }
    }

    <PaginationExample />
