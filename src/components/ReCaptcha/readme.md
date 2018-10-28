ReCaptcha base:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faUser, faEnvelope } = require('@fortawesome/free-solid-svg-icons');

    const inputStyles = { width: '45%' };
    const inputIconStyles = { color: '#01b6f5' };
    const spacerStyles = { flex: '1' };

    class ReCaptchaExample extends React.Component {
        constructor(props) {
            super(props);
            this.data = {
                userName: undefined,
                email: undefined,
                message: undefined,
                recaptcha: undefined,
            };

            this.state = {
                error: {
                    userName: undefined,
                    email: undefined,
                    message: undefined,
                    recaptcha: undefined,
                }
            };

            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleMessageChange = this.handleMessageChange.bind(this);
            this.handleUserNameChange = this.handleUserNameChange.bind(this);
            this.handleReCaptchaSuccess = this.handleReCaptchaSuccess.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleUserNameChange(event) {
            this.data.userName = event.target.value;
        }

        handleEmailChange(event) {
            this.data.email = event.target.value;
        }

        handleMessageChange(event) {
            this.data.message = event.target.value;
        }

        handleReCaptchaSuccess(token) {
           this.data.recaptcha = event.target.value;
        }

        handleSubmit(event) {
            event.preventDefault();
            const error = {
                userName: undefined,
                email: undefined,
                message: undefined,
                recaptcha: undefined,
            };
            let reload = false;
            const { userName, email, message, recaptcha } = this.data;
            if (userName === undefined) {
                error.userName = 'the name is required';
                reload = true;
            } if (email === undefined) {
                error.email = 'the email is required';
                reload = true;
            } if (message === undefined) {
                error.message = 'the message is required';
                reload = true;
            } if (recaptcha === undefined) {
                error.recaptcha = 'the recaptcha needs to be completed';
                reload = true;
            } if (reload) {
                this.setState({ error });
            } else {
                alert(JSON.stringify(this.data));
            }
        }

        render() {
            const { userName, email, message } = this.data;
            const {
                userName: userNameError,
                email: emailError,
                message: messageError,
                recaptcha: recaptchaError,
            } = this.state.error;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <form onSubmit={this.handleSubmit}>
                        <div className="rainbow-p-around_x-large rainbow-p-around_x-large rainbow-flex rainbow-flex_column">
                            <div className="rainbow-flex rainbow-justify_spread">
                                <Input
                                    label="Name"
                                    placeholder="Enter your name"
                                    value={userName}
                                    error={userNameError}
                                    onChange={this.handleUserNameChange}
                                    icon={<FontAwesomeIcon icon={faUser} style={inputIconStyles} />}
                                    style={inputStyles} />
                                <Input
                                    label="Email"
                                    placeholder="enter your email"
                                    value={email}
                                    error={emailError}
                                    onChange={this.handleEmailChange}
                                    icon={<FontAwesomeIcon icon={faEnvelope} style={inputIconStyles} />}
                                    style={inputStyles} />
                            </div>
                            <Textarea
                                label="Message"
                                placeholder="Enter a message"
                                value={message}
                                error={messageError}
                                onChange={this.handleMessageChange}
                                className="rainbow-m-top_large" />
                            <div className="rainbow-m-top_medium rainbow-flex rainbow-align-content_space-between">
                                <ReCaptcha
                                    value="6LdV7HUUAAAAAEilnevmAITXH2F2aS-W3200nJH1"
                                    error={recaptchaError}
                                    onChange={this.handleReCaptchaSuccess} />
                                <span style={spacerStyles} />
                                <Button label="Send" variant="brand" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    }

    <ReCaptchaExample />

ReCaptcha dark:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faUser, faEnvelope } = require('@fortawesome/free-solid-svg-icons');

    const inputStyles = { width: '45%' };
    const inputIconStyles = { color: '#01b6f5' };
    const spacerStyles = { flex: '1' };

    class ReCaptchaExample extends React.Component {
        constructor(props) {
            super(props);
            this.data = {
                userName: undefined,
                email: undefined,
                message: undefined,
                recaptcha: undefined,
            };

            this.state = {
                error: {
                    userName: undefined,
                    email: undefined,
                    message: undefined,
                    recaptcha: undefined,
                }
            };

            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleMessageChange = this.handleMessageChange.bind(this);
            this.handleUserNameChange = this.handleUserNameChange.bind(this);
            this.handleReCaptchaSuccess = this.handleReCaptchaSuccess.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleUserNameChange(event) {
            this.data.userName = event.target.value;
        }

        handleEmailChange(event) {
            this.data.email = event.target.value;
        }

        handleMessageChange(event) {
            this.data.message = event.target.value;
        }

        handleReCaptchaSuccess(token) {
           this.data.recaptcha = event.target.value;
        }

        handleSubmit(event) {
            event.preventDefault();
            const error = {
                userName: undefined,
                email: undefined,
                message: undefined,
                recaptcha: undefined,
            };
            let reload = false;
            const { userName, email, message, recaptcha } = this.data;
            if (userName === undefined) {
                error.userName = 'the name is required';
                reload = true;
            } if (email === undefined) {
                error.email = 'the email is required';
                reload = true;
            } if (message === undefined) {
                error.message = 'the message is required';
                reload = true;
            } if (recaptcha === undefined) {
                error.recaptcha = 'the recaptcha needs to be completed';
                reload = true;
            } if (reload) {
                this.setState({ error });
            } else {
                alert(JSON.stringify(this.data));
            }
        }

        render() {
            const { userName, email, message } = this.data;
            const {
                userName: userNameError,
                email: emailError,
                message: messageError,
                recaptcha: recaptchaError,
            } = this.state.error;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <form onSubmit={this.handleSubmit}>
                        <div className="rainbow-p-around_x-large rainbow-p-around_x-large rainbow-flex rainbow-flex_column">
                            <div className="rainbow-flex rainbow-justify_spread">
                                <Input
                                    label="Name"
                                    placeholder="Enter your name"
                                    value={userName}
                                    error={userNameError}
                                    onChange={this.handleUserNameChange}
                                    icon={<FontAwesomeIcon icon={faUser} style={inputIconStyles} />}
                                    style={inputStyles} />
                                <Input
                                    label="Email"
                                    placeholder="enter your email"
                                    value={email}
                                    error={emailError}
                                    onChange={this.handleEmailChange}
                                    icon={<FontAwesomeIcon icon={faEnvelope} style={inputIconStyles} />}
                                    style={inputStyles} />
                            </div>
                            <Textarea
                                label="Message"
                                placeholder="Enter a message"
                                value={message}
                                error={messageError}
                                onChange={this.handleMessageChange}
                                className="rainbow-m-top_large" />
                            <div className="rainbow-m-top_medium rainbow-flex rainbow-align-content_space-between">
                                <ReCaptcha
                                    theme="dark"
                                    value="6LdV7HUUAAAAAEilnevmAITXH2F2aS-W3200nJH1"
                                    error={recaptchaError}
                                    onChange={this.handleReCaptchaSuccess} />
                                <span style={spacerStyles} />
                                <Button label="Send" variant="brand" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    }

    <ReCaptchaExample />
