import React, { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ApplicationProps extends BaseProps {
    children?: ReactNode;
}

export default function(props: ApplicationProps): JSX.Element | null;
