import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ReCaptchaProps extends BaseProps {
    siteKey: string;
    lang?: string;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact';
    tabIndex?: number | string;
    error?: ReactNode;
    onChange?: (token: string) => void;
}

declare const ReCaptcha: React.ComponentType<ReCaptchaProps>;
export default ReCaptcha;
