import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import './styles.css';

export default class ReCaptchaLoader extends Component {

    componentDidMount() {
        window.grecaptcha.ready(() => this.renderReCaptcha());
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-recaptcha-container', className);
    }

    renderReCaptcha() {
        const { value, theme, size, onChange } = this.props;
        window.grecaptcha.render('reCaptcha-container', {
            explicit: true,
            sitekey: value,
            theme,
            size,
            callback: onChange,
            'expired-callback': onChange,
            'error-callback': onChange,
        });
    }

    render() {
        const { error, style } = this.props;
        return (
            <div className={this.getContainerClassNames()} style={style}>
                <div id="reCaptcha-container" />
                <RenderIf isTrue={error}>
                    <div className="rainbow-recaptcha_error">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

ReCaptchaLoader.propTypes = {
    /** Specifies the site key for the recaptcha. */
    value: PropTypes.string,
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

ReCaptchaLoader.defaultProps = {
    value: undefined,
    theme: 'light',
    size: 'normal',
    error: undefined,
    onChange: () => {},
    className: undefined,
    style: {},
};

