import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import './styles.css';

export default class ReCaptchaComponent extends Component {

    componentDidMount() {
        window.grecaptcha.ready(() => this.renderReCaptcha());
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-recaptcha-container', className);
    }

    renderReCaptcha() {
        const { value, theme, size, tabIndex, onChange } = this.props;
        window.grecaptcha.render('recaptcha-container', {
            sitekey: value,
            theme,
            size,
            tabIndex,
            callback: onChange,
            'expired-callback': onChange,
            'error-callback': onChange,
        });
    }

    render() {
        const { error, style } = this.props;
        return (
            <div className={this.getContainerClassNames()} style={style}>
                <div id="recaptcha-container" />
                <RenderIf isTrue={!!error}>
                    <div className="rainbow-recaptcha_error">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

ReCaptchaComponent.propTypes = {
    value: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    size: PropTypes.oneOf(['normal', 'compact']).isRequired,
    tabIndex: PropTypes.number.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

ReCaptchaComponent.defaultProps = {
    tabIndex: 0,
    error: undefined,
    onChange: () => {},
    className: undefined,
    style: {},
};

