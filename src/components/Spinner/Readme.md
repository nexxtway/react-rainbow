##### list loading using spinner - base - medium

    <div>
       <GlobalHeader src="images/avatar2.jpg" />
            <div className="rainbow-p-vertical_xx-large">
                <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
                    <Spinner size="large" />
                </div>
            </div>
    </div>


##### full screen loading using spinner - brand - large

     const ContainerStyles = {
        borderRadius: '0.875rem',
    };

    <div className="rainbow-background-color_white rainbow-align-content_center rainbow-position_relative rainbow-p-vertical_xx-large" style={ContainerStyles}>
        <Spinner variant="brand" size="medium" />
        <h1 className="rainbow-color_brand rainbow-font-size-text_medium rainbow-p-top_xx-large rainbow-m-top_xx-large rainbow-m-bottom_large">Loading…</h1>
    </div>

##### lazy loading using spinner - base - small

    const spinner = (
        <div className="rainbow-align-content_center">
            <div className="rainbow-position_relative">
                <Spinner size="small" variant="inverse" />
            </div>
            <h1 className="rainbow-font-size-text_medium rainbow-m-left_large rainbow-color_gray-4">Loading…</h1>
        </div>
    );
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_large">
        <Card
            title="Tasks"
            footer={spinner}
            actions={<Button variant="neutral" label="Add" />} >
                <div className="rainbow-p-vertical_xx-large" />
        </Card>
    </div>
