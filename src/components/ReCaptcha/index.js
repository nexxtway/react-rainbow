import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import withReduxForm from '../../libs/hocs/withReduxForm';
import getUrl from './getUrl';
import ReCaptchaWrapper from './wrapper';

/**
 * The ReCaptcha component is used to protects your website from spam and abuse.
 */
class ReCaptcha extends Component {
    constructor(props) {
        super(props);
        const { lang } = props;
        this.ReCaptchaComponent = scriptLoader(getUrl(lang))(ReCaptchaWrapper);
    }

    reset() {
        if (window.grecaptcha && this.optWidgetID) {
            window.grecaptcha.reset(this.optWidgetID);
        }
    }

    render() {
        const ReCaptchaComponent = this.ReCaptchaComponent;
        return (
            <ReCaptchaComponent
                {...this.props}
                onCreateRecaptcha={optWidgetID => {
                    this.optWidgetID = optWidgetID;
                }}
            />
        );
    }
}

ReCaptcha.propTypes = {
    /** Specifies the site key for the recaptcha. */
    siteKey: PropTypes.string.isRequired,
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
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Specifies that the recaptcha must be completed before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** The action triggered when the value of the recaptcha changes. It receive the
     * recaptcha token when is fired.
     */
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
