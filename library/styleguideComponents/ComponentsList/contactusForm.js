/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import sendMessage from '../../../src/redux/actions/sendMessage';
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

function ContactUsForm(props) {
    // eslint-disable-next-line no-shadow
    const { sendMessage, handleSubmit, reset, onSuccessMessageSent, closeForm } = props;
    const [isLoading, setLoading] = useState(false);
    const RECAPTCHA_APIKEY = process.env.REACT_APP_RECAPTCHA_KEY;
    const onSubmit = async values => {
        setLoading(true);
        sendMessage(values);
        reset();
        window.grecaptcha.reset();
    };

    useEffect(() => {
        setLoading(false);
        if (closeForm === 'Your message has been sent successfully.') {
            onSuccessMessageSent();
        }
    }, [closeForm, onSuccessMessageSent]);

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
                        disabled={isLoading}
                    />
                    <Field
                        name="lastname"
                        component={NameInput}
                        label="Last Name"
                        required
                        placeholder="Enter your last name"
                        icon={<Avatar />}
                        disabled={isLoading}
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
                        disabled={isLoading}
                    />
                    <Field
                        name="phone"
                        component={SmallInput}
                        as={PhoneInput}
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        disabled={isLoading}
                    />
                </Row>
                <Row>
                    <Field
                        name="company"
                        component={SmallInput}
                        label="Company Name"
                        placeholder="Enter your company name"
                        disabled={isLoading}
                    />
                    <Field
                        name="jobtitle"
                        component={SmallInput}
                        label="Job Title"
                        placeholder="Enter your job title"
                        disabled={isLoading}
                    />
                </Row>
                <Field
                    required
                    component={Textarea}
                    name="message"
                    className="rainbow-m-bottom_large"
                    label="Message"
                    placeholder="What else should we know?"
                    disabled={isLoading}
                />
                <Footer>
                    <Field name="recaptcha" component={ReCaptcha} siteKey={RECAPTCHA_APIKEY} />
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
    const { firstname, lastname, email, message, recaptcha } = values;
    const errors = {};
    if (!firstname) {
        errors.firstname = 'Looks like you forgot your first name.';
    }
    if (!lastname) {
        errors.lastname = 'Looks like you forgot your last name.';
    }
    if (!email) {
        errors.email = 'Looks like you forgot your email.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email.';
    }
    if (!message) {
        errors.message = 'Looks like you forgot leave a message.';
    }
    if (!recaptcha) {
        errors.recaptcha = 'Are you a robot?';
    }
    // eslint-disable-next-line no-debugger
    return errors;
};

ContactUsForm.propTypes = {
    closeForm: PropTypes.string,
    sendMessage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    onSuccessMessageSent: PropTypes.func,
};

ContactUsForm.defaultProps = {
    closeForm: null,
    handleSubmit: () => {},
    reset: () => {},
    onSuccessMessageSent: () => {},
};

const mapStateToProps = state => {
    return { contactUs: state.contactUs, closeForm: state.message.message };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            sendMessage,
        },
        dispatch,
    );
};

const ReduxFormContactUs = reduxForm({
    form: 'contactUs',
    validate,
    touchOnBlur: false,
})(ContactUsForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ReduxFormContactUs);
