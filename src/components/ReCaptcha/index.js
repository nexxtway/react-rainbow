import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import withReduxForm from '../../libs/hocs/withReduxForm';
import getUrl from './get-url';
import ReCaptchaWrapper from './wrapper';

class ReCaptcha extends Component {
    componentDidMount() {
        const { lang } = this.props;
        this.ReCaptchaComponent = scriptLoader(getUrl(lang))(ReCaptchaWrapper);
        this.reloadComponent();
    }

    reloadComponent() {
        this.setState({ key: Date.now() });
    }

    render() {
        if (this.ReCaptchaComponent) {
            const ReCaptchaComponent = this.ReCaptchaComponent;
            return <ReCaptchaComponent {...this.props} />;
        }
        return null;
    }
}

ReCaptcha.propTypes = {
    /** Specifies the site key for the recaptcha. */
    value: PropTypes.string.isRequired,
    /** Forces the widget to render in a specific language.
     * Auto-detects the user's language if unspecified. */
    lang: PropTypes.string,
    /** The color theme of the widget. */
    theme: PropTypes.oneOf(['light', 'dark']),
    /** The size of the widget. */
    size: PropTypes.oneOf(['normal', 'compact']),
    /** The tabindex of the widget and challenge.
     * If other elements in your page use tabindex,
     * it should be set to make user navigation easier. */
    tabIndex: PropTypes.number,
    /** Specifies that the recaptcha must be completed before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    /** The action triggered when the value of the recaptcha changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

ReCaptcha.defaultProps = {
    lang: undefined,
    theme: 'light',
    size: 'normal',
    tabIndex: 0,
    error: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};

export default withReduxForm(ReCaptcha);
