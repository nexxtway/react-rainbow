/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Textarea from '../../../src/components/Textarea';
import PhoneInput from '../../../src/components/PhoneInput';
import ReCaptcha from '../../../src/components/ReCaptcha';
import ArrowRight from '../../exampleComponents/Icons/arrowRight';
import EmailCustom from '../../exampleComponents/Icons/emailCustom';
import Avatar from '../../exampleComponents/Icons/avatar';
import {
    Dropdown,
    FormTitle,
    FormSubtitle,
    FormContainer,
    SmallInput,
    Row,
    Footer,
    SendButton,
    NameInput,
    EmailInput,
} from './styled';

function ContactusForm() {
    const [phone, setPhone] = useState();

    return (
        <Dropdown>
            <FormTitle>Need Custom Work?</FormTitle>
            <FormSubtitle>Get in touch with us.</FormSubtitle>
            <FormContainer>
                <Row>
                    <NameInput
                        label="First Name"
                        required
                        placeholder="Enter your first name"
                        icon={<Avatar />}
                    />
                    <NameInput
                        label="Last Name"
                        required
                        placeholder="Enter your last name"
                        icon={<Avatar />}
                    />
                </Row>
                <Row>
                    <EmailInput
                        label="Email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        icon={<EmailCustom />}
                    />
                    <SmallInput
                        as={PhoneInput}
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        onChange={setPhone}
                        value={phone}
                    />
                </Row>
                <Row>
                    <SmallInput label="Company Name" placeholder="Enter your company name" />
                    <SmallInput label="Job Title" placeholder="Enter your job title" />
                </Row>
                <Textarea
                    className="rainbow-m-bottom_large"
                    label="Message"
                    placeholder="What else should we know?"
                />
                <Footer>
                    <ReCaptcha withRef name="recaptcha" siteKey={LIBRARY_RECAPTCHA_APIKEY} />
                    <SendButton variant="brand">
                        Send
                        <ArrowRight className="rainbow-m-left_small" />
                    </SendButton>
                </Footer>
            </FormContainer>
        </Dropdown>
    );
}

export default ContactusForm;
