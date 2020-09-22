import { ReactNode } from 'react';

export interface RenderIfProps {
    isTrue?: any;
    children?: ReactNode;
}

export default function(props: RenderIfProps): JSX.Element | null;
