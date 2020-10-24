##### RenderIf base use case

```js
import React, { useState, useEffect, useRef } from 'react';
import { RadioButtonGroup, Notification, RenderIf } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    position: relative;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledHeaderContainer = styled.div`
    width: 60%;
`;

const StyledHeaderText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    font-family: Lato;
    font-size: 18px;
`;

const StyledNotificationTitle = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    font-family: Lato;
    font-size: 14px;
    font-weight: 600;
`;

const StyledNotificationContent = styled.div`
    font-family: Lato;
    font-size: 14px;
    line-height: 1.29;
`;

const StyledMessage = styled.div`
    width: 290px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMessageTitle = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
`;

const StyledMessageContent = styled.div`
    margin-top: 6px;
    font-family: Lato;
    font-size: 14px;
    line-height: 1.29;
`;

const StyledImageContainer = styled.div`
    position: absolute;
    top: 33%;
    right: 23%;
    width: 18%;
    height: auto;
`;

const options = [{ value: 'true', label: 'True' }, { value: 'false', label: 'False' }];

function RenderIfExample() {
    const [showNotification, setShowNotification] = useState('false');
    const [isVisible, setIsVisible] = useState(false);
    const [showArrow, setShowArrow] = useState(false);
    const ref = useRef(null);

    const handleOnChange = event => {
        setShowNotification(event.target.value);
    };

    const resizeListener = () => {
        if (ref.current.offsetWidth > 860) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    };

    useEffect(() => {
        if (showNotification === 'true') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        resizeListener();
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [showNotification]);

    return (
        <StyledContainer className="rainbow-p-top_x-large" ref={ref}>
            <StyledHeaderContainer className="rainbow-align-content_space-between">
                <StyledHeaderText>Show Notification?</StyledHeaderText>
                <RadioButtonGroup
                    options={options}
                    size="small"
                    value={showNotification}
                    onChange={handleOnChange}
                />
            </StyledHeaderContainer>
            <RenderIf isTrue={isVisible}>
                <div className="rainbow-m-top_x-large">
                    <Notification
                        title={
                            <StyledNotificationTitle>Success Notification.</StyledNotificationTitle>
                        }
                        description={
                            <StyledNotificationContent className="rainbow-m-top_x-small rainbow-color_gray-4">
                                One of our team members will contact you shortly.
                            </StyledNotificationContent>
                        }
                        icon="success"
                    />
                </div>
            </RenderIf>
            <RenderIf isTrue={!isVisible}>
                <StyledMessage className="rainbow-m-top_x-large">
                    <StyledMessageTitle>This is false</StyledMessageTitle>
                    <StyledMessageContent className="rainbow-color_gray-4">
                        There are no notifications to show, if you want to see the notifications
                        switch to true.
                    </StyledMessageContent>
                </StyledMessage>
                <RenderIf isTrue={showArrow}>
                    <StyledImageContainer>
                        <img src="images/designsImages/arrow.svg" alt="dashed lines arrow" />
                    </StyledImageContainer>
                </RenderIf>
            </RenderIf>
        </StyledContainer>
    );
}

    <div className="rainbow-m-around_large">
        <RenderIfExample />
    </div>;
```
