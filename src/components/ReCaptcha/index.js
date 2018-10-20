import React from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import withReduxForm from '../../libs/hocs/withReduxForm';
import ReCaptchaWrapper from './wrapper';

function ReCaptcha(props) {
    const { lang, ...rest } = props;

    const getUrl = () => {
        if (lang) {
            return `https://www.google.com/recaptcha/api.js?render=explicit&hl=${lang}`;
        }
        return 'https://www.google.com/recaptcha/api.js?render=explicit';
    };

    const ReCaptchaComponent = scriptLoader(getUrl())(ReCaptchaWrapper);
    return <ReCaptchaComponent {...rest} />;
}

ReCaptcha.propTypes = {
    /** Specifies the site key for the recaptcha. */
    value: PropTypes.string,
    /** Forces the widget to render in a specific language.
     * Auto-detects the user's language if unspecified. */
    lang: PropTypes.string,
    /** The color theme of the widget. */
    theme: PropTypes.oneOf(['light', 'dark']),
    /** The size of the widget. */
    size: PropTypes.oneOf(['normal', 'compact']),
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
    value: undefined,
    lang: undefined,
    theme: 'light',
    size: 'normal',
    error: undefined,
    onChange: () => {},
    className: undefined,
    style: {},
};

export default withReduxForm(ReCaptcha);
