##### ProgressCircular

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faCircle } = require('@fortawesome/free-solid-svg-icons');
    const IconStyles = {
        width: 24,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    function ProgressCircularInAction({ title, variant, color }) {
        const [percent, setPercent] = React.useState(60);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setPercent(Math.ceil(Math.random() * 100));
            }, 2000);
            return () => {
                clearInterval(timer);
            };
        }, []);

        return (
            <Card title={
                <div>
                    <h1 className="rainbow-font-size-heading_medium">{title}</h1>
                    <h3 className="rainbow-font-size-heading_small rainbow-color_gray-3">Active users</h3>
                </div>
            }>
                <div className="rainbow-p-around_medium rainbow-p-horizontal_large">
                    <ProgressCircular variant={variant} value={percent} />
                </div>
                <div className="rainbow-p-around_medium">
                    <div className="rainbow-flex rainbow_vertical-stretch">
                        <span style={IconStyles} className={`rainbow-color_${color}`}><FontAwesomeIcon icon={faCircle} /></span>
                        <span className="rainbow-font-size_small">Active Now</span>
                    </div>
                </div>
            </Card>
        );
    }

    <div className="rainbow-m-around_xx-large rainbow-flex_column">
        <div className="rainbow-align-content_center rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small">
                <ProgressCircularInAction title="snapchat" variant="warning" color="yellow" />
            </div>
            <div className="rainbow-p-horizontal_small">
                <ProgressCircularInAction title="twitter" color="brand" />
            </div>
            <div className="rainbow-p-horizontal_small">
                <ProgressCircularInAction title="google" variant="error" color="error" />
            </div>
        </div>
    </div>

##### ProgressCircular variants

    <div className="rainbow-m-around_xx-large">
        <div className="rainbow-align-content_center rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_large">
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-font-size-heading_small rainbow-color_brand">brand</span>
                </div>
            </div>
            <div className="rainbow-p-horizontal_large">
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" variant="success" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-font-size-heading_small rainbow-color_success">success</span>
                </div>
            </div>
            <div className="rainbow-p-horizontal_large">
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" variant="warning" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-font-size-heading_small rainbow-color_yellow">warning</span>
                </div>
            </div>
            <div className="rainbow-p-horizontal_large">
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" variant="error" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-font-size-heading_small rainbow-color_error">error</span>
                </div>
            </div>
        </div>
    </div>
