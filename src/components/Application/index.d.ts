import { ReactNode } from 'react';
import { BaseProps } from '../types';

type ThemeType = {
    rainbow?: {
        palette?: {
            brand?: string;
            success?: string;
            error?: string;
            warning?: string;
            mainBackground?: string;
        };
    };
};

export interface ApplicationProps extends BaseProps {
    children?: ReactNode;
    locale?: string;
    theme?: ThemeType;
}

export default function(props: ApplicationProps): JSX.Element | null;
