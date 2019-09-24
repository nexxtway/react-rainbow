Pagination base:

```js
function getCardImageContainerStyles(src) {
    return {
        width: '100%',
        height: 160,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
    };
}

const cardStyles = { width: 240 };

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
                src: 'images/illustrations/Illustration-rainbow-3.svg',
            },
            {
                title: 'Rainbow friendly',
                src: 'images/illustrations/Illustration-rainbow-4.svg',
            },
            {
                title: 'Rainbow happy',
                src: 'images/illustrations/Illustration-rainbow-5.svg',
            },
            {
                title: 'Rainbow',
                src: 'images/illustrations/Illustration-rainbow-6.svg',
            },
            {
                title: 'Rainbow growing',
                src: 'images/illustrations/Illustration-rainbow-7.svg',
            },
            {
                title: 'Rainbow in the rain',
                src: 'images/illustrations/Illustration-rainbow-8.svg',
            },
            {
                title: 'Rainbow sad',
                src: 'images/illustrations/Illustration-rainbow-9.svg',
            },
            {
                title: 'Rainbow growing',
                src: 'images/illustrations/Illustration-rainbow-10.svg',
            },
            {
                title: 'The big Rainbow',
                src: 'images/illustrations/Illustration-rainbow-11.svg',
            },
            {
                title: 'Rainbow happy',
                src: 'images/illustrations/Illustration-rainbow-1.svg',
            },
            {
                title: 'Rainbow friendly',
                src: 'images/illustrations/Illustration-rainbow-2.svg',
            },
        ];
    }

    getContent() {
        const { activePage } = this.state;
        const lastItem = activePage * 2;
        const firstItem = lastItem - 2;
        return this.content.slice(firstItem, lastItem).map(({ title, src }) => (
            <Card
                key={title}
                style={cardStyles}
                className="rainbow-m-bottom_x-large rainbow-m-right_small"
                footer={
                    <span className="rainbow-font-size-text_large rainbow-color_dark-1">
                        {title}
                    </span>
                }
            >
                <div style={getCardImageContainerStyles(src)} />
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
                    <Pagination
                        className="rainbow-m_auto"
                        pages={6}
                        activePage={activePage}
                        onChange={this.handleOnChange}
                    />
                </div>
            </div>
        );
    }
}

<PaginationExample />;
```
