Dataset:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-around_xx-large">
        <div className="rainbow-align-content_center">
            <Chart labels={['A', 'B', 'C', 'D']} type="line" className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large">
                <Dataset title="Dataset 1" values={[23,45,123,56]} backgroundColor="#1de9b6" borderColor="#1de9b6" />
                <Dataset title="Dataset 2" values={[66,100,30,156]} backgroundColor="#01b6f5" borderColor="#01b6f5" />
            </Chart>
        </div>
    </div>

