import React from 'react';
import PropTypes from 'prop-types';
import ReCaptchaComponent from './component';

export default function ReCaptchaWrapper(props) {
    const { isScriptLoaded, isScriptLoadSucceed, ...rest } = props;
    const shouldRender = isScriptLoaded && isScriptLoadSucceed;

    if (shouldRender) {
        return <ReCaptchaComponent {...rest} />;
    }
    return null;
}

ReCaptchaWrapper.propTypes = {
    isScriptLoaded: PropTypes.bool,
    isScriptLoadSucceed: PropTypes.bool,
};

ReCaptchaWrapper.defaultProps = {
    isScriptLoaded: false,
    isScriptLoadSucceed: false,
};
