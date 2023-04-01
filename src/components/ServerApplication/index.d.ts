import { ReactNode } from 'react';
import { BaseProps } from '../types';
import { ThemeType } from '../../styled';

export interface ApplicationProps extends BaseProps {
    children?: ReactNode;
    locale?: string;
    theme?: ThemeType;
}

export default function(props: ApplicationProps): JSX.Element | null;
