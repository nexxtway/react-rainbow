##### recaptcha base

```js
import React from 'react';
import { ReCaptcha, Input, Textarea, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const inputStyles = { width: '48%' };
const inputIconStyles = { color: '#01b6f5' };
const titleStyles = { textAlign: 'center' };

class ReCaptchaExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: undefined,
            userNameError: undefined,
            email: undefined,
            emailError: undefined,
            message: undefined,
            messageError: undefined,
            recaptcha: undefined,
            recaptchaError: undefined,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleReCaptchaSuccess = this.handleReCaptchaSuccess.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reCaptchaRef = React.createRef();
    }

    handleUserNameChange(event) {
        const userName = event.target.value;
        let error;
        if (userName === undefined || userName === '') {
            error = 'the name is required';
        }
        this.setState({ userName: event.target.value, userNameError: error });
    }

    handleEmailChange(event) {
        const email = event.target.value;
        let error;
        if (email === undefined || email === '') {
            error = 'the email is required';
        }
        this.setState({ email: event.target.value, emailError: error });
    }

    handleMessageChange(event) {
        const message = event.target.value;
        let error;
        if (message === undefined || message === '') {
            error = 'the message is required';
        }
        this.setState({ message: event.target.value, messageError: error });
    }

    handleReCaptchaSuccess(token) {
        let error;
        if (token === undefined) {
            error = 'the recaptcha needs to be completed';
        }
        this.setState({ recaptcha: token, recaptchaError: error });
    }

    handleSubmit(event) {
        event.preventDefault();
        const error = {
            userNameError: undefined,
            emailError: undefined,
            messageError: undefined,
            recaptchaError: undefined,
        };
        let reload = false;
        const { userName, email, message, recaptcha } = this.state;
        if (userName === undefined || userName === '') {
            error.userNameError = 'the name is required';
            reload = true;
        }
        if (email === undefined || email === '') {
            error.emailError = 'the email is required';
            reload = true;
        }
        if (message === undefined || message === '') {
            error.messageError = 'the message is required';
            reload = true;
        }
        if (recaptcha === undefined) {
            error.recaptchaError = 'the recaptcha needs to be completed';
            reload = true;
        }
        if (reload) {
            this.setState({ ...error });
        } else {
            alert(JSON.stringify(this.state));
            this.reCaptchaRef.current.reset();
        }
    }

    render() {
        const {
            userName,
            userNameError,
            email,
            emailError,
            message,
            messageError,
            recaptchaError,
        } = this.state;

        return (
            <div>
                <GlobalHeader src="images/user/user3.jpg" />
                <form onSubmit={this.handleSubmit} className="rainbow-p-around_xx-large">
                    <h1
                        className="rainbow-color_brand rainbow-font-size-heading_medium rainbow-p-bottom_large"
                        style={titleStyles}
                    >
                        Contact us
                    </h1>
                    <div className="rainbow-flex rainbow-justify_spread">
                        <Input
                            label="Name"
                            placeholder="Enter your name"
                            value={userName}
                            error={userNameError}
                            onChange={this.handleUserNameChange}
                            icon={<FontAwesomeIcon icon={faUser} style={inputIconStyles} />}
                            style={inputStyles}
                        />
                        <Input
                            label="Email"
                            placeholder="enter your email"
                            value={email}
                            error={emailError}
                            onChange={this.handleEmailChange}
                            icon={<FontAwesomeIcon icon={faEnvelope} style={inputIconStyles} />}
                            style={inputStyles}
                        />
                    </div>
                    <Textarea
                        label="Message"
                        placeholder="Enter a message"
                        value={message}
                        error={messageError}
                        onChange={this.handleMessageChange}
                        className="rainbow-m-vertical_large"
                    />
                    <div className="rainbow-flex rainbow-align-content_space-between">
                        <ReCaptcha
                            siteKey={LIBRARY_RECAPTCHA_APIKEY}
                            ref={this.reCaptchaRef} 
                            error={recaptchaError}
                            onChange={this.handleReCaptchaSuccess}
                        />
                        <Button label="Send" variant="brand" type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

<ReCaptchaExample />;
```

##### dark recaptcha with redux form

```js
import React, {useRef} from 'react';
import { ReCaptcha, Input, Textarea, Button } from 'react-rainbow-components';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const inputStyles = { width: '48%' };
const inputIconStyles = { color: '#01b6f5' };
const titleStyles = { textAlign: 'center' };

function SimpleForm(props) {
    const { handleSubmit, onSubmit, reset } = props;

    const reCaptchaRef = useRef();

    const submit = values => {
        onSubmit(values);
        reCaptchaRef.current.getRenderedComponent().reset()
        reset();
    };

    return (
        <form className="rainbow-p-around_xx-large" noValidate onSubmit={handleSubmit(submit)}>
            <h1
                className="rainbow-color_brand rainbow-font-size-heading_medium rainbow-p-bottom_large"
                style={titleStyles}
            >
                Contact us
            </h1>
            <div className="rainbow-flex rainbow-justify_spread">
                <Field
                    component={Input}
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    icon={<FontAwesomeIcon icon={faUser} style={inputIconStyles} />}
                    style={inputStyles}
                />

                <Field
                    component={Input}
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    icon={<FontAwesomeIcon icon={faEnvelope} style={inputIconStyles} />}
                    style={inputStyles}
                />
            </div>
            <Field
                component={Textarea}
                name="message"
                label="Message"
                placeholder="Enter a message"
                className="rainbow-m-vertical_large"
            />

            <div className="rainbow-flex rainbow-align-content_space-between">
                <Field
                    component={ReCaptcha}
                    ref={reCaptchaRef}
                    withRef
                    name="recaptcha"
                    theme="dark"
                    siteKey={LIBRARY_RECAPTCHA_APIKEY}
                />

                <Button label="Send" variant="brand" type="submit" />
            </div>
        </form>
    );
}

function validate(values) {
    const { name, email, message, recaptcha } = values;
    const errors = {};

    if (!name) {
        errors.name = 'Looks like you forgot your name';
    }
    if (!email) {
        errors.email = 'Looks like you forgot your email';
    }
    if (!message) {
        errors.message = 'Looks like you forgot leave a message';
    }
    if (!recaptcha) {
        errors.recaptcha = 'Are you a robot?';
    }

    return errors;
}

const Form = reduxForm({
    form: 'contact-us-form',
    validate,
    touchOnBlur: false,
})(SimpleForm);

function ReCaptchaExample() {
    return (
        <div>
            <GlobalHeader src="images/user/user3.jpg" />
            <Form onSubmit={values => alert(JSON.stringify(values))} />
        </div>
    );
}

<ReCaptchaExample />;
```
