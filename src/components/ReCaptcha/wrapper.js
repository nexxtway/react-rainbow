import React from 'react';
import ReCaptchaLoader from './loader';

export default function ReCaptchaWrapper(props) {
    const { isScriptLoaded, isScriptLoadSucceed, ...rest } = props;
    const shouldRender = isScriptLoaded && isScriptLoadSucceed;

    if (shouldRender) {
        return <ReCaptchaLoader {...rest} />;
    }
    return null;
}
