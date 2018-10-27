ReCaptcha base:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faUser, faEnvelope } = require('@fortawesome/free-solid-svg-icons');

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <form>
            <div className="rainbow-p-around_x-large rainbow-p-around_x-large rainbow-flex rainbow-flex_column">
                <div className="rainbow-flex rainbow-justify_spread">
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        icon={<FontAwesomeIcon icon={faUser} style={{ color: '#01b6f5' }} />}
                        style={{ width: '45%' }} />
                    <Input
                        label="Email"
                        placeholder="enter your email"
                        icon={<FontAwesomeIcon icon={faEnvelope} style={{ color: '#01b6f5' }} />}
                        style={{ width: '45%' }} />
                </div>
                <Textarea label="Message" placeholder="Enter a message" className="rainbow-m-top_large" />
                <div className="rainbow-m-top_medium rainbow-flex rainbow-align-content_space-between">
                    <ReCaptcha
                        value="6LdV7HUUAAAAAEilnevmAITXH2F2aS-W3200nJH1"
                        onChange={(v) => console.log(v)} />
                    <Button label="Send" variant="brand" />
                </div>
            </div>
        </form>
    </div>

ReCaptcha dark:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faUser, faEnvelope } = require('@fortawesome/free-solid-svg-icons');

    <div>
        <GlobalHeader src="images/user/user3.jpg" />
        <form>
            <div className="rainbow-p-around_x-large rainbow-p-around_x-large rainbow-flex rainbow-flex_column">
                <div className="rainbow-flex rainbow-justify_spread">
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        icon={<FontAwesomeIcon icon={faUser} style={{ color: '#01b6f5' }} />}
                        style={{ width: '45%' }} />
                    <Input
                        label="Email"
                        placeholder="enter your email"
                        icon={<FontAwesomeIcon icon={faEnvelope} style={{ color: '#01b6f5' }} />}
                        style={{ width: '45%' }} />
                </div>
                <Textarea label="Message" placeholder="Enter a message" className="rainbow-m-top_large" />
                <div className="rainbow-m-top_medium rainbow-flex rainbow-align-content_space-between">
                    <ReCaptcha
                        value="6LdV7HUUAAAAAEilnevmAITXH2F2aS-W3200nJH1"
                        theme="dark"
                        onChange={(v) => console.log(v)} />
                    <Button label="Send" variant="brand" />
                </div>
            </div>
        </form>
    </div>
