Pagination base:

    class PaginationExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activePage: 1,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
            this.content = [
                {
                    title: 'Carrots',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.',
                },
                {
                    title: 'Chard',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.',
                },
                {
                    title: 'Chili Pepper',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.',
                },
                {
                    title: 'Cucumber',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.',
                },
                {
                    title: 'Lettuce',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.',
                },
                {
                    title: 'Nappa Cabbage',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.',
                },
            ];
        }

        getContent() {
            const { activePage } = this.state;
            const { title, content } = this.content[activePage - 1];
            return (
                <Card
                    className="rainbow-m-bottom_small"
                    title={title}
                    actions={<Button variant="neutral" label="Buy" variant="outline-brand" />}>
                    <div className="rainbow-p-around_small">{content}</div>
                </Card>
            );
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
                        <Pagination className="rainbow-m_auto" pages={6} activePage={activePage} onChange={this.handleOnChange} />
                    </div>
                </div>
            );
        }
    }

    <PaginationExample />
