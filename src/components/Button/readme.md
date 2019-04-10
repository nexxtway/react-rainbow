##### simple buttons

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Button variant="base" label="Button Base" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button label="Button Neutral" variant="neutral" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button label="Button Outline Brand" variant="outline-brand" />
        </div>
    </div>


##### button variants

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Button
                label="Button Brand"
                onClick={() => alert('clicked!')}
                variant="brand" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button
                label="Button Success"
                onBlur={ () => alert('blurred!') }
                variant="success" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button label="Button Destructive" variant="destructive" />
        </div>
    </div>


##### button shaded

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Button
                shaded
                label="Button Brand"
                onClick={() => alert('clicked!')}
                variant="brand" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button
                shaded
                label="Button Success"
                onBlur={ () => alert('blurred!') }
                variant="success" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button
                shaded
                label="Button Destructive"
                variant="destructive" />
        </div>
    </div>


##### buttons with icon
    // more details about how to use react-font-awesome
    // visit https://github.com/FortAwesome/react-fontawesome
    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCoffee,
        faCheck,
        faArrowRight,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Button variant="base">
                <FontAwesomeIcon icon={faCoffee} className="rainbow-m-right_medium" />
                Button base
            </Button>
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button
                variant="neutral">
                Button with right icon
                <FontAwesomeIcon icon={faCheck} className="rainbow-m-left_medium" />
            </Button>
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button
                variant="brand">
                Brand button with right icon
                <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_medium" />
            </Button>
        </div>
    </div>


##### disabled buttons

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Button label="Button Base Disabled" disabled />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button label="Button Neutral Disabled" variant="neutral" disabled />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button label="Button Brand Disabled" variant="brand" disabled />
        </div>
    </div>


##### buttons inverse

    // more details about how to use react-font-awesome
    // visit https://github.com/FortAwesome/react-fontawesome
    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faArrowRight } = require('@fortawesome/free-solid-svg-icons');

    const buttonsContainerStyles = {
        backgroundColor: '#061c3f',
        borderRadius: '0.875rem',
    };

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap" style={buttonsContainerStyles}>
        <div className="rainbow-m-horizontal_medium">
            <Button label="Button Inverse" variant="inverse" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button
                variant="border-inverse">
                Button Inverse with icon
                <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_medium" />
            </Button>
        </div>
    </div>


##### buttons loadings

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Button isLoading label="Button Outline Brand" variant="outline-brand" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button isLoading label="Button Neutral" variant="neutral" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Button isLoading label="Button Brand" variant="brand" />
        </div>
    </div>
