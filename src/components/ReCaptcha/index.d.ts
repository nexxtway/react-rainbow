import { BaseProps } from './../types';

export interface ReCaptchaProps extends BaseProps {
    siteKey?: string;
    lang?: string;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact';
    tabIndex?: number | string;
    error?: string | JSX.ElementChildrenAttribute;
    // onChange?: ;
}

declare const ReCaptcha: React.ComponentType<ReCaptchaProps>;
export default ReCaptcha;
