##### rating base

```js
import React from 'react';
import { Card, ButtonGroup, ButtonIcon, Rating } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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

const StyledHeader = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledText = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.label};
`;

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
                        <StyledHeader className="rainbow-font-size-heading_medium">
                            Rainbow
                        </StyledHeader>
                        <StyledText>
                            Give us your rate about how you like this…
                        </StyledText>
                    </div>
                    <SimpleRating />
                </div>
            }
        >
            <div style={imageStyles} />
        </Card>
    </div>
</div>
```

##### Rating readOnly

```js
import React from 'react';
import { Card, ButtonGroup, ButtonIcon, Rating } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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

const StyledHeader = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

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
                    <div className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-m-bottom_x-small">
                        <StyledHeader className="rainbow-font-size-heading_medium">
                            Rainbow Image
                        </StyledHeader>
                    </div>
                    <Rating value="2.45" readOnly label="2.45 of 5" />
                </div>
            }
        >
            <div style={imageStyles} />
        </Card>
    </div>
</div>
```

##### rating with details

```js
import React from 'react';
import {
    Rating,
    ButtonGroup,
    ButtonIcon,
    Card,
    CarouselCard,
    CarouselImage,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV, faImages } from '@fortawesome/free-solid-svg-icons';
import smallStar from '../../../assets/images/smallStar.svg';
import styled from 'styled-components';

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

const StyledHeader = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledText = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.header};

    span {
        color: ${props => props.text.title};
    }
`;

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
                        <StyledHeader className="rainbow-font-size-heading_small">
                            Give us your rate
                        </StyledHeader>
                        <StyledText
                            className="rainbow-m-top_x-small"
                            style={ratingCountStyles}
                        >
                            992
                            <span className="rainbow-font-size-text_x-small rainbow-m-left_x-small">
                                Ratings
                            </span>
                        </StyledText>
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
</div>
```
