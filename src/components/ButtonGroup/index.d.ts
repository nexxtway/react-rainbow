import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ButtonGroupProps extends BaseProps {
    children?: ReactNode;
}

export default function(props: ButtonGroupProps): JSX.Element | null;
