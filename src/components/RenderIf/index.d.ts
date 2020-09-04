import { ReactNode } from 'react';

export interface RenderIfProps {
    isTrue?: boolean;
    children?: ReactNode;
}

export default function(props: RenderIfProps): JSX.Element | null;
