##### rating base

```js
const cardStyles = {
    width: 300,
};

const imageStyles = {
    borderTopLeftRadius: '0.875rem',
    borderTopRightRadius: '0.875rem',
    height: 170,
    width: '100%',
    backgroundImage: 'url(images/illustrations/Illustration-rainbow-4.svg)',
    backgroundSize: 'cover',
};

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPlus, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');

class SimpleRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '3',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return <Rating value={this.state.value} onChange={this.handleOnChange} />;
    }
}

<div className="rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faPlus} />} />
            <ButtonIcon
                variant="border-filled"
                disabled
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            />
        </ButtonGroup>
    </GlobalHeader>
    <div className="rainbow-align-content_center">
        <Card
            style={cardStyles}
            footer={
                <div>
                    <div className="rainbow-flex rainbow-flex_column rainbow-align_start rainbow-m-bottom_x-small">
                        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">
                            Rainbow
                        </h3>
                        <p className="rainbow-color_gray-4">
                            Give us your rate about how you like this…
                        </p>
                    </div>
                    <SimpleRating />
                </div>
            }
        >
            <div style={imageStyles} />
        </Card>
    </div>
</div>;
```

##### rating with details

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPlus, faEllipsisV, faImages } = require('@fortawesome/free-solid-svg-icons');

const smallStar = require('../../../assets/images/smallStar.svg');

const iconContainerStyles = {
    width: '2rem',
    height: '2rem',
    backgroundColor: '#ff6837',
};

const detailContainerStyles = { width: '50%' };

const smallStarsMargin = { marginLeft: 'auto' };

const barStyles = { height: '0.125rem', width: '110px' };

const progressBarStyles = {
    display: 'block',
    height: '100%',
    width: '50%',
};

const carouselStyles = {
    maxWidth: 700,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '0 12px',
};

const ratingCountStyles = { fontSize: '2rem' };

class DetailRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '2',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return <Rating value={this.state.value} onChange={this.handleOnChange} />;
    }
}

<div className="rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faPlus} />} />
            <ButtonIcon
                variant="border-filled"
                disabled
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            />
        </ButtonGroup>
    </GlobalHeader>
    <div className="rainbow-m-around_x-large">
        <Card
            icon={
                <span
                    className="rainbow-border-radius_circle rainbow-align-content_center"
                    style={iconContainerStyles}
                >
                    <FontAwesomeIcon icon={faImages} size="lg" className="rainbow-color_white" />
                </span>
            }
            title="Rainbow Gallery"
            footer={
                <div className="rainbow-flex rainbow-justify_spread rainbow-m-top_xx-small rainbow-m-bottom_medium">
                    <div>
                        <h3 className="rainbow-font-size-heading_small rainbow-color_dark-1">
                            Give us your rate
                        </h3>
                        <p
                            className="rainbow-color_gray-3 rainbow-m-top_x-small"
                            style={ratingCountStyles}
                        >
                            992
                            <span className="rainbow-font-size-text_x-small rainbow-m-left_x-small rainbow-color_gray-4">
                                Ratings
                            </span>
                        </p>
                    </div>
                    <div style={detailContainerStyles}>
                        <div className="rainbow-flex rainbow-justify_end">
                            <DetailRating />
                        </div>
                        <div className="rainbow-flex rainbow-flex_row rainbow-align_center rainbow-m-top_medium">
                            <img src={smallStar} style={smallStarsMargin} />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <div
                                className="rainbow-m-left_xx-small rainbow-background-color_gray-2"
                                style={barStyles}
                            >
                                <span
                                    className="rainbow-background-color_gray-4"
                                    style={progressBarStyles}
                                />
                            </div>
                        </div>
                        <div className="rainbow-flex rainbow-flex_row rainbow-align_center rainbow-m-top_x-small">
                            <img src={smallStar} style={smallStarsMargin} />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <div
                                className="rainbow-m-left_xx-small rainbow-background-color_gray-2"
                                style={barStyles}
                            >
                                <span
                                    className="rainbow-background-color_gray-4"
                                    style={progressBarStyles}
                                />
                            </div>
                        </div>
                        <div className="rainbow-flex rainbow-flex_row rainbow-align_center rainbow-m-top_x-small">
                            <img src={smallStar} style={smallStarsMargin} />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <div
                                className="rainbow-m-left_xx-small rainbow-background-color_gray-2"
                                style={barStyles}
                            >
                                <span
                                    className="rainbow-background-color_gray-4"
                                    style={progressBarStyles}
                                />
                            </div>
                        </div>
                        <div className="rainbow-flex rainbow-flex_row rainbow-align_center rainbow-m-top_x-small">
                            <img src={smallStar} style={smallStarsMargin} />
                            <img src={smallStar} className="rainbow-m-left_xx-small" />
                            <div
                                className="rainbow-m-left_xx-small rainbow-background-color_gray-2"
                                style={barStyles}
                            >
                                <span
                                    className="rainbow-background-color_gray-4"
                                    style={progressBarStyles}
                                />
                            </div>
                        </div>
                        <div className="rainbow-flex rainbow-flex_row rainbow-align_center rainbow-m-top_x-small">
                            <img src={smallStar} style={smallStarsMargin} />
                            <div
                                className="rainbow-m-left_xx-small rainbow-background-color_gray-2"
                                style={barStyles}
                            >
                                <span
                                    className="rainbow-background-color_gray-4"
                                    style={progressBarStyles}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <CarouselCard
                className="rainbow-m-vertical_x-large"
                style={carouselStyles}
                id="carousel-1"
                disableAutoScroll
            >
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-4.svg"
                    header="Happy Rainbow"
                    description="A rainbow is a meteorological phenomenon that is caused by reflection."
                    alternativeText="First card accessible description."
                    href="/"
                />
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-3.svg"
                    header="Second Card"
                    description="Second card description."
                    alternativeText="Second card accessible description."
                    href="/"
                />
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-5.svg"
                    header="Third Card"
                    description="Third card description."
                    alternativeText="Third card accessible description."
                    href="/"
                />
            </CarouselCard>
        </Card>
    </div>
</div>;
```
