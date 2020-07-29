/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
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

function ContactusForm(props) {
    const { handleSubmit } = props;
    const [phone, setPhone] = useState();
    const [isLoading, setLoading] = useState(false);

    const onSubmit = async values => {
        // eslint-disable-next-line no-debugger
        debugger;
        setLoading(true);
        const res = await fetch('https://us-central1-nexxtway.cloudfunctions.net/api/contactus', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        if (res.ok) {
            return alert('OK!!');
        }
        return alert('Error!');
    };

    return (
        <Dropdown>
            <FormTitle>Need Custom Work?</FormTitle>
            <FormSubtitle>Get in touch with us.</FormSubtitle>
            <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Field
                        name="firstname"
                        component={NameInput}
                        label="First Name"
                        required
                        placeholder="Enter your first name"
                        icon={<Avatar />}
                    />
                    <Field
                        name="lastname"
                        component={NameInput}
                        label="Last Name"
                        required
                        placeholder="Enter your last name"
                        icon={<Avatar />}
                    />
                </Row>
                <Row>
                    <Field
                        name="email"
                        component={EmailInput}
                        label="Email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        icon={<EmailCustom />}
                    />
                    <Field
                        name="phone"
                        component={SmallInput}
                        as={PhoneInput}
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        onChange={setPhone}
                        value={phone}
                    />
                </Row>
                <Row>
                    <Field
                        name="company"
                        component={SmallInput}
                        label="Company Name"
                        placeholder="Enter your company name"
                    />
                    <Field
                        name="jobtitle"
                        component={SmallInput}
                        label="Job Title"
                        placeholder="Enter your job title"
                    />
                </Row>
                <Field
                    component={Textarea}
                    name="message"
                    className="rainbow-m-bottom_large"
                    label="Message"
                    placeholder="What else should we know?"
                />
                <Footer>
                    <Field
                        name="recaptcha"
                        component={ReCaptcha}
                        siteKey={LIBRARY_RECAPTCHA_APIKEY}
                    />
                    <SendButton variant="brand" isLoading={isLoading} type="submit">
                        Send
                        <ArrowRight className="rainbow-m-left_small" />
                    </SendButton>
                </Footer>
            </FormContainer>
        </Dropdown>
    );
}

const validate = values => {
    const { firstname, lastname, email, message } = values;
    const errors = {};
    if (!firstname) {
        errors.firstname = 'Look like you forget enter your first name';
    }
    if (!lastname) {
        errors.lastname = 'Look like you forget enter your last name';
    }
    if (!email) {
        errors.email = 'Look like you forget enter your email';
    }
    if (!message) {
        errors.message = 'Look like you forget enter a message';
    }
    return errors;
};

ContactusForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'contactUs',
    validate,
})(ContactusForm);
