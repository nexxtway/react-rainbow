import { ReactNode, ChangeEvent } from 'react';
import { BaseProps } from '../types';

export interface RatingProps extends BaseProps {
    value?: string;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
    name?: string;
    label?: ReactNode;
}

declare const Rating: React.ComponentType<RatingProps>;
export default Rating;
