##### notification base

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_small" />
        <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
            <Notification
                title="Notification title"
                description="This is the Notification description" />
        </div>
    </div>

##### notification with icon

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faGithub } = require('@fortawesome/free-brands-svg-icons');

    const iconContainerStyles = {
        width: '2rem',
        height: '2rem',
    };

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_small" />
        <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
            <Notification
                title="Notification title"
                description="This is the Notification description"
                icon={
                    <span className="rainbow-background-color_purple rainbow-border-radius_circle rainbow-align-content_center" style={iconContainerStyles}>
                        <FontAwesomeIcon icon={faGithub} size="lg" className="rainbow-color_white"/>
                    </span>
                } />
        </div>
    </div>

##### notification with icon variants

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_small" />
        <div className="rainbow-p-right_small rainbow-flex rainbow-flex_column rainbow-align_end">
            <div className="rainbow-p-bottom_x-small">
                <Notification
                    title="Notification with info icon"
                    description="This notification can be used to display information about anything."
                    icon="info" />

            </div>
            <div className="rainbow-p-bottom_x-small">
                <Notification
                    title="Notification with success icon"
                    description="This task was successfully completed."
                    icon="success" />

            </div>
            <div className="rainbow-p-bottom_x-small">
                <Notification
                    title="Notification with warning icon"
                    description="This can be a risky situation."
                    icon="warning" />

            </div>
            <Notification
                title="Notification with error icon"
                description="Alarm, there is a bug in the system."
                icon="error" />

        </div>
    </div>

##### showNotification

    const { NotificationsContainer, showNotification } = require('./');
    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faBell,
        faSlidersH,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_small" />
        <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
            <ButtonGroup>
                <Button variant="neutral" onClick={() => showNotification(<Notification
                    title="Notification with info icon"
                    description="This notification can be used to display information about anything."
                    icon="info" />, { timeout: 2000, })} label="Info" />
                <Button variant="neutral" onClick={() => showNotification(<Notification
                    title="Notification with success icon"
                    description="This task was successfully completed."
                    icon="success" />, { timeout: 2000, })} label="Success" />
                <Button variant="neutral" onClick={() => showNotification(<Notification
                    title="Notification with warning icon"
                    description="This can be a risky situation."
                    icon="warning" />, { timeout: 2000, })} label="Warning"/>
                <Button variant="neutral" onClick={() => showNotification(<Notification
                    title="Notification with error icon"
                    description="Alarm, there is a bug in the system."
                    icon="error" />, { timeout: 2000, priority: true, })} label="Error" />
            </ButtonGroup>
        </div>
        <NotificationsContainer />
    </div>
