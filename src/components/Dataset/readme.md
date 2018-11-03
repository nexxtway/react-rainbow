Dataset base:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <div className="rainbow-align-content_center">
            <Chart labels={['A', 'B', 'C', 'D']} type="line">
                <Dataset title="Dataset 1" values={[23,45,123,56]} backgroundColor={'#1de9b6'} />
                <Dataset title="Dataset 2" values={[66,100,30,156]} backgroundColor={'#01b6f5'} />
            </Chart>
        </div>
    </div>

