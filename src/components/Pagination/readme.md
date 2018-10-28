Pagination base:

    const cardStyles = { width: '32%' };
    const cardContentStyles = { height: '70%' };
    const cardImageStyles = { width: '100%', flex: '1' };

    class PaginationExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activePage: 1,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
            this.content = [
                {
                    title: 'Rainbow happy',
                    image: 'images/illustrations/Illustration-rainbow-1.svg',
                },
                {
                    title: 'The Big Rainbow',
                    image: 'images/illustrations/Illustration-rainbow-2.svg',
                },
                {
                    title: 'Rainbow friendly',
                    image: 'images/illustrations/Illustration-rainbow-3.svg',
                },
                {
                    title: 'Rainbow 4',
                    image: 'images/illustrations/Illustration-rainbow-4.svg',
                },
                {
                    title: 'Rainbow 5',
                    image: 'images/illustrations/Illustration-rainbow-5.svg',
                },
                {
                    title: 'Rainbow 6',
                    image: 'images/illustrations/Illustration-rainbow-6.svg',
                },
                {
                    title: 'Rainbow 7',
                    image: 'images/illustrations/Illustration-rainbow-7.svg',
                },
                {
                    title: 'Rainbow 8',
                    image: 'images/illustrations/Illustration-rainbow-8.svg',
                },
                {
                    title: 'Rainbow 9',
                    image: 'images/illustrations/Illustration-rainbow-9.svg',
                },
                {
                    title: 'Rainbow 10',
                    image: 'images/illustrations/Illustration-rainbow-10.svg',
                },
                {
                    title: 'Rainbow 11',
                    image: 'images/illustrations/Illustration-rainbow-11.svg',
                },
            ];
        }

        getContent() {
            const { activePage } = this.state;
            const lastItem = activePage * 3;
            const firstItem = lastItem - 3;
            return this.content.slice(firstItem, lastItem).map(({ title, image }) => (
                <Card
                    className="rainbow-m-bottom_x-large rainbow-m-right_small"
                    style={cardStyles}
                    footer={<span className="rainbow-font-size-text_large rainbow-color_dark-1">{title}</span>}>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch" style={cardContentStyles}>
                        <img src={image} style={cardImageStyles} />
                    </div>
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
                        <div className="rainbow-flex">
                            {this.getContent()}
                        </div>
                        <Pagination className="rainbow-m_auto" pages={4} activePage={activePage} onChange={this.handleOnChange} />
                    </div>
                </div>
            );
        }
    }

    <PaginationExample />
