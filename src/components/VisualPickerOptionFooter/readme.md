##### VisualPickerOptionFooter base:

    const iconStyles = { width: 50, height: 50 };
    <div className="rainbow-align-content_center rainbow-m-around_xx-large">
        <VisualPickerOption
            footer={
                <VisualPickerOptionFooter
                    label="Launch your App"
                    description="Start Now" />
            }>
            <StartupIcon style={iconStyles} />
        </VisualPickerOption>
    </div>
