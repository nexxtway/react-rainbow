##### button icon base

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCogs,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
        <ButtonIcon size="large" icon={<FontAwesomeIcon icon={faCogs} />} />
        <ButtonIcon size="medium" icon={<FontAwesomeIcon icon={faCogs} />} />
        <ButtonIcon size="small" icon={<FontAwesomeIcon icon={faCogs} />} />
        <ButtonIcon size="x-small" icon={<FontAwesomeIcon icon={faCogs} />} />
        <ButtonIcon size="xx-small" icon={<FontAwesomeIcon icon={faCogs} />} />
    </div>


##### button icon border
    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCoffee,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
        <ButtonIcon variant="border" size="large" icon={<FontAwesomeIcon icon={faCoffee} />} />
        <ButtonIcon variant="border" size="medium" icon={<FontAwesomeIcon icon={faCoffee} />} />
        <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faCoffee} />} />
        <ButtonIcon variant="border" size="x-small" icon={<FontAwesomeIcon icon={faCoffee} />} />
        <ButtonIcon variant="border" size="xx-small" icon={<FontAwesomeIcon icon={faCoffee} />} />
    </div>


##### button icon filled

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCheck,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faCheck} />} />
        <ButtonIcon variant="brand" icon={<FontAwesomeIcon icon={faCheck} />} />
        <ButtonIcon variant="success" icon={<FontAwesomeIcon icon={faCheck} />} />
    </div>

##### button icon shaded

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCheck,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
        <ButtonIcon shaded variant="border" icon={<FontAwesomeIcon icon={faCheck} />} />
        <ButtonIcon shaded variant="border-filled" icon={<FontAwesomeIcon icon={faCheck} />} />
        <ButtonIcon shaded variant="brand" icon={<FontAwesomeIcon icon={faCheck} />} />
        <ButtonIcon shaded variant="success" icon={<FontAwesomeIcon icon={faCheck} />} />
    </div>


##### button icon disabled

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCoffee,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
        <ButtonIcon disabled icon={<FontAwesomeIcon icon={faCoffee} />} />
        <ButtonIcon variant="brand" disabled icon={<FontAwesomeIcon icon={faCoffee} />} />
        <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCoffee} />} />
        <ButtonIcon variant="border" disabled icon={<FontAwesomeIcon icon={faCoffee} />} />
    </div>


##### button icon inverse

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCogs,
    } = require('@fortawesome/free-solid-svg-icons');

    const buttonsIconContainerStyles = {
        backgroundColor: '#16325c',
        borderRadius: '0.25rem',
    };

    <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center" style={buttonsIconContainerStyles}>
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faCogs} />} />
        <ButtonIcon variant="inverse" icon={<FontAwesomeIcon icon={faCogs} />} />
    </div>
