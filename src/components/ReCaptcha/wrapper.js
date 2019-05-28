import React from 'react';
import ReCaptchaComponent from './component';

export default function ReCaptchaWrapper(props) {
    // eslint-disable-next-line react/prop-types
    const { isScriptLoaded, isScriptLoadSucceed, ...rest } = props;
    const shouldRender = isScriptLoaded && isScriptLoadSucceed;

    if (shouldRender) {
        return <ReCaptchaComponent {...rest} />;
    }
    return null;
}
