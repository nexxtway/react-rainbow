##### ProgressCircular

    function ProgressCircularInAction({ variant }) {
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
            <ProgressCircular variant={variant} value={percent} />
        );
    }

    <div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small">
                <Card>
                    <ProgressCircularInAction variant="warning" />
                </Card>
            </div>
            <div className="rainbow-p-horizontal_small">
                <Card>
                    <ProgressCircularInAction />
                </Card>
            </div>
            <div className="rainbow-p-horizontal_small">
                <Card>
                    <ProgressCircularInAction variant="error" />
                </Card>
            </div>
        </div>
    </div>


##### ProgressCircular variants

    const inputContainerStyles = {
        width: '200px',
    };

    const labelStyle = { fontSize: '1rem' };

    <div className="rainbow-m-around_xx-large rainbow-align-content_center rainbow-flex_column">
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-color_brand" style={labelStyle}>brand</span>
                </div>
            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" variant="success" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-color_success" style={labelStyle}>success</span>
                </div>
            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" variant="warning" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-color_yellow" style={labelStyle}>warning</span>
                </div>
            </div>
            <div className="rainbow-p-horizonta_small" style={inputContainerStyles}>
                <div className="rainbow-align-content_center">
                    <ProgressCircular value="60" variant="error" />
                </div>
                <div className="rainbow-align-content_center">
                    <span className="rainbow-color_error" style={labelStyle}>error</span>
                </div>
            </div>
        </div>
    </div>
