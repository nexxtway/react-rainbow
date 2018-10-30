##### rating base

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
    const {
        faPlus,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');


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
            return (
                <Rating
                    value={this.state.value}
                    onChange={this.handleOnChange} />
            );
        }
    }

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faPlus} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <div className="rainbow-align-content_center">
            <Card
                style={cardStyles}
                footer={
                    <div>
                        <div className="rainbow-flex rainbow-flex_column rainbow-align_start rainbow-m-bottom_x-small">
                            <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">Rainbow</h3>
                            <p className="rainbow-color_gray-4">Give us your rate about how you like this…</p>
                        </div>
                        <SimpleRating />
                    </div>
                  }>
               <div style={imageStyles} />
            </Card>
        </div>
    </div>
