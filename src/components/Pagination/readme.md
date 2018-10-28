Pagination base:

    const cardImageContainerStyles = { height: 160};
    const cardImageStyles = { height: '105%'};
    const cardStyles = { width: 240};

    class PaginationExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activePage: 1,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
            this.content = [
                {
                    title: 'Rainbow',
                    image: 'images/illustrations/Illustration-rainbow-3.svg',
                },
                {
                    title: 'Rainbow friendly',
                    image: 'images/illustrations/Illustration-rainbow-4.svg',
                },
                {
                    title: 'Rainbow happy',
                    image: 'images/illustrations/Illustration-rainbow-5.svg',
                },
                {
                    title: 'Rainbow',
                    image: 'images/illustrations/Illustration-rainbow-6.svg',
                },
                {
                    title: 'Rainbow growing',
                    image: 'images/illustrations/Illustration-rainbow-7.svg',
                },
                {
                    title: 'Rainbow in the rain',
                    image: 'images/illustrations/Illustration-rainbow-8.svg',
                },
                {
                    title: 'Rainbow sad',
                    image: 'images/illustrations/Illustration-rainbow-9.svg',
                },
                {
                    title: 'Rainbow growing',
                    image: 'images/illustrations/Illustration-rainbow-10.svg',
                },
                {
                    title: 'The big Rainbow',
                    image: 'images/illustrations/Illustration-rainbow-11.svg',
                },
                {
                    title: 'Rainbow happy',
                    image: 'images/illustrations/Illustration-rainbow-1.svg',
                },
                {
                    title: 'Rainbow friendly',
                    image: 'images/illustrations/Illustration-rainbow-2.svg',
                },
            ];
        }

        getContent() {
            const { activePage } = this.state;
            const lastItem = activePage * 3;
            const firstItem = lastItem - 3;
            return this.content.slice(firstItem, lastItem).map(({ title, image }) => (
                <Card
                    style={cardStyles}
                    className="rainbow-m-bottom_x-large rainbow-m-right_small"
                    footer={<span className="rainbow-font-size-text_large rainbow-color_dark-1">{title}</span>}>
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch" style={cardImageContainerStyles}>
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
                    <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                        <div className="rainbow-flex rainbow-justify_space-around rainbow-flex_wrap">
                            {this.getContent()}
                        </div>
                        <Pagination className="rainbow-m_auto" pages={4} activePage={activePage} onChange={this.handleOnChange} />
                    </div>
                </div>
            );
        }
    }

    <PaginationExample />
