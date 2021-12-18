import { ReactNode, ChangeEvent } from 'react';
import { BaseProps, LabelAlignment } from '../types';

export interface RatingProps extends BaseProps {
    value?: string | number;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
    name?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    readOnly?: boolean;
    required?: boolean;
}

declare const Rating: React.ComponentType<RatingProps>;
export default Rating;
