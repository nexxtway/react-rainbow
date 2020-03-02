##### Drawer example:

```js
import React from 'react';
import { Button, Drawer } from 'react-rainbow-components';

const initialState = {
    isOpenTop: false,
    isOpenRight: false,
    isOpenBottom: false,
    isOpenLeft: false,
};

<div
    className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
>
    <div className="rainbow-align-content_center rainbow-p-medium">
        <Button
            disabled
            className="rainbow-m-around_medium"
            label="Open Top"
            onClick={() => setState({
                isOpenTop: true,
            })}
        />
    </div>
    <div className="rainbow-flex rainbow-flex_row">
        <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
            <Button
                className="rainbow-m-around_medium"
                label="Open Left"
                onClick={() => setState({
                    isOpenLeft: true,
                })}
            />
        </div>
        <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
            <Button
                className="rainbow-m-around_medium"
                label="Open Right"
                onClick={() => setState({
                    isOpenRight: true,
                })}
            />
        </div>
    </div>
    <div className="rainbow-align-content_center rainbow-p-medium">
        <Button
            disabled
            className="rainbow-m-around_medium"
            label="Open Bottom"
            onClick={() => setState({
                isOpenBottom: true,
            })}
        />
    </div>
    <Drawer
        id="drawer-right-1"
        header="This is a drawer"
        isOpen={state.isOpenRight}
        onRequestClose={() => setState({ isOpenRight : false })}
    />
    <Drawer
        id="drawer-left-1"
        header="This is a drawer"
        isOpen={state.isOpenLeft}
        slideFrom="left"
        onRequestClose={() => setState({ isOpenLeft : false })}
    />
</div>
```

##### Drawer:

```js
import React from 'react';
import {
    Button,
    Avatar,
    Drawer,
    DatePicker,
    Input,
    GoogleAddressLookup,
    Select,
} from 'react-rainbow-components';
import styled from 'styled-components';

const StyledExampleHeader = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    font-family: 'Lato';
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.19px;
    text-align: center;
    color: ${props => props.text.main};
`;

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    text-align: center;
    color: ${props => props.text.main};
`;

const StyledAvatar = styled(Avatar)`
    width: 100px;
    height: 100px;
    box-shadow: 0 2px 4px 0 rgba(6, 28, 63, 0.3);
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const NameLabel = styled.label.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    color: ${props => props.palette.text.main};
    display: block;
`;

const EmailLabel = styled.span.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    color: ${props => props.palette.text.label};
    display: block;
`;

const DetailsButton = styled(Button)
`
    font-size: 0.85rem;
`;

const ConctactContainer = styled.div`
    width: max-content;
`;

const StyledDrawer = styled(Drawer)
`
    width: 320px;
    min-width: 320px;
`;

const FormNameLabel = styled.label.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 24px;
    font-weight: 900;
    line-height: normal;
    color: ${props => props.palette.text.main};
    display: block;
`;

const FormEmailLabel = styled.span.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.06;
    color: ${props => props.palette.text.header};
    display: block;
`;

const StyledFooterButton = styled(Button)
`
    width: 100px;
`;

const closeDrawer = () => setState({ isOpen : false });

function Contact({ avatar, name, email, onShowDetails }) {
    return (
        <ConctactContainer className="rainbow-m-around_large">
            <div className="rainbow-p-around_medium">
                <StyledAvatar
                    src={avatar}
                    assistiveText={name}
                    title={name}
                />
            </div>
            <NameLabel className="rainbow-m-top_small">
                {name}
            </NameLabel>
            <EmailLabel className="rainbow-m-top_x-small">
                {email}
            </EmailLabel>
            <div className="rainbow-flex rainbow-justify_space-around">
                <DetailsButton
                    variant="base"
                    label="Details"
                    onClick={onShowDetails}
                />
            </div>
        </ConctactContainer>
    );
}

function EditContactForm({ contactInfo }) {
    if (!contactInfo) return null;

    return (
        <div className="rainbow-p-around_small rainbow-flex rainbow-flex_wrap  rainbow-align-content_center">
            <div className="rainbow-flex rainbow-flex_wrap">
                <StyledAvatar
                    src={contactInfo.avatar}
                    assistiveText={contactInfo.name}
                    title={contactInfo.name}
                    className="rainbow-m-right_medium"
                />
                <div className="rainbow-flex_column">
                    <FormNameLabel className="rainbow-m-top_small">
                        {contactInfo.name}
                    </FormNameLabel>
                    <FormEmailLabel className="rainbow-m-top_xx-small">
                        {contactInfo.email}
                    </FormEmailLabel>
                </div>
            </div>
            <div className=" rainbow-flex_column">
                <DatePicker
                    placeholder="mm/dd/yyyy"
                    label="Birthday"
                    className="rainbow-m-top_large"
                />
                <Input
                    placeholder="Enter company name"
                    label="Company"
                    className="rainbow-m-top_large"
                />
                <GoogleAddressLookup
                    placeholder="Enter location"
                    label="Address"
                    className="rainbow-m-top_large"
                />
                <Select
                    label="Country"
                    className="rainbow-m-top_large"
                />
                <Select
                    label="Role"
                    className="rainbow-m-top_large"
                />
                <Select
                    label="Skills"
                    className="rainbow-m-top_large"
                />
            </div>
        </div>
    );
}

function DrawerFooter() {
    return (
        <div className="rainbow-p-around_small rainbow-flex  rainbow-align-content_center">
            <div className="rainbow-p-around_small">
                <StyledFooterButton
                    label="Cancel"
                    onClick={() => closeDrawer()}
                />
            </div>
            <div className="rainbow-p-around_small">
                <StyledFooterButton
                    variant="brand"
                    label="Save"
                    onClick={() => closeDrawer()}
                />
            </div>
        </div>
    )
}

const users = [{
    avatar: 'images/user/avatar-2.svg',
    name: 'Jane Doe',
    email: 'jane@gmail.com',
}, {
    avatar: 'images/user/avatar-4.svg',
    name: 'John Doe',
    email: 'john@gmail.com',
}, {
    avatar: 'images/user/avatar-5.svg',
    name: 'Ana Doe',
    email: 'ana@gmail.com',
}];

const initialState = { isOpen: false, info: null };

<div className="rainbow-m-around_xx-large rainbow-flex_column rainbow-align-content_center">
    <StyledExampleHeader className="rainbow-p-bottom_small">Contributors</StyledExampleHeader>
    <div className="rainbow-flex rainbow-flex_wrap">
        {users.map((user, index) => {
            const key = `contact-${index}`;
            return (
                <Contact
                    key={key}
                    name={user.name}
                    email={user.email}
                    avatar={user.avatar}
                    onShowDetails={() => setState({
                        isOpen: true,
                        info: user,
                    })}
                />
            );
        })}
    </div>
    <StyledDrawer
        id="drawer-3"
        header="Edit Information"
        footer={<DrawerFooter />}
        isOpen={state.isOpen}
        onRequestClose={() => closeDrawer()}
    >
        <EditContactForm contactInfo={state.info} />
    </StyledDrawer>
</div>
```
