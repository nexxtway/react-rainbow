import React from 'react';
import ReCaptchaComponent from './component';

export default function ReCaptchaWrapper(props) {
    const { isScriptLoaded, isScriptLoadSucceed, ...rest } = props;
    const shouldRender = isScriptLoaded && isScriptLoadSucceed;

    if (shouldRender) {
        return <ReCaptchaComponent {...rest} />;
    }
    return null;
}
