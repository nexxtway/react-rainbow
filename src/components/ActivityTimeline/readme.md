Basic example:

    <div className="rainbow-m-around_xx-large">
        <ActivityTimeline>
            <TimelineMarker
                label="Mobile conversation on Monday"
                description="When the user interacts with the button to open the details section, aria-expanded on the button should be true and aria-hidden on the details section should be false. When the user interacts with the button to close the details section, aria-expanded on the button should be false and aria-hidden on the details section should be true."
            />
            <TimelineMarker
                label="Mobile conversation on Monday"
                description="When the user interacts with the button to open the details section, aria-expanded on the button should be true and aria-hidden on the details section should be false. When the user interacts with the button to close the details section, aria-expanded on the button should be false and aria-hidden on the details section should be true."
            >
                <Card title="Inside Content">
                    <img
                        src="images/illustrations/Illustration-rainbow-1.svg"
                        className="rainbow-p-vertical_x-large rainbow-m_auto rainbow-align-content_center"
                        alt="landscape with rainbows, birds and colorful balloons" />
                </Card>
            </TimelineMarker>
            <TimelineMarker label="Mobile conversation on Monday"/>
        </ActivityTimeline>
    </div>
