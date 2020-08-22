##### RenderIf base use case

```js
import React, { useState, useEffect } from 'react';
import { RadioButtonGroup, Card, Avatar, ButtonIcon, RenderIf } from 'react-rainbow-components';
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

const StyledCard = styled(Card)`
    width: 320px;
    height: 105px;
`;

const StyledCardTitle = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    font-family: Lato;
    font-size: 14px;
    font-weight: 500;
`;

const StyledCardContent = styled.div`
    font-family: Lato;
    font-size: 14px;
    line-height: 1.29;
    padding-left: 3.25rem;
    padding-right: 1.5rem;
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
    font-weight: 500;
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

    useEffect(() => {
        if (showNotification === 'true') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [showNotification]);

    const handleOnChange = event => {
        setShowNotification(event.target.value);
    };

    return (
        <StyledContainer className="rainbow-p-top_x-large">
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
                    <StyledCard
                        icon={
                            <Avatar
                                icon={<CheckmarkIcon />}
                                size="small"
                                className="rainbow-background-color_success"
                            />
                        }
                        title={<StyledCardTitle>Success Notification.</StyledCardTitle>}
                        actions={<ButtonIcon icon={<CloseIcon />} size="small" />}
                    >
                        <StyledCardContent className="rainbow-color_gray-4">
                            One of our team members will contact you shortly.
                        </StyledCardContent>
                    </StyledCard>
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
                <StyledImageContainer>
                    <img src="images/designsImages/arrow.svg" alt="dashed lines arrow" />
                </StyledImageContainer>
            </RenderIf>
        </StyledContainer>
    );
}

<div className="rainbow-m-around_large">
    <RenderIfExample />
</div>;
```
