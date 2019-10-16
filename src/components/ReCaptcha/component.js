import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import StyledContainer from './styled/container';
import StyledError from './styled/error';

export default class ReCaptchaComponent extends Component {
    constructor(props) {
        super(props);
        this.recaptchaID = uniqueId('recaptcha-container');
    }

    componentDidMount() {
        window.grecaptcha.ready(() => this.renderReCaptcha());
    }

    renderReCaptcha() {
        const { siteKey, theme, size, tabIndex, onChange } = this.props;
        window.grecaptcha.render(this.recaptchaID, {
            sitekey: siteKey,
            theme,
            size,
            tabIndex,
            callback: onChange,
            'expired-callback': onChange,
            'error-callback': onChange,
        });
    }

    render() {
        const { error, style, className } = this.props;
        return (
            <StyledContainer className={className} style={style}>
                <div id={this.recaptchaID} />
                <RenderIf isTrue={!!error}>
                    <StyledError>{error}</StyledError>
                </RenderIf>
            </StyledContainer>
        );
    }
}

ReCaptchaComponent.propTypes = {
    siteKey: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    size: PropTypes.oneOf(['normal', 'compact']).isRequired,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    error: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

ReCaptchaComponent.defaultProps = {
    error: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};
